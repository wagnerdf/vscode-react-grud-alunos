module.exports = app => {
    const aluno = require("../controllers/aluno.controller.js");
    var router = require("express").Router();
    // Create a new Aluno
    router.post("/", aluno.create);
    // Retrieve all Aluno
    router.get("/", aluno.findAll);
    // Retrieve all published Aluno
    router.get("/published", aluno.findAllPublished);
    // Retrieve a single Aluno with id
    router.get("/:id", aluno.findOne);
    // Update a Aluno with id
    router.put("/:id", aluno.update);
    // Delete a Aluno with id
    router.delete("/:id", aluno.delete);
    // Create a new Aluno
    router.delete("/", aluno.deleteAll);
    app.use('/api/aluno', router);
  };