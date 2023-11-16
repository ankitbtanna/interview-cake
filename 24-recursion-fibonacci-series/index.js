function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10));

function fibonacciIterative(n) {
    if (n === 0) return n;

    if (n === 1) return n;

    let a = 0;
    let b = 1;
    let c;
    if (n >=2) {
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    } else {
        console.error('Not a valid number');
    }
}

console.log(fibonacciIterative(10));