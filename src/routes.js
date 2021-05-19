const express = require("express");
const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("ok");
});

// Annotation Route
routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.create);
routes.delete("/annotations/:id", AnnotationController.exclude);

// Priority Route
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Content Route
routes.post("/contents/:id", ContentController.update);

module.exports = routes;
