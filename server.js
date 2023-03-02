const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let mma_nicknames = {
    'bones' : {
        'name' : "Jon Jones",
        'age' : "35",
        'weight': "250 Ibs",
        'height':'6 ft. 4 in.',
        'reach' : "85 in.",
        'disipline' : "free style wrestler"
    },

    'nigerian nightmare' : {
        'name': 'Kamaru Usman',
        'age' : "34",
        'weight': "210 Ibs",
        'height':'6 ft.',
        'reach' : "76 in.",
        'disipline' : "free style wrestler"
    },

    'the spider':{
        'name': 'Anderson Silva',
        'age' : "47",
        'weight': "210 Ibs",
        'height':'6 ft. 2 in.',
        'reach' : "77.5 in.",
        'disipline' : "Muay Thai/Boxer"
    },

    'blessed':{
        'name': 'Max Holloway',
        'age' : "31",
        'weight': "155 Ibs",
        'height':'5 ft. 11 in.',
        'reach' : "69 in.",
        'disipline' : "kickboxer"
    },

    'unknown':{
        'name': 'unknown',
        'age' : "unknown",
        'weight': "unknown",
        'height':'unknown',
        'reach' : "unknown",
        'disipline' : "unknown"
    }
}



app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:nickname',(request,response)=>{
    let nickname = request.params.nickname.toLowerCase();
    if(mma_nicknames[nickname]){
        response.json(mma_nicknames[nickname]);
    }else{
        response.json(mma_nickname['unknown']);
    }
})

app.listen(process.env.PORT||PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});