const express = require("express");
const app = express();

const db = require('./app/configs/db.config');

app.get("/", (req, res) => {
  console.log("running");
  res.send("running");
});

db.connect((error)=>{
    if(error){
        console.log('there is an error on your connection string');
        return error;
    }
    console.log('you are doing wonders');
});


const port = process.env.PORT || 3333;

//require controllers
const register = require('./app/routes/register.route');
//end points
app.use('/api', register);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
