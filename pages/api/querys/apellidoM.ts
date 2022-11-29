import iron from "../../../config/session";
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{

    const cambiarApellidoM = async(req: any,res: any ) =>{
        const {correo,apellido_m} = req.body
        const [result2]:any = await pool.query('UPDATE cuenta SET apM_cue=? WHERE cor_cue = ?',[apellido_m,correo])
        return result2
        
    }
    switch(req.method){
        case 'POST':
            try {
                const x:any = await cambiarApellidoM(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
    }
    
})