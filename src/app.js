const express = require('express');
const app = express();

app.use(express.json());

// Rutas
app.use('/api/libros', require('./routes/libro.routes'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        message: 'API de Biblioteca funcionando correctamente',
        endpoints: {
            libros: '/api/libros',
            libroPorId: '/api/libros/:id'
        }
    });
});

// Usar el puerto que asigna Render o 3000 para desarrollo
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});