const express = require('express');
const app = express();

// Route for the root path '/'
app.get('/', (req, res) => {
  console.log("hyy");
  // res.status(200).send({error:"error message"});
  // res.json({express:"learning express"});
  // res.send("I can do it");
  res.render("index.ejs");
  // res.render("index", {textk: "hello hyy"});
});

// Route for "/user"
// app.get("/user", (req, res) => {
//   res.send("user information");
// });

// // Route for "/user/newuser"
// app.get("/user/newuser", (req, res) => {
//   res.send("new user added");
// });
// app.get("/user/delete",(req,res)=>{
//   res.send("user delete");
// })
const userRoute=require('./routes/user');
app.use('/user',userRoute);


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
