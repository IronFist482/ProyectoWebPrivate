const bcryptjs = require('bcryptjs')
import { pool } from "../../../config/bdConection";

export default async function handler(req, res) {

    const hashThing = (password) =>{
        return bcryptjs.hashSync(password,8)
    }

    const guardarDatos = async(req,res) =>{
        const {nombre,ap_materno,ap_paterno,correo,contrasena,aprendizaje} = req.body
        const hash = hashThing(contrasena)
        const correosbd= await pool.query('SELECT cor_cue FROM cuenta WHERE cor_cue = ?',[correo])
        console.log(correosbd)
        console.log(correo)
        if(correosbd==null){
            try {
                // some await stuff here
                res.redirect(307, '/Signin');
            } catch (err) {
                res.status(500).send({ error: 'Error while fetching data' });
            }
        }
        else{
            try {
                // some await stuff here
                res.redirect(307, '/');
            } catch (err) {
                res.status(500).send({ error: 'Error while fetching data' });
            }
        }
    }

    const consultarDatos = async(req,res) =>{
        const {correo,contrasena,} = req.body
        const [result] = await pool.query('SELECT * FROM cuenta')
        console.log(result)
        console.log("ptm")
        return res.status(200).json('Tomando un producto: '+ req.query.id)
    }
    switch(req.method){

        case 'POST':
            return await guardarDatos(req,res)
            
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