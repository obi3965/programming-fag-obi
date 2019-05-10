
    // counterSystem.attachToHTML("#counter-system-1")
    // console.log(counterSystem.counterValueElement);
    // console.log(counterSystem.btnIncreaseElement);
    // console.log(counterSystem.btnDecreaseElement);

    // let counterValueElement = document.querySelector("#counter-value");
    // let btnIncreaseElement = document.querySelector("#counter-system-1 .btn-counter-increase");
    // let btnDcreaseElement = document.querySelector("#counter-system-1 .btn-counter-dcrease");


    // btnIncreaseElement.addEventListener("click", (event)=>{
    //     counterSystem.increase();
    //     // counterValueElement.innerHTML = counterSystem.counter;
    //     console.log(counterSystem.counter)
    // })
    
    
    // btnDcreaseElement.addEventListener("click", (event)=>{
    //     counterSystem.decrease();
    //     counterValueElement.innerHTML = counterSystem.counter;
    //     console.log(counterSystem.counter)
    // })

    // console.log(counterSystem.counter)


    document.addEventListener ("DOMContentLoaded", (event) => {

        let counterSystem1 = new CounterSystem ("#counter-system-1");
        let counterSystem2 = new CounterSystem ("#counter-system-2");
        
    });