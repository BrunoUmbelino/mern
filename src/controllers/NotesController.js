const Notes = require("../models/NotesData");

const read = async (request, response) => {
  const notesList = await Notes.find();
  return response.json(notesList);
};

const create = async (request, response) => {
  const { title, content, priority } = request.body;

  if (!content || !title) {
    return response.status(400).json({ error: "Insert a note content!" });
  }
  const noteCreated = await Notes.create({
    title,
    content,
    priority,
  });

  return response.json(noteCreated);
};

const exclude = async (request, response) => {
  const { id } = request.params;

  const noteExcluded = await Notes.findOneAndDelete({ _id: id });

  if (noteExcluded) {
    return response.status(200).json(noteExcluded);
  }
  return response.status(401).json({ error: "register not found" });
};

module.exports = { read, create, exclude };
