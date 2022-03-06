import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

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
          url: 'http://localhost:3000/books',
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
    apis: ['src/api/**/*.js'], // <-- not in the definition, but in the options
  };

  const swaggerSpec = swaggerJSDoc(options);

  return [swaggerUi.serve, swaggerUi.setup(swaggerSpec)];
};

export default swagger;
