const sql = require("./db.js");

const Herder = function(herder) {
    this.parentId = herder.parentId;
    this.name = herder.name;
    this.description = herder.description;
};


Herder.getAll = result => {
    sql.query("SELECT * FROM `nerf-herders`.`nerfHerdersData` ORDER BY `nerf-herders`.`nerfHerdersData`.`parentId` ASC", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Herder;
