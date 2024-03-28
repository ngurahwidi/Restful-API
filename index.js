const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')

app.use(bodyParser.json());

app.get('/daftarTugas', (req, res) => {
  db.query("SELECT * FROM tugas", (error, result) => {
  res.send(result)
  })
  
})
app.post('/daftarTugas', (req, res) => {
  const {tugas, tenggat, keterangan} = req.body
  const sql = `INSERT INTO tugas (tugas, tenggat, keterangan) VALUES
  ('${tugas}', '${tenggat}', '${keterangan}')`

  db.query(sql, (error, result) => {
  res.send(result)
  })  
})
app.post()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
