/** @format */


const fastify = require("fastify")({ logger: true });
const PORT = process.env.PORT || 1234;


fastify.register(require("./users/index"));

const startServer = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();
