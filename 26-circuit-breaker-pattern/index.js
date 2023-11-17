class CircuitBreaker {
    constructor(threshold, timeout) {
        this.threshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.isCircuitOpen = false;
    }

    async performOperation() {
        if (this.isCircuitOpen) {
            console.log("Circuit is open. Operation cannot be performed!");
            return;
        }

        try {
            // Simulate an operation that may fail (e.g., making an HTTP request)
            // For the sake of example, let's assume the operation fails half of the time

            if (Math.random() < 0.5) {
                throw new Error("Operation failed");
            }

            console.log("Operation successful");
            this.failureCount = 0;
        } catch(error) {
            console.log("Operation failed");
            this.failureCount++;

            if (this.failureCount >= this.threshold) {
                console.log("Opening the circuit breaker");
                this.isCircuitOpen = true;

                setTimeout(() => {
                    console.log("Closing the circuit breaker");
                    this.isCircuitOpen = false;
                    this.failureCount = 0;
                }, this.timeout);
            }
        }
    }
}

// usage
const circuitBreaker = new CircuitBreaker(3, 5000);

// simulating performing operation multiple times
for(let i = 0; i < 10; i++) {
    circuitBreaker.performOperation();
}