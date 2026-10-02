// Lightweight Simulation of GraphQL Subscriptions & PubSub Broker in Node.js
import { EventEmitter } from 'events';

class SubscriptionBroker {
  constructor() {
    this.bus = new EventEmitter();
    this.activeConnections = 0;
  }

  // Publisher emits event after transactional commit
  publish(topic, payload) {
    this.bus.emit(topic, payload);
  }

  // Client subscribes with a filter and listener callback
  subscribe(topic, onNext) {
    this.activeConnections++;
    const listener = (payload) => {
      // Simulate GraphQL execution of selection set over event payload
      const responseFrame = {
        data: {
          orderUpdated: {
            id: payload.id,
            status: payload.status,
            amount: payload.amount
          }
        }
      };
      onNext(responseFrame);
    };

    this.bus.on(topic, listener);

    // Return unsubscription teardown function
    return () => {
      this.bus.off(topic, listener);
      this.activeConnections--;
    };
  }
}

const broker = new SubscriptionBroker();
const topicName = 'ORDER_STATUS_42';
const receivedFrames = [];

// 1. Client opens subscription
const unsubscribe = broker.subscribe(topicName, (frame) => {
  receivedFrames.push(frame);
});

console.log('Active subscription connections:', broker.activeConnections);

// 2. Server publishes event 1: Payment Confirmed
broker.publish(topicName, { id: '42', status: 'CONFIRMED', amount: 150 });

// 3. Server publishes event 2: Shipped
broker.publish(topicName, { id: '42', status: 'SHIPPED', amount: 150 });

// 4. Client tears down subscription wire
unsubscribe();

// 5. Server publishes event 3: Delivered (client should NOT receive it)
broker.publish(topicName, { id: '42', status: 'DELIVERED', amount: 150 });

console.log('Total frames received by subscriber:', receivedFrames.length);
console.log('First event status:', receivedFrames[0].data.orderUpdated.status);
console.log('Second event status:', receivedFrames[1].data.orderUpdated.status);
console.log('Active connections after teardown:', broker.activeConnections);
