class switchSystem {
    
    constructor(cssSelector){
       this.state = 0;
      this.cssClassOff = "switchsystem-state-off";
      this.cssClassOn = "switchsystem-state-on";
      this.textOff = "Off"; 
      this.textOn = "On";
      this.parentElement = null;
      this.buttonElement = null;

      this.attachToHTML(cssSelector)
    }
    changeState(){
        if(this.state == 0){
            this.state = 1;
        }else{

        }
    }


    updateUI(){
        if(this.state == 1){
            this.buttonElement.innerHTML = this.textOn;
            this.buttonElement.classList.add()
        }
        this.buttonElement.innerHTML = "OFF"
    }

    attachToHTML(cssSelector){

    }
}