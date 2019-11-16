# Summary
Simple example of a rabbitmq application (echo-app). Using could amqp

## Configuration
Create a .env file in the root of the repository, and enter the RABBITMQ_URL to connecto to. You can see an example of the file content in file .env.example:
```
RABBITMQ_URL=amqp://user:pass@hostname/instance
```

To create an account in amqp cloud. You can go here https://www.cloudamqp.com/

## Installation and Usage
First install the dependencies:
```
npm install
```

Then start the sender:
```
trama@trama:~/Desktop/rabbitmq-example$ npm run sender

> rabbitmq-example@1.0.0 sender /home/trama/Desktop/rabbitmq-example
> nodemon ./src/sender.js

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node ./src/sender.js`
Message sent at Sat Nov 16 2019 09:35:21 GMT+0100 (CET)
Message sent at Sat Nov 16 2019 09:35:21 GMT+0100 (CET)
Message sent at Sat Nov 16 2019 09:35:21 GMT+0100 (CET)
Message sent at Sat Nov 16 2019 09:35:21 GMT+0100 (CET)
Message sent at Sat Nov 16 2019 09:35:22 GMT+0100 (CET)

```

Finally start the receiver:
```
trama@trama:~/Desktop/rabbitmq-example$ npm run receiver

> rabbitmq-example@1.0.0 receiver /home/trama/Desktop/rabbitmq-example
> nodemon ./src/receiver.js

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node ./src/receiver.js`
Esta es la tarea creada el Sat Nov 16 2019 09:30:54 GMT+0100 (CET)
Esta es la tarea creada el Sat Nov 16 2019 09:30:54 GMT+0100 (CET)
Esta es la tarea creada el Sat Nov 16 2019 09:30:54 GMT+0100 (CET)
Esta es la tarea creada el Sat Nov 16 2019 09:30:54 GMT+0100 (CET)
Esta es la tarea creada el Sat Nov 16 2019 09:30:55 GMT+0100 (CET)
Esta es la tarea creada el Sat Nov 16 2019 09:30:55 GMT+0100 (CET)
```