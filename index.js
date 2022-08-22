//framework
const express = require("express");
const app = express()

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')
//config
//template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

//app.set('views options', { layout: 'other' });
//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//rotas
app.get('/',function(req,res){
    Post.findAll({order:[['id','desc']]}).then(function(posts){
        res.render('home',{posts: posts})
    })
    })
    app.get('/deletar/:id', function (req, res) {
        Post.destroy({where:{'id':req.params.id}}).then(function () {
            res.redirect('/')
        }).catch(function (error) {
            res.send('Esta postagem não existe!' + error)
        })
     })

app.get('/cad', function (req, res) {
   res.render('formulario')
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (error) {
        res.send('Error: ' + error)
    })
})

app.listen(8080, function () {
    console.log('servidor on-line')
})

