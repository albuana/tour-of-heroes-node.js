const express=require('express');
const mongoose=require('mongoose');
const { MONGO_URI }=require('./config');

// routes
const heroesRoutes=require('./routes/heroes');
const heroRoutes=require('./routes/hero');
const petsRoutes=require('./routes/pets');
const petRoutes=require('./routes/pet');
const initRoutes=require('./routes/init');


const app = express();

//BodyParser
app.use(express.json());

// Connect to mongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log('MongoDB connected...!'))
    .catch(err=> console.log(err));

//User routes
app.use('/heroes', heroesRoutes);
app.use('/hero', heroRoutes);
app.use('/pets', petsRoutes);
app.use('/pet', petRoutes);
app.use('/init', initRoutes);
app.get('/', (req, res) => {
    res.send("Hello, world!");
})

const PORT = process.env.PORT || 6330;

app.listen(PORT, () => console.log('Server run at port.'));