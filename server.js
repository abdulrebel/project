const fastify = require('fastify')({logger:true});
const signInRoutes= require ('./src/features/signin/signin.routes.js');


fastify.register(signInRoutes);

const PORT= process.env.PORT || 3000;

const options = { port: 3000 };
fastify.listen(options)
    .then((address) => {
        console.log(`Server listening on ${address}`);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });