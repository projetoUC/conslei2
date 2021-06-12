require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const pacienteRoutes = require('./rotas/pacientes');
const usuarioRoutes = require ('./rotas/usuarios');
app.use(cors());
app.use(express.json());
app.use('/imagens', express.static(path.join("backend/imagens")));


const Paciente = require('./models/paciente');
const { ConsoleReporter } = require('jasmine');
const user_db = process.env.MONGODB_USER;
const pass_db = process.env.MONGODB_PASSWORD;
const cluster_db = process.env.MONGODB_CLUSTER;
const name_db = process.env.MONGODB_DATABASE;

mongoose.connect(`mongodb+srv://projetouc:usjt2020@cluster0.moyxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

.then(() => {
  console.log("Conexão OK");
}).catch(() => {
  console.log("Conexão NOK");
})


app.use('/api/pacientes', pacienteRoutes);
app.use('/api/usuario', usuarioRoutes);

app.use('/api/pacientes', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    pacientes: pacientes
  });
});

module.exports = app;
