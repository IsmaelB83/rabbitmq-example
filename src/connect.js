'use strict';
// Node imports
const amqplib = require('amqplib');

require('dotenv').config();

/**
 * Connect to rabbitmq (it returns a promise)
 */
const connection = amqplib.connect(process.env.RABBITMQ_URL);

module.exports = connection;