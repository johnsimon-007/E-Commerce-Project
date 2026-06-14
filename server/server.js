const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});