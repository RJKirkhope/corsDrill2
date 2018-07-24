const express = require('express')
const app = express()
const cors = require('cors')
const port = parseInt(process.env.PORT) || 9000
const data = require('./api/instructorDogs')

app.use(cors())

function dataId(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/', function(request, response){
  response.json({
    data
  })
})

app.get('/:id', function(request, response){
  var instructorDogs = dataId(data, request.params.id)
  if (!instructorDogs) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  }else {
    response.json({
      data: instructorDogs
    })
  }
})

app.listen(port, () => console.log('listening on port', port))