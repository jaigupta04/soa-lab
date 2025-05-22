const amqp = require('amqplib');

async function publishMessage(msg) {
  const conn = await amqp.connect('amqp://localhost');
  const ch = await conn.createChannel();
  const queue = 'order_queue';

  await ch.assertQueue(queue, { durable: true });
  ch.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));

  console.log("Published:", msg);

  setTimeout(() => {
    conn.close();
    process.exit(0);
  }, 500);
}

const message = {
  orderId: Date.now(),
  item: 'Laptop',
  quantity: 2
};

publishMessage(message);
