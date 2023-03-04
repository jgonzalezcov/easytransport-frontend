const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Easy transport API', version: '1.0.0' },
    servers: [
      {
        url: `http://localhost:3333/api/v1/docs`,
      },
    ],
  },

  apis: [
    'src/routes/*.js',
    // 'src/routes/ShippingRoutes.js',
    // 'src/routes/TripRoutes.js',
    // 'src/routes/TruckRoutes.js',
    // 'src/routes/DriverRoutes.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Version 1 docs go to http://localhost:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };
