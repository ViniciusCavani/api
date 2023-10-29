const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Permite o uso de JSON nas requisições
app.use(cors());

// Rotas
const pedidosRoutes = require('./routes/pedidosRoutes');
app.use('/', pedidosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
