const { request, response } = require("express");
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async (req = request, res = response) => {

    const { correo, password } = req.body;
    try {

        //Verificar si el email existe
        const usuario = await Usuario.findOne({ correo })
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Correo no existe'
            });
        }
        //Si el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario desactivado'
            });
        }
        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            });
        }
        //Generar el JWT
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}