const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saulrms:saulrms123@saulscluster.fcfuocf.mongodb.net/?retryWrites=true&w=majority&appName=SaulsCluster', {
})
.then(() => console.log('MongoDB conectado!'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));