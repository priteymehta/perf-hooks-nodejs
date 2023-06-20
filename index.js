const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration} milliseconds`);
  });
});
obs.observe({ entryTypes: ['measure'] });

// Task 1
performance.mark('startTask1');
for (let i = 0; i < 1000000000; i++) {
  // Perform some computational task for Task 1
}
performance.mark('endTask1');
performance.measure('Task 1 Execution Time', 'startTask1', 'endTask1');

// Task 2
performance.mark('startTask2');
for (let i = 0; i < 500000000; i++) {
  // Perform some computational task for Task 2
}
performance.mark('endTask2');
performance.measure('Task 2 Execution Time', 'startTask2', 'endTask2');
