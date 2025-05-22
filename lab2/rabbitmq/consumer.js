const amqp = require('amqplib');

async function consumeMessages() {
  const conn = await amqp.connect('amqp://localhost');
  const ch = await conn.createChannel();
  const queue = 'order_queue';

  await ch.assertQueue(queue, { durable: true });

  console.log("Waiting for messages...");

  ch.consume(queue, (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log("Received:", content);

      // Simulate processing
      // e.g., save to DB, log, trigger notification...
      ch.ack(msg);
    }
  });
}

consumeMessages();
