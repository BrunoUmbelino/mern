const express = require("express");
const NotesController = require("./controllers/NotesController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("ok");
});

// Annotation Route
routes.get("/annotations", NotesController.read);
routes.post("/annotations", NotesController.create);
routes.delete("/annotations/:id", NotesController.exclude);

// Priority Route
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Content Route
routes.post("/contents/:id", ContentController.update);

module.exports = routes;
