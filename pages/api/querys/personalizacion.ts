import iron from "../../../config/session";
import { pool } from "../../../config/bdConection";

export default iron(async(req:any,res:any)=>{

    const cambiarUnidad = async(req: any,res: any ) =>{
        const {correo,personalizacion} = req.body
        const [result2]:any = await pool.query('UPDATE cuenta SET id_per=? WHERE cor_cue = ?',[personalizacion,correo])
        return result2
        
    }
    switch(req.method){
        case 'POST':
            try {
                const x:any = await cambiarUnidad(req,res)
                return res.status(200).json(x);
            } catch (error:any) {
                return res.status(400).json(error)
            }
    }
    
})