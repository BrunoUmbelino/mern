const { response, request } = require("express");
const Annotations = require("../models/AnnotationData");

const read = async (req, res) => {
  const annotationList = await Annotations.find();
  return res.json(annotationList);
};

const create = async (req, res) => {
  const { title, notes, priority } = req.body;

  if (!notes || !title) {
    return response
      .status(400)
      .json({ error: "necessário um título ou anotação!" });
  }
  const annotationCreated = await Annotations.create({
    title,
    notes,
    priority,
  });

  return res.json(annotationCreated);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  const annotationExcluded = await Annotations.findOneAndDelete({ _id: id });

  if (annotationExcluded) {
    return res.status(200).json(annotationExcluded);
  }
  return response.status(401).json({ error: "register not found" });
};

module.exports = { read, create, exclude };
