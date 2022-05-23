function countPrimeNumbers() {
	let count = 0;
	let isPrime = true;
	for (let i = 2; i <= 100; i++) {
		isPrime = true
		for (let j = 2; j < i; j++) {
			if(i % j === 0) {
				isPrime = false;	
				break	
			};
		};
		if(isPrime) {
			count += 1;
		};
	};
	return count;

}

const time0 = performance.now();
countPrimeNumbers();
const time1 = performance.now();
const timeDelta = time1 - time0;
console.log(`Execution time of printing countPrimeNumbers was ${timeDelta} milliseconds.`)