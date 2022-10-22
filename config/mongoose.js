const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeilDevelopment');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting with databases'));
db.once('open',function(){
    
    console.log('databases are connected succesfully');

});
