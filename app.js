const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

// MIDDLEWARES 
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

//RUTAS
const rutas = require('./routes/routes.js');
app.use(rutas);


// INICIAR EL SERVIDOR. DURANTE LA REALIZACION DEL TRABAJO SE USO EL PUERTO 5000, YA QUE EL PUERTO 6000 ES UNO RESERVADO POR WINDOWS
app.listen(6000, () => {
    console.log("server listening on port 6000");
});