import mongoose from "mongoose";

const Schema = mongoose.Schema;

// our model takes in note and slug as a string
const NoteSchema = new Schema({
  note: String,
  slug: String,
});

// export the model and if its doesnt exsit make a model
export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
