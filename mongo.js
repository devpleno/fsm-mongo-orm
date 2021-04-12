const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose
  .connect('mongodb://localhost/mongo-orm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const PessoasSchema = mongoose.Schema({
      nome: String,
      cargo: String
    })
    const Pessoa = mongoose.model('Pessoa', PessoasSchema)
    // const tulio = new Pessoa({ nome: 'Tulio Faria', cargo: 'CTO' })
    // tulio.save(() => console.log('salvo'))

    Pessoa.find({}, (err, docs) => {
      console.log(docs)
    })

    Pessoa.remove({
      _id: '6073b799fa9b442d9c73ff39'
    }, (err, res) => console.log('ok'))
  })