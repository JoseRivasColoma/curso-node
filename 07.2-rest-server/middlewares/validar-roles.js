const { request, response } = require("express")


const esAdminRole = (req = request, res = response, next) => {

    if (!req.usuarioAutenticado) {
        return res.status(500).json({
            msg: 'Se quiere validar el rol sin validar el token anteriormente'
        });
    }

    const { rol, nombre } = req.usuarioAutenticado

    if (rol != 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es un administrador`
        })
    }

    console.log(role);

    next();
}


const tieneRole = (...roles) => {
    return (req, res, next) => {

        if (!req.usuarioAutenticado) {
            return res.status(500).json({
                msg: 'Se quiere validar el rol sin validar el token anteriormente'
            });
        }

        if (!roles.includes(req.usuarioAutenticado.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            });
        }

        console.log(roles)
        next();
    }
}

module.exports = {
    esAdminRole,
    tieneRole
}