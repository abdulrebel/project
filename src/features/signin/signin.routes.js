const signInController = require('./signin.controller');
const validateSignIn = require('./signin.validator');

async function signInRoutes(fastify, options) {
    // Define a POST route for sign-in
    fastify.post('/signin', async (request, reply) => {
        try {
            // Attempt to sign in the user using data from request.body
            const user = await SignInController.signIn(request.body);

            // If sign-in is successful, send the user data back to the client with status code 200 (OK)
            reply.code(200).send(user);
        } catch (err) {
            // If an error occurs during sign-in, handle it
            console.error(err);

            // Send a generic error response with status code 500 (Internal Server Error)
            reply.code(500).send({ error: 'Server error' });
        }
    });
}

module.exports = signInRoutes;