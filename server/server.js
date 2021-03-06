const express = require ('express')

const eatCtrl = require ('./controllers/foods')

const app = express()
const port = 5050

app.use(express.json())

app.get('/api/foods', eatCtrl.read)
app.post('/api/foods', eatCtrl.create)
app.delete('/api/foods/:id', eatCtrl.delete)
app.put('/api/foods/:id', eatCtrl.update)

app.listen(port, () => {
  console.log('Listening on port', port)  
})