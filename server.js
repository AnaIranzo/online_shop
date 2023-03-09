/**Server */
const express = require('express');
var cors = require('cors')
require('dotenv').config();

/**Connect to Mongodb */
const connectDB = require('./config/db');
connectDB();



const app = express();
app.use(cors())

app.use(express.json({ extended: false }));

app.use('/products', require('./routes/productsRoutes'));

/**Connect with client */
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));