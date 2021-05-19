const Notes = require("../models/NotesData");

const read = async (request, response) => {
  const priority = request.query;
  const priorityNotes = await Notes.find(priority);
  return response.json(priorityNotes);
};

const update = async (request, response) => {
  const { id } = request.params;
  const annotation = await Notes.findOne({ _id: id });

  if (annotation.priority) {
    annotation.priority = false;
  } else {
    annotation.priority = true;
  }

  await annotation.save();
  return response.json(annotation);
};

module.exports = { read, update };
