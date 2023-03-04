const express = require('express');
const app = express();
const port = 3333;
// Aca requiero swaggerDocs pero lo renombro a V1SwaggerDocs,
// se sugiere que con Swagger se usen version
// en el caso que a futuro queramos crear una nueva version de la api
const { swaggerDocs: V1SwaggerDocs } = require('./swagger');

app.use(express.json());
app.listen(port, () => {
  console.log('SERVIDOR ENCENDIDO EN EL PUERTO ' + port);
});

app.use('/user', require('./src/routes/UserRoutes.js'));
app.use('/shipping', require('./src/routes/ShippingRoutes'));
app.use('/truck', require('./src/routes/TruckRoutes'));
app.use('/trip', require('./src/routes/TripRoutes'));
app.use('/driver', require('./src/routes/DriverRoutes'));
V1SwaggerDocs(app, port);

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});
