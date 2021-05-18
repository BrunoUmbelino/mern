const Annotations = require("../models/AnnotationData");

const update = async (request, response) => {
  const { id } = request.params;
  const { notes } = request.body;

  const annotation = await Annotations.findOne({ _id: id });
  if (notes) {
    annotation.notes = notes;
    await annotation.save();
  }

  return response.json(annotation);
};

module.exports = { update };
