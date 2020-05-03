const express = require('express')
const routes = express.Router()

/* HOME */
routes.get('/', (req, res) => {

    return res.render('home/index')
})

/* SELLERS */
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

/* DELIVERERS */
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

/* USERS */
routes.get('/users/register', (req, res) => {
    
    return res.render('user/register')
})
routes.get('/users/login', (req, res) => {

    return res.render('session/login')
})

/* PROFILE */
routes.get('/profile', (req, res) => {
    let products = []

    for (i=1; i<=4; i++) {
        products.push({
            photo: 'https://via.placeholder.com/500x500',
            name: `Produto ${i}`,
            price: 'R$4,00'
        })
    }

    return res.render('profile/index', { products })
})

module.exports = routes