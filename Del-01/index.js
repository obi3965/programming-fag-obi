document.addEventListener("DOMContentLoaded", ()=>{

	let switchSystem1 = new SwitchSystem ("#switchsystem-1");
	let switchSystem2 = new SwitchSystem ("#switchsystem-2");

	console.log(switchSystem1.state);
	switchSystem1.changeState();
	console.log(switchSystem1.state);
	switchSystem1.changeState();
	console.log(switchSystem1.state);
	switchSystem1.changeState();

});