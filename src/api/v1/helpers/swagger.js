import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import config from '../../../config/config.js';

const swagger = () => {
  const options = {
    definition: {
      openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
      info: {
        title: 'code camp api',
        version: '1.0.0',
        description: 'trello clone',
        license: {
          name: 'MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
          name: 'Grey Soft',
          url: 'https://greysoft.ng',
          email: 'hi@greysoft.ng',
        },
      },
      servers: [
        {
          url: `http://localhost:${config.port}`,
          description: 'local server',
        },
        {
          url: 'http://greycodecamp.herokuapp.com',
          description: 'development server',
        },
      ],
      securityDefinitions: {
        BearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
    apis: ['./src/api/v1/routes/*.js'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  return [swaggerUi.serve, swaggerUi.setup(swaggerSpec)];
};

export default swagger;
