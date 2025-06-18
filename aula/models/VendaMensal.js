import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  funcao: {
    type: String,
    required: true
  },
  salario: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Funcionario", FuncionarioSchema);