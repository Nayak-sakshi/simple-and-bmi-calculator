const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/" , function(res , req){
  req.sendFile(__dirname + "/index.html");
});

app.post("/" , function(res ,req){

  var num1 = Number(res.body.n1);
  var num2 = Number(res.body.n2);
  var result = num1 + num2;

  req.send("The result of the calculation is:" + result);
});

app.get("/bmicalculator" , function(res , req){
  req.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(res, req){

  var weight = Number(res.body.weight);
  var height = Number(res.body.height);
  var bmiresult = weight + height;

  req.send(" your Body mass index is : " + bmiresult);
});

app.listen(3000 , function(){
  console.log(" the server is started at 3000 ")
});
