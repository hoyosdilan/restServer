const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    console.log(req.query);
    res.json({
        msg: 'get API'
    });
};

const usuariosPut = (req = request, res = response) => {
    console.log(req.params);
    res.json({
        msg: 'put API',
        id: req.params.id

    });
};

const usuariosPost = (req = request, res = response) => {

    const body = req.body;
    res.json({
        msg: 'post API',
        body
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};