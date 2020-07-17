const Herder = require("../models/herder.model.js");

exports.findAll = (req, res) => {
    Herder.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the data."
            });
        else res.send(data);
    });
};
