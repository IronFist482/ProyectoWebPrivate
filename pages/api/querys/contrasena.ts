import iron from "../../../config/session";
const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{
    
    const hashThing = (password: any) =>{
        
        return bcryptjs.hashSync(password,8)
    }
    const cambiarContrasena = async(req: any,res: any ) =>{
        const {correo,contrasenaNueva} = req.body
        const [[result]]:any = await pool.query('SELECT con_cue FROM cuenta WHERE cor_cue = ?',[correo])
        const contrasenaHasheada = hashThing(contrasenaNueva)
        const [result2]:any = await pool.query('UPDATE cuenta SET con_cue=? WHERE cor_cue = ?',[contrasenaHasheada,correo])
        return result2
        
    }
    switch(req.method){
        case 'POST':
            try {
                const x:any = await cambiarContrasena(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
    }
    
})