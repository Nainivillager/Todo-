import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todomodel = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todomodel;
