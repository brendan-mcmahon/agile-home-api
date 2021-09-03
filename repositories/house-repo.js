const { pool } = require("../config");

getAllHouses = (next) => {
    const queryText = "SELECT * FROM houses";

    pool.query(queryText, (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

createHouse = (house, next) => {
    const queryText = `INSERT INTO houses(name)
        VALUES ($1)
        returning *;`;

    pool.query(queryText, [house.name], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

module.exports = {
    getAllHouses,
    createHouse
}