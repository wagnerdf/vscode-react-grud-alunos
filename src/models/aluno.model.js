module.exports = (sequelize, Sequelize) => {
    const Aluno = sequelize.define("alunos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Aluno;
  };