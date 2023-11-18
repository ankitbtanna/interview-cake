Implement an analytics SDK that exposes logEvent method and send method. It takes in events and queues them, and then starts sending the events. This is a Flipkart/Atlassian frontend interview question.

- Send each event after a delay of 1 second and this logging fails every n % 5 times.
- Send the next event only after the previous one resolves.
- When the failure occurs attempt a retry.

We will divide the analytics requirements into 3 parts:
1. Tracking and holding events in a queue
2. Delay and failure function
3. Sending events