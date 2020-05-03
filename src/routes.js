const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.render('home/index')
})
routes.get('/search', (req, res) => {
    let stores = []

    for (i=1; i<=10; i++) {
        stores.push({
            photo: 'https://via.placeholder.com/500x500',
            name: `Loja ${i}`,
            description: 'Vendemos máscaras e produtos de limpeza'
        })
    }

    return res.render('home/search', { stores })
})
routes.get('/register', (req, res) => {

    return res.render('user/register/index')
})


module.exports = routes