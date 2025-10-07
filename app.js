const express = require('express');
const app = express();
const agendamentoRoutes = require('./routes/agendamentos');

app.use(express.json());
app.use('/agendamentos', agendamentoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
