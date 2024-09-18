import express from 'express';


const app = express();
const Port = 3000;

app.use(epxress.json());

const items = [
    {
        id:1,
        name: 'Jamal Khan',
        age: 22,
        city: 'Peshawar'
    },
    {
        id:2,
        name: 'Kamal Khan',
        age: 30,
        city: 'Islamabad'
    },
    {
        id:3,
        name: 'Amir Khan',
        age: 227,
        city: 'Karachi'
    },
    {
        id:4,
        name: 'Kabeer Khan',
        age: 35,
        city: 'Lahore'
    },
    {
        id:5,
        name: 'AJ Afridi',
        age: 24,
        city: 'Peshawar'
    }
]


//Root of Home Page
app.get('/',(req , res)=>{
    res.send('Wellcome to Home Page')
})


// Root of About Page
app.get('/about', (req , res)=>{
    res.send('Wellcome to About Page')
})


//Post request to about 
app.post('/about',(req,res)=>{
    const data = req.body;
    res.send(`Data Recived on About Page ${JSON.stringify(data)}`)
})


//PUT request to about 
app.put('/about',(req,res)=>{
    const updateDate = req.body;
    res.send(`Data is updated on About Page ${JSON.stringify(updateDate)}`)
})