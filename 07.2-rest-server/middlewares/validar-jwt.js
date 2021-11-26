const { response, request } = require('express');
const Usuario = require('../models/usuario')
const jwt = require('jsonwebtoken');

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        req.usuarioAutenticado = await Usuario.findById(uid)


        
        // Verificar si el uid tiene estado en true

        if ( !req.usuarioAutenticado || !req.usuarioAutenticado.estado ) {
            return res.status(401).json({
                msg: 'Usuario no válido'
            });
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        });
    }

}

module.exports = {
    validarJWT
}