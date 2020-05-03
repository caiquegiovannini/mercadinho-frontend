const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {

    return res.render('home/index')
})
routes.get('/deliverers', (req, res) => {
    let deliverers = []

    for (i=1; i<=10; i++) {
        deliverers.push({
            photo: 'https://via.placeholder.com/500x500',
            name: `Entregador ${i}`,
            description: 'Avaliação ou alguns dados'
        })
    }

    return res.render('home/deliverers', { deliverers })
})
routes.get('/users/register', (req, res) => {
    
    return res.render('user/register')
})
routes.get('/users/login', (req, res) => {

    return res.render('session/login')
})

routes.get('/sellers', (req, res) => {
    let stores = []

    for (i=1; i<=8; i++) {
        stores.push({
            photo: 'https://via.placeholder.com/500x500',
            name: `Loja ${i}`,
            description: 'Vendemos máscaras e produtos de limpeza'
        })
    }

    return res.render('home/sellers', { stores })
})

module.exports = routes