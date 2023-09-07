const check = require('./model');


// check.arti.save().then(()=>{
//         console.log("Docement is saved");
//     }).catch((e)=>{console.log(e);})
    
check.db.find().sort({_id:-1}).limit(3).then((fit)=>{
        console.log(fit);
    })
    