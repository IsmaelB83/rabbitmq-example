'use strict';
// Node imports
// Own imports
const connectionPromise = require('./connect');

// Queue name in rabbitmq
const queueName = 'thumbnails';

// Connect to amqp
main().catch(error => console.log('Error while connecting to rabbitmq', error));

/**
 * Async function to connect to amqp
 */
async function main() {
    // Connect to cloud rabbitmq
    const connection = await connectionPromise;
    // Connect to channel
    const channel = await connection.createChannel();
    // Check queue exists
    await channel.assertQueue(queueName, {
        durable: true
    });
    // Send message
    setInterval(()=>{
        const date = new Date()
        const message = {text: `Esta es la tarea creada el ${date}`};
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
            persistent: true
        });
        console.log(`Message sent at ${date}`);
    }, 250);
}