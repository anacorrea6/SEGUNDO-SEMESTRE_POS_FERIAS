const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API livraria-ebooks-api',
         version: "1.0.0",
        description: "API de Livraria de E-books para exercício de Swagger",
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do Swagger gerada com sucesso!");
});
