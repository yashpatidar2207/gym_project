import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  });

  app.post("/submit", (req, res) => {
    const name=req.body["name"];
    const age=req.body["age"];
    const gender=req.body["gender"];
    const weight=req.body["weight"];
    const address=req.body["address"];
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(weight)
    console.log(address)
    res.render("submit.ejs");
  });
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
