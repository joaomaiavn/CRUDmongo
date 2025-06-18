import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Funcionario from "./VendaMensal.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

// CREATE
app.post("/vendas", async (req, res) => {
  try {
    const { nome, funcao, salario } = req.body;
    const novoFuncionario = await Funcionario.create({ nome, funcao, salario });
    res.json(novoFuncionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ
app.get("/vendas", async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE
app.put("/vendas/:id", async (req, res) => {
  try {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(funcionarioAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
app.delete("/vendas/:id", async (req, res) => {
  try {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id);
    res.json(funcionarioExcluido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
