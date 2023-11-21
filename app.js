const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const PORT = process.env.PORT || 3000; //selección de variable de entorno...

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.listen(PORT, () =>
  console.log(`Servidor funcionando en el puerto ${PORT}`)
);
