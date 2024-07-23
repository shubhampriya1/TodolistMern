import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  task: {
    type: "String",
    require: "true",
  },
});
export const todosmodel = mongoose.model("todosmodel", todoSchema);
