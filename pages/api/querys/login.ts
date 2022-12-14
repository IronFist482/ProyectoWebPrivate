import iron from "../../../config/session";
const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{
    const consultarDatos = async(req: any,res: any ) =>{
        const {correo,contrasena} = req.body
        const [[result]]:any = await pool.query('SELECT con_cue FROM cuenta WHERE cor_cue = ?',[correo])
        const bytesString = String.fromCharCode(...result.con_cue)
        try{
            const resultado = bcryptjs.compareSync(contrasena,bytesString)
            console.log(resultado)
            console.log(bytesString)
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
    }
    switch(req.method){
        case 'POST':
            try {
                
                const x:any = await consultarDatos(req,res)
                return res.status(200).json(x);
            }
            catch(error:any){
                
                return res.status(400).json(error)
            }
    }
    
})


