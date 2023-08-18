const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const db = mongo('mongodb+srv://vickyalfina:mongo1234@cluster0.iqvpvvj.mongodb.net/CSR',['todos'])

router.get('/', function(req, res, next){
    let query = {};
    if (req.query.text) query.text = req.query.text;
    if (req.query.isCompleted) {
        if (req.query.isCompleted === 'true') query.isCompleted = true;
        else query.isCompleted = false
    }
    db.todos
    .find(query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

router.get('/:id', function(req, res, next){
    let query = {
        _id: db.ObjectId(req.params.id)
    };

    db.todos
    .find(query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;









// router.put('/:id', function(req, res, next){
//     let todo = req.body;
//     if(!todo.text || !(todo.isCompleted + '')){
//         res.status(400);
//         res.json({
//             "error": "Invalid Data"
//         })
//     } else {
//         db.todos
//         .replaceOne({
//             _id: db.ObjectId(req.params.id)
//         }, todo, {}, function(err, result){
//             if(err){
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//     }
// });

// router.delete('/:id', function(req, res, next){ {
//     db.todos
//         .remove({
//             _id: db.ObjectId(req.params.id)
//         }, function(err, result){
//             if(err){
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//     }
// });




