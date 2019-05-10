

document.addEventListener ("DOMContentLoaded", (event) => {

	let institutionManager = new InstitutionManager ();

	// ================================================================
	// Data

	let data = {
		"institutions": [
			{
                "name": "Roskilde",
                "education":[
                    {
                         "name": "webudvikler",
                         "showClasses":[],
                    }
                 
                ]
			},
			{
                "name": "København",
                "education":[

                ]
			},
			{
                "name": "Kolding",
                "education":[
                    
                ]
			}
		]
	}

	

	// data.institutions.forEach (jsonInstitution => {
	// 	let institution = new Institution (jsonInstitution.name);

	// 	institutionManager.institutions.push (institution);

	// 	// console.log(jsonInstitution.education)

    //     jsonInstitution.education.forEach(jsonEducation =>{
    //         let education = new education (jsonEducation.name, institution);
    //         // console.log(education)
    //     })
	// })

	
	// console.log (institutionManager);


	// Test


	//  let institution = new Institution("Obi's Institution");
	//  console.log(institution)
	let education = new Education("Obi's education");
	 console.log(education)
});














