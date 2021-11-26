const { request, response, json } = require("express");
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");
const { googleVerify } = require("../helpers/google-verify");


const login = async (req = request, res = response) => {

    const { correo, password } = req.body;
    try {

        //Verificar si el email existe
        const usuario = await Usuario.findOne({ correo })
        if (!usuario) {
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


const googleSignIn = async (req = request, res = response, next) => {

    const { id_token } = req.body;

    try {

        const { nombre, img, correo } = await googleVerify(id_token);

        //Verificar si el correo existe en BD
        let usuario = await Usuario.findOne({ correo });
        //Verificar si el usuario existe.

        if (!usuario) {
            //Grabamos el usuario
            const data = {
                nombre,
                correo,
                password: ':p',
                img,
                google: true,
                rol: 'USER_ROLE'
            }
            usuario = new Usuario(data)
            await usuario.save();
        }
        //Si el usuario en BD está bloqueado
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Usuario bloqueado'
            });
        }

        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: `El token no se puedo verificar: ${error}`
        })
    }

}

module.exports = {
    login,
    googleSignIn
}