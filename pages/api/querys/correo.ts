import iron from "../../../config/session";
const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{
    const cambiarCorreo = async(req: any,res: any ) =>{
        const {correoActual,correoNuevo} = req.body
        if(correoActual!=correoNuevo){
            console.log('Son diferentes correos')
            const [result]:any = await pool.query('SELECT con_cue FROM cuenta WHERE cor_cue = ?',[correoActual])
            console.log(result)
            if(result!=''){
                const [result2]:any = await pool.query('UPDATE cuenta SET cor_cue=? WHERE cor_cue = ?',[correoNuevo,correoActual])

                return result2
            }
            else{
                                
                return 'No es correcto tu correo actual'
            }
        }
        else{
            return 'No puedes cambiar el mismo correo'
        }
        
    }
    switch(req.method){
        case 'POST':
            try {
                const x:any = await cambiarCorreo(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
    }
    
})