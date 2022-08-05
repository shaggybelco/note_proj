const db = require("../configs/db.config");
const { use } = require("../routes/create.route");

exports.getall = (req, res) =>{
    const {user_id} = req.body;

    db.query('SELECT * FROM notes WHERE user_id = $1',[user_id],(err, results)=>{
        if(err){
            res.status(400).json({error: 'failed to delete post'});
        }
        res.status(200).json(results.rows)
    })
}