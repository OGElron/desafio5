const express = require("express");
const classProductos = require('./api/classProductos.js')
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const productosApi = new classProductos();

app.set('views', './views');
app.set('view engine', 'pug'); 

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('index');
});

app.get('/productos', (req, res) => {
    const data = productosApi.listarAll();
    res.render('main', {data})
});
app.post('/productos', (req, res) => {
    const form = req.body;
    productosApi.save(form);
});

/* server listen */
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on('error', error => console.log(`Error en servidor ${error}`));

