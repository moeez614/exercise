import express from 'express'
const app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
const port = 5000

let data = null
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/set', (req, res) => {
    console.log(req.body.number);
    data = Number(req.body.number) + 4
    console.log("plus4 = ", data + 4);
    // console.log(data * 2)
})
app.get('/get', (req, res) => {
    res.json({value : data});
    
})

fs.writeFile('Moeez.txt' , "Hello Moeez" , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})
fs.readFile('Moeez.txt' , (err , data) => {
    if (err) throw err;
    console.log(data.toString());
})
// fs.unlink('Moeez.txt' , (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// })
fs.appendFile('Moeez.txt' , " hello developer" , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})
// fs.rename('Moeez.txt' , 'Moeez2.txt' , (err) => {
//     if (err) throw err;
//     console.log('The file has been renamed!');
// })
app.path('/', (req, res) => {
    console.log(path.join(__dirname , 'Moeez.txt'));
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
