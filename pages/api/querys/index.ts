const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default async function handler(req: { method: any; body: { tipo: string; }; query: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): any; new(): any; }; }; }) {

    const hashThing = (password: any) =>{
        
        return bcryptjs.hashSync(password,8)
    }

    const guardarDatos = async(req: { method?: any; body: any; query?: { id: string; }; },res: { status?: (arg0: number) => { (): any; new(): any; json: { (arg0: string): any; new(): any; }; }; redirect?: any; }) =>{
        console.log('Estoy aquí')
        const {nombre,ap_paterno,ap_materno,correo,contrasena,unidad_a,aprendizaje} = req.body
        const [correosbd]= await pool.query('SELECT cor_cue FROM cuenta WHERE cor_cue = ?',[correo])
        
        console.log(correosbd)
        console.log(correo)
        const sfCorreos=JSON.stringify(correosbd)
        console.log(sfCorreos)
        if(sfCorreos=='[]'){
            const hashContrasena=hashThing(contrasena);
            console.log(hashContrasena)
            const result = await pool.query('INSERT INTO cuenta (nom_cue,apP_cue,apM_cue,cor_cue,con_cue,id_uni,id_per) VALUES(?,?,?,?,?,?,?)',[nombre,ap_paterno,ap_materno,correo,hashContrasena,unidad_a,aprendizaje])

            console.log('Redireccion a la principal')
            return res.redirect(307, '/Login');
        }
        else{
            console.log('Está repetido')
            return res.redirect(307, '/Signin');
        }
    }

    const consultarDatos = async(req: { method?: any; body: any; query?: { id: string; }; },res: { status?: (arg0: number) => { (): any; new(): any; json: { (arg0: string): any; new(): any; }; }; redirect?: any; }) =>{
        const {correo,contrasena} = req.body
        console.log(correo+contrasena)
        const [[result]]:any = await pool.query('SELECT con_cue FROM cuenta WHERE cor_cue = ?',[correo])
        const bytesString = String.fromCharCode(...result.con_cue)
        try{
            bcryptjs.compare(contrasena,bytesString,(_err: any,resultado: any)=>{
                if(resultado){
                    console.log('Contraseña correcta')
                }
                else{
                    console.log('Contraseña incorrecta')
                }
                console.log(bytesString)
            })
        }
        catch(err){
            console.log(err)
        }
        const sfResult=JSON.stringify(result)

        if(sfResult==undefined||sfResult==null){
            console.log('Esas credenciales no coinciden')
            return res.redirect(307, '/Signin')
        }
        else{
            console.log('Entrasteee')
            return res.redirect(307, '/Principal');
        }
    }
    switch(req.method){

        case 'POST':
            if(req.body.tipo=='guardar'){
                guardarDatos(req,res)
            }
            else if(req.body.tipo=='consultar'){
                consultarDatos(req,res)
            }
            else{
                console.log('No se que hacer')
            }
        case 'GET':
            return await consultarDatos(req,res) 
        
        case 'PUT':
            return res.status(200).json('Actualizando un producto: '+ req.query.id)
        case 'DELETE':
            return res.status(200).json('Eliminando un producto: '+ req.query.id)
        default:
            return res.status(405).json('Method not allowed')
    }
    
}