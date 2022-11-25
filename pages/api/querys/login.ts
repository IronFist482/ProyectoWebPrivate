import iron from "../../../config/session";
const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{
    const consultarDatos = async(req: any,res: any ) =>{
        const {correo,contrasena} = req.body
        const [[result]]:any = await pool.query('SELECT con_cue FROM cuenta WHERE cor_cue = ?',[correo])
        const bytesString = String.fromCharCode(...result.con_cue)
        try{
            const resultado = bcryptjs.compare(contrasena,bytesString)
            if(resultado){
                const [data]:any = await pool.query('SELECT * FROM cuenta WHERE cor_cue = ?',[correo])
                req.session.set('user', ...data)
                await req.session.save()
                return res.status(200).json('Usuario autenticado')
            }else{
                return res.status(400).json('Usuario no autenticado')
            }
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
            try {
                consultarDatos(req,res)
            }
            catch(error:any){
            }
    }
    
})


