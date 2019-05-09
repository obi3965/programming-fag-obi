class SwitchSystem {
	constructor (cssSelector) {
		this.state = 0;
		this.cssClassOff = "switchsystem-state-off";
		this.cssClassOn = "switchsystem-state-on";
		this.textOff = "Off";
		this.textOn = "On";
		this.BtnElement = null;

		this.attachToHTML (cssSelector);
	}

	changeState () {
		if(this.state === 0){
			this.state = 1;
		}else{
			this.state = 0;
		}
	}
	
	updateUI () {
		if(this.state === 1){
			this.BtnElement.innerHTML = this.textOn;
			this.BtnElement.classList.add (this.cssClassOn);
			this.BtnElement.classList.remove (this.cssClassOff);
		}else{
			this.BtnElement.innerHTML = this.textOff;
			this.BtnElement.classList.add (this.cssClassOff);
			this.BtnElement.classList.remove (this.cssClassOn);

		}
	}
	
	attachToHTML (cssSelector) {
		this.BtnElement = document.querySelector (cssSelector + " button");
		this.textOffElement = document.querySelector (cssSelector + " button");
		
		
		this.BtnElement.addEventListener ("click", (event) => {
			this.changeState();
			this.updateUI();
		});

		this.updateUI();
	}

}