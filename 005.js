
const http = require('http');
const axios = require('axios')

const server = http.createServer(async (req, res) => {
  if (req.url == '/') {
    try {
      const response = await axios.get('https://api.agify.io?name=meelad')
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response.data));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Solicitação para API não concluida' }));
    }
  }
});

server.listen(8081, () => {
  console.log("Servidor está rodando na porta 8081")
});