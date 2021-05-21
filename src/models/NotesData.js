const mongoose = require("mongoose");

const NotesDataSchema = new mongoose.Schema({
  content: String,
  priority: Boolean,
});

module.exports = mongoose.model("notes", NotesDataSchema);
