const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default async function handler(req: any, res: any){

    const hashThing = (password: any) =>{
        
        return bcryptjs.hashSync(password,8)
    }

    const guardarDatos = async(req: { method?: any; body: any; query?: { id: string; }; },res: { status?: (arg0: number) => { (): any; new(): any; json: { (arg0: string): any; new(): any; }; }; redirect?: any; }) =>{
        console.log('Estoy aquí')
        const {nombre,ap_paterno,ap_materno,correo,contrasena,unidad_a,aprendizaje} = req.body
        const hash = hashThing(contrasena)
        const result = await pool.query('INSERT INTO cuenta (nom_cue,apP_cue,apM_cue,cor_cue,con_cue,id_uni,id_per) VALUES(?,?,?,?,?,?,?)',[nombre,ap_paterno,ap_materno,correo,hash,unidad_a,aprendizaje])  
        return result
    }

    
    switch(req.method){
        case 'POST':
            try {
                const x:any = await guardarDatos(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
        default:
            return res.status(400).json({message: 'Method not allowed'})
    }
    
}