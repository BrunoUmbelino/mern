const Notes = require("../models/NotesData");

const update = async (request, response) => {
  const { id } = request.params;
  const { content } = request.body;

  const note = await Notes.findOne({ _id: id });
  if (note) {
    note.content = content;
    await note.save();
  }
  return response.json(note);
};

module.exports = { update };
