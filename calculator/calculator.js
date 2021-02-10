const express = require("express");
const bodyParser = require("body-parser") //now that we've added body-parser we need to require it so we can access it
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
})); //body-parser works with express and now we can use it
//urlencoded is used when your're trying to get info that is stored in a HTML file
app.get("/", function(req, res) { //this is the route we need to add this first, this is what the page would show when it opens
  res.sendfile(__dirname + "/index.html"); //this is a path that connects the Calculatorto the html file
});
app.post("/", function(req, res) {//this handles any post request that comes to our home route, a call back function

  var num1 = Number(req.body.num1);//req.body.num1 gets parsed as a text so we need to convert it to a number
  var num2 = Number(req.body.num2);//the body is everything we got after was parsed the request and the Num1&2 is the value we got from the form after we parsed it
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
})
//step 1:specify a get, what happens when the user goes to the bmi Calculator page,
//http://localhost:3000/bmiCalculator this is the get request
app.get("/bmicalculator", function(req, res){
  res.sendfile(__dirname + "/bmicalculator.html")

})
//step 2: this handles our post request
app.post("/bmicalculator", function(req, res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("The result of the calculation is " + bmi);
})

app.listen(3000, function() { //this is printed on the console
  console.log("Server is running on port 3000")
});
