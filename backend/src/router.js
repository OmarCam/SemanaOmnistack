const express = require("express");

const ongControler = require("./controlers/ongControlers");
const incidentControlers = require("./controlers/incidentControlers");
const profileControlers = require("./controlers/profileControlers");
const sessionControlers = require("./controlers/sessionControlers");

const routes = express.Router();

routes.post('/sessions', sessionControlers.create);

routes.get("/ongs", ongControler.index);
routes.post("/ongs", ongControler.create);

routes.get("/profile", profileControlers.index);

routes.get("/incidents", incidentControlers.index);
routes.post("/incidents", incidentControlers.create);
routes.delete("/incidents/:id", incidentControlers.delete);

module.exports = routes;