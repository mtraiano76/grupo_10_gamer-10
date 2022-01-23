const express= require('express');
const path = require('path');
const app= express();

app.listen(3000, () => {
    console.log('Gamer 10#')
});

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './view/index.html'));
})

app.get('/productCart', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './view/productCart.html'));
})

app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './view/login.html'));
})

app.get('/productDetail', function(req, res){
    res.sendFile(path.resolve(__dirname, './view/productDetail.html'));
})

app.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname, './view/register.html'));
})

app.get('/detalleCompra', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './view/detalleCompra.html'));
})







