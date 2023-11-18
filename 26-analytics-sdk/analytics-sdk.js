class SDK {
    constructor() {
        this.queue = [];
        this.count = 1;
    }

    wait() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.count % 5 === 0) {
                    reject();
                } else {
                    resolve();
                }
            }, 1000);
        });
    }

    logEvent(evt) {
        this.queue.push(evt);
    }

    sendAnalytics = async function() {
        if (this.queue.length === 0) {
            console.log('No more events to be sent.')
            return;
        }

        const currentEvent = this.queue.shift();

        try {
            await this.wait();

            console.log('Analytics sent for ', currentEvent)
            this.count++;
        } catch(err) {
            // handle the error for an event not sent successfully
            // put the event back in the array
            console.log('---------------------------------');
            console.log('Failed to send an event!', currentEvent);
            console.log('Retrying sending event');
            console.log('---------------------------------');

            this.count = 1;
            this.queue.unshift(currentEvent);
        } finally {
            // recursively call the function to send the analytics
            this.sendAnalytics();
        }
    }

    send() {
        this.sendAnalytics();
    }
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();