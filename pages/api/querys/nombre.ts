import iron from "../../../config/session";
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{

    const cambiarNombre = async(req: any,res: any ) =>{
        const {correo,nombre} = req.body
        const [result2]:any = await pool.query('UPDATE cuenta SET nom_cue=? WHERE cor_cue = ?',[nombre,correo])
        console.log(result2)
        return result2
        
    }
    switch(req.method){
        case 'POST':
            try {
                const x:any = await cambiarNombre(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
    }
    
})