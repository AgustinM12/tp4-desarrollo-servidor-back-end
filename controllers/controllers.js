//DEFINIR LAS RUTAS Y SUS RESPUESTAS

const getRuta = (req, res) => {
    res.send('Peticion GET recibida');
};

const postRuta = (req, res) => {
    res.send('Peticion POST recibida');
};

const putRuta = (req, res) => {
    const id = 123;
    res.send('Peticion PUT recibida con id: ' + id);
};

const deleteRuta = (req, res) => {
    const id = 123;
    res.send('Peticion DELETE recibida del id: ' + id);
};


// EXPORTAR LOS MODULOS DE LAS RUTAS
module.exports = {
    getRuta,
    postRuta,
    putRuta,
    deleteRuta
}