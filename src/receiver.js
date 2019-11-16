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
    await channel.assertQueue(queueName, {durable: true});
    channel.prefetch(2); // Number of messages to be processes in parallel
    // Consume channel
    channel.consume(queueName, msg => {
        const message = JSON.parse(msg.content.toString());
        console.log(message.text);
        channel.ack(msg);
    });
}