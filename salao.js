const express = require('express');
const app = express();
app.use(express.json());

let servicos = [
  { id: 1, nome: 'Corte de Cabelo', duracao_minutos: 45, preco: 50.0 }
];

let clientes = [
  { id: 1, nome: 'Maria Silva', telefone: '11999999999', email: 'maria@email.com' }
];

let agendamentos = [
  { id: 1, cliente_id: 1, servico_id: 1, data_hora: '2025-10-10T14:00:00Z', status: 'agendado' }
];

// --- Serviços ---
// Create
app.post('/servicos', (req, res) => {
  const { nome, duracao_minutos, preco } = req.body;
  const id = servicos.length + 1;
  servicos.push({ id, nome, duracao_minutos, preco });
  res.status(201).json({ message: 'Serviço criado com sucesso!' });
});

// Read all
app.get('/servicos', (req, res) => {
  res.json(servicos);
});

// Read one
app.get('/servicos/:id', (req, res) => {
  const servico = servicos.find(s => s.id === parseInt(req.params.id));
  if (!servico) return res.status(404).json({ message: 'Serviço não encontrado.' });
  res.json(servico);
});

// Update
app.put('/servicos/:id', (req, res) => {
  const servico = servicos.find(s => s.id === parseInt(req.params.id));
  if (!servico) return res.status(404).json({ message: 'Serviço não encontrado.' });
  const { nome, duracao_minutos, preco } = req.body;
  servico.nome = nome ?? servico.nome;
  servico.duracao_minutos = duracao_minutos ?? servico.duracao_minutos;
  servico.preco = preco ?? servico.preco;
  res.json({ message: 'Serviço atualizado com sucesso!' });
});

// Delete
app.delete('/servicos/:id', (req, res) => {
  servicos = servicos.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: 'Serviço deletado com sucesso!' });
});

// --- Clientes ---
// Create
app.post('/clientes', (req, res) => {
  const { nome, telefone, email } = req.body;
  const id = clientes.length + 1;
  clientes.push({ id, nome, telefone, email });
  res.status(201).json({ message: 'Cliente criado com sucesso!' });
});

// Read all
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Read one
app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado.' });
  res.json(cliente);
});

// Update
app.put('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado.' });
  const { nome, telefone, email } = req.body;
  cliente.nome = nome ?? cliente.nome;
  cliente.telefone = telefone ?? cliente.telefone;
  cliente.email = email ?? cliente.email;
  res.json({ message: 'Cliente atualizado com sucesso!' });
});

// Delete
app.delete('/clientes/:id', (req, res) => {
  clientes = clientes.filter(c => c.id !== parseInt(req.params.id));
  res.json({ message: 'Cliente deletado com sucesso!' });
});

// --- Agendamentos ---
// Create
app.post('/agendamentos', (req, res) => {
  const { cliente_id, servico_id, data_hora, status } = req.body;
  const id = agendamentos.length + 1;
  agendamentos.push({ id, cliente_id, servico_id, data_hora, status: status || 'agendado' });
  res.status(201).json({ message: 'Agendamento criado com sucesso!' });
});

// Read all
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

// Read one
app.get('/agendamentos/:id', (req, res) => {
  const agendamento = agendamentos.find(a => a.id === parseInt(req.params.id));
  if (!agendamento) return res.status(404).json({ message: 'Agendamento não encontrado.' });
  res.json(agendamento);
});

// Update
app.put('/agendamentos/:id', (req, res) => {
  const agendamento = agendamentos.find(a => a.id === parseInt(req.params.id));
  if (!agendamento) return res.status(404).json({ message: 'Agendamento não encontrado.' });
  const { cliente_id, servico_id, data_hora, status } = req.body;
  agendamento.cliente_id = cliente_id ?? agendamento.cliente_id;
  agendamento.servico_id = servico_id ?? agendamento.servico_id;
  agendamento.data_hora = data_hora ?? agendamento.data_hora;
  agendamento.status = status ?? agendamento.status;
  res.json({ message: 'Agendamento atualizado com sucesso!' });
});

// Delete
app.delete('/agendamentos/:id', (req, res) => {
  agendamentos = agendamentos.filter(a => a.id !== parseInt(req.params.id));
  res.json({ message: 'Agendamento deletado com sucesso!' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
