const express = require('express')  //installing express
const app = express() // assigning express to app to make using express modules easier
const PORT = 8000

const rappers = {  // creating this object so we can send something when they make a api request
    '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph' ,
    'birthLocation': 'London,England' 
},
    'chance the rapper':{
        'age': 29,
        'birthName': "Cancelor Bennett",
        'birthLocation': 'Chicago, Illinois'
},
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response)=>{   //network request similar to an eventListener
    response.sendFile(__dirname + '/index.html')  //what were sending the client __dirname is just telling the computer where to start looking (the root)
})

app.get('/api/:name', (request, response)=>{ // the /:name is a query parameter
   const rapperName = request.params.name.toLowerCase()    // this line allows the user to request any rapper name by using query parameter
   if(rappers[rapperName]){  //if rappername is in the rappers object we using brackets because the names have space in them instead of dot notation
    response.json(rappers[rapperName])
   }else{
    response.json(rappers['unknown'])
   }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better Go Catch It!`)
})

