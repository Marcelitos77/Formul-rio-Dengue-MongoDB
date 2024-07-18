const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://msssiqueira:hSdyLTA2oDqhy9MK@cluster0.gk9tbcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const duvidaSchema = new mongoose.Schema({
  email: String,
  duvida: String
});

const Duvida = mongoose.model('Duvida', duvidaSchema);

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/enviar-duvida', (req, res) => {
  const novaDuvida = new Duvida({
    email: req.body.email,
    duvida: req.body.duvida
  });

  novaDuvida.save()
    .then(() => res.send('Dúvida enviada com sucesso!'))
    .catch(err => res.status(400).send(err));
});

//hSdyLTA2oDqhy9MK