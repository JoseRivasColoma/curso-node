const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router()

//Obtener todas las categorias - publico
router.get('/', (req, res)=>{
    console.log('get')
});
//Obtener una categorias - publico
router.get('/:id', (req, res)=>{
    console.log('get by id')
});
//Create categorias privado- cualquier persona con un token válido
router.post('/', (req, res)=>{
    console.log('post')
});
//Actualizar categorias privado - cualquier persona con un token válido
router.put('/:id', (req, res)=>{
    console.log('put')
});
//Borrar categorias privado - solo admins
router.delete('/:id', (req, res)=>{
    console.log('delete')
});

module.exports = router;