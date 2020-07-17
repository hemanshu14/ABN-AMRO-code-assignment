module.exports = app => {
    const herders = require("../controllers/herder.controller.js");

    app.get("/herders", herders.findAll);
};
