import Sequelize from "sequelize";

const sequelize = new Sequelize("auth-db", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamp: false,
        underscored: true,
        freezeTableName: true
    }
});

sequelize.authenticate()
.then( () => {
    console.info("Conexao estabelecida!");
})
.catch( (err) => {
    console.error("Nao foi possivel conectar");
    console.error(err.message);
});

export default sequelize;
