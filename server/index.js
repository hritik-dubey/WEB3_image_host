const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authenticationRoute = require('./routes/authentication.routes')
const uploadImageRoute = require('./routes/imageUpload.routes')
const getImageRoute = require('./routes/getImage.routes')
const {MONGODB_URL, PORT} = require('./config/config')
app.use(cors());
app.use(express.json());

app.use('/api',authenticationRoute)
app.use('/api',uploadImageRoute)
app.use('/api',getImageRoute)
mongoose.connect(MONGODB_URL).then(function () {
    console.log('Connected to MongoDB');
}).catch(function (err) {
    console.log(err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});

