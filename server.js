import app from './src/app.js'
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
