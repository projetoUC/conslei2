const express = require('express');
const multer = require('multer');
const router = express.Router();
const Paciente = require('../models/paciente');
const MIME_TYPE_EXTENSAO_MAPA = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/bmp': 'bmp'
}
const checkAuth = require('../middleware/check-auth');

const armazenamento = multer.diskStorage({
  //requisicao, arquivo extraido e uma função a ser
  //executada, capaz de indicar um erro ou devolver
  //o diretório em que as fotos ficarão
  destination: (req, file, callback) => {
    let e = MIME_TYPE_EXTENSAO_MAPA[file.mimetype] ? null: new Error ('Mime Type Inválido');
    callback(e, "backend/imagens")
  },
  filename: (req, file, callback) => {
    const nome = file.originalname.toLowerCase().split(" ").join("_");
    const extensao = MIME_TYPE_EXTENSAO_MAPA[file.mimetype];
    callback(null, `${nome}-${Date.now()}.${extensao}`);
  },
})

router.post('', checkAuth, multer({storage: armazenamento}).single('imagem'), (req, res, next) => {
  const imagemURL = `${req.protocol}://${req.get('host')}`
  const paciente = new Paciente({
    nome: req.body.nome,
    rg: req.body.rg,
    cpf: req.body.cpf,
    sexo: req.body.sexo,
    fone_fixo: req.body.fone_fixo,
    celular: req.body.celular,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado,
    email: req.body.email,
    imagemURL: `${imagemURL}/imagens/${req.file.filename}`,
    criador: req.dadosUsuario.idUsuario

  })
  paciente.save().then((pacienteInserido) => {
    res.status(201).json({
      mensagem: 'Paciente inserido',
      //id: pacienteInserido._id
      paciente: {
        id: pacienteInserido._id,
        nome: pacienteInserido.nome,
        rg: pacienteInserido.rg,
        cpf: pacienteInserido.cpf,
        sexo: pacienteInserido.sexo,
        fone_fixo: pacienteInserido.fone_fixo,
        celular: pacienteInserido.celular,
        endereco: pacienteInserido.endereco,
        bairro: pacienteInserido.bairro,
        cep: pacienteInserido.cep,
        cidade: pacienteInserido.cidade,
        estado: pacienteInserido.estado,        
        email: pacienteInserido.email,
        imagemURL: pacienteInserido.imagemURL
      }
    });
  });
});

router.get('', (req, res, next) => {
  const pageSize = +req.query.pageSize;
  const page = +req.query.page;
  const consulta = Paciente.find();
  let pacientesEncontrados;
  if (pageSize && page){
    consulta.
    skip(pageSize * (page - 1)).
    limit(pageSize);

  }
  consulta.then (documents => {
    pacientesEncontrados = documents
    return Paciente.count()
  })
  .then((count) => {
    res.status(200).json({
      mensagem: "OK",
      maxPacientes: count,
      pacientes: pacientesEncontrados
    })
  })
});

router.get('/:id', (req, res, next) => {
  Paciente.findById(req.params.id).then( pac => {
    if (pac) {
      res.status(200).json(pac);
    } else {
      res.status(404).json({mensagem: "Paciente não encontrado!"});
    }
  });
});

router.delete('/:id', checkAuth, (req, res, next) => {
  Paciente.deleteOne({_id: req.params.id, criador: req.dadosUsuario.idUsuario}).then(resultado => {
    if (resultado.n > 0){
      res.status(200).json({mensagem: "Paciente removido"});
    } else {
      res.status(401).json({mensagem: "Remoção não permitida"});
    }
  });
});

router.put('/:id', checkAuth, multer({storage: armazenamento}).single('imagem'), (req, res, next) => {
  console.log(req.file);
  let imagemURL = req.body.imagemURL; //tentamos pegar a URL já existente
  if(req.file) { //mas se for um arquivo, montamos uma nova
    const url = req.protocol + "://" + req.get("host");
    imagemURL = url + "/imagens/" + req.file.filename;
  }
  const paciente = new Paciente({
   _id: req.params.id,
    nome: req.body.nome,
    rg: req.body.rg,
    cpf: req.body.cpf,
    sexo: req.body.sexo,
    fone_fixo: req.body.fone_fixo,
    celular: req.body.celular,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado,
    email: req.body.email,
    imagemURL: imagemURL,
    criador: req.dadosUsuario.idUsuario


  });
  Paciente.updateOne({_id: req.params.id, criador:req.dadosUsuario.idUsuario}, paciente)
  .then((resultado) => {
    //console.log(resultado);
    if(resultado.nModified > 0){
      res.status(200).json({mensagem: 'Atualização realizada com sucesso'});
    } else {
      res.status(401).json({mensagem: 'Atualização não permitida'});
    }
  }).catch((err) => {
    console.log(err);
  });

})

module.exports =router;

