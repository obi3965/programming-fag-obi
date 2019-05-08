// class CounterSystem {
//     constructor(cssSelector) {
//         this.counter = 0;
//         this.counterValueElement = null;
//         this.btnIncreaseElement = null;
//         this.btnDecreaseElement = null;
//         console.log(cssSelector)
//         this.attachToHTML(cssSelector);
//     }
//     increase() {
//         this.counter++;
//     }

//     decrease() {
//         this.decrease--;
//         if (this.counter < 0) {
//             this.counter = 0;
//         }
//     }
//     updateUI() {
//         this.counterValueElement.innerHTML = this.counter;
//     }

//     attachToHTML(cssSelector) {
//         this.counterValueElement = document.querySelector(cssSelector + " .counter-value");
//         this.btnIncreaseElement = document.querySelector(cssSelector + " .btn-counter-increase");
//         this.btnDecreaseElement = document.querySelector(cssSelector + " .btn-counter-decrease");

//         this.updateUI()
        
//         this.btnIncreaseElement.addEventListener("click", (event) => {
//             this.increase();
//             this.updateUI();
//             //    console.log(this.counter);
//         })

//         this.btnDecreaseElement.addEventListener("click", (event) => {
//             this.decrease();
//             // console.log(this.counter);
//             this.updateUI();
//         })
//     }
// }




class CounterSystem {
	constructor (cssSelector) {
		this.name = 0;
		this.counterValueElement = null;
		this.btnCounterIncreaseElement = null;
		this.btnCounterDecreaseElement = null;

		this.attachToHTML (cssSelector);
	}

	// ================================================================

	increase () {
		this.counter++;
	}

	// ================================================================

	decrease () {
		this.counter--;
		if (this.counter < 0) {
			this.counter = 0;
		}
	}

	// ================================================================

	updateUI () {
		this.counterValueElement.innerHTML = this.counter;
	}

	// ================================================================

	attachToHTML (cssSelector) {
		// References
		this.counterValueElement       = document.querySelector (cssSelector + " .counter-value");
		this.btnCounterIncreaseElement = document.querySelector (cssSelector + " .btn-counter-increase");
		this.btnCounterDecreaseElement = document.querySelector (cssSelector + " .btn-counter-decrease");

		this.updateUI();

		// EventListeners

		this.btnCounterIncreaseElement.addEventListener ("click", (event) => {
			this.increase();
			this.updateUI();
		});

		this.btnCounterDecreaseElement.addEventListener ("click", (event) => {
			this.decrease();
			this.updateUI();
		});
	}
}