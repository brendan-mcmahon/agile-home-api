const { pool } = require("../config");

createNewItem = (item, next) => {
    const queryText = `
    INSERT INTO public.stories(
        sprintid, projectid, houseid, name, description, estimate, type, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        returning *;`;

    pool.query(queryText, [item.sprintId, item.projectId, item.houseId, item.name, item.description, item.estimate, item.type, 'new'], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

getBacklog = (houseId, next) => {
    const queryText = "SELECT * FROM stories where houseid = $1";

    pool.query(queryText, [houseId], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

module.exports = {
    createNewItem,
    getBacklog,
}