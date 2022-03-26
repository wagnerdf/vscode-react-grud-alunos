const db = require("../models");
const Aluno = db.alunos;
const Op = db.Sequelize.Op;
// Create and Save a new Aluno
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Aluno
    const aluno = {
      nome: req.body.nome,
      email: req.body.email,
      published: req.body.published ? req.body.published : false
    };
    // Save Aluno in the database
    Aluno.create(aluno)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Aluno."
        });
      });
  };

// Retrieve all Alunos from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  Aluno.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving aluno."
      });
    });
};

// Find a single Aluno with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Aluno.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Aluno with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Aluno with id=" + id
        });
      });
  };

// Update a Aluno by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Aluno.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      // eslint-disable-next-line eqeqeq
      if (num == 1) {
        res.send({
          message: "Aluno was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Aluno with id=${id}. Maybe Aluno was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Aluno with id=" + id
      });
    });
};

// Delete a Aluno with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Aluno.destroy({
      where: { id: id }
    })
      .then(num => {
        // eslint-disable-next-line eqeqeq
        if (num == 1) {
          res.send({
            message: "Aluno was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Aluno with id=${id}. Maybe Aluno was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Aluno with id=" + id
        });
      });
  };

// Delete all Alunos from the database.
exports.deleteAll = (req, res) => {
  Aluno.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Aluno were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Aluno."
      });
    });
};

// Find all published Alunos
exports.findAllPublished = (req, res) => {
    Aluno.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Alunos."
        });
      });
  };
