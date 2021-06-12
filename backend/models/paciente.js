//importando o pacote
const mongoose = require('mongoose');

//definindo o schema
//note a semelhança com recursos de bases relacionais
const pacienteSchema = mongoose.Schema({
    nome:{type: String, required: true},
    rg: {type: String, required: true},
    cpf: {type: String, required: true},
    sexo: {type: String, required: true},
    fone_fixo: {type: String, required: false, default: '00000000'},
    celular: {type: String, required: false, default: '00000000'},
    endereco: {type: String, required: true},
    bairro: {type: String, required: true},
    cep: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    email: {type: String, required: true},
    imagemURL: {type: String, required: true},
    criador: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true} 
  
});

//criamos o modelo associado ao nome Paciente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Paciente', pacienteSchema);
