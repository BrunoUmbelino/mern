const mongoose = require("mongoose");

const NotesDataSchema = new mongoose.Schema({
  title: String,
  content: String,
  priority: Boolean,
});

module.exports = mongoose.model("notes", NotesDataSchema);
