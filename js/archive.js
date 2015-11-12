
/* var finalName = "leSTer EverbEd"

    var nameArray = finalName.split(" ");
        // console.log(nameArray);
    var lastName = nameArray.pop();
        // console.log(lastName);
    var lastNameCaps = lastName.toUpperCase();
        //console.log(lastNameCaps);
    var firstName = nameArray.shift();
        // console.log(firstName);
    var firstLetterFirstName = firstName.charAt(0);
    	// console.log(firstLetterFirstName);
    var uppercaseFirstLetter = firstLetterFirstName.toUpperCase();
    var restOfFirstName = firstName.charAt(1) + firstName.charAt(2)
    + firstName.charAt(3) + firstName.charAt(4) + firstName.charAt(5)
    + firstName.charAt(6) + firstName.charAt(7);
    var lowercaseFirstNameRest = restOfFirstName.toLowerCase();
    	// console.log(restOfFirstName);
    var uppercaseName = uppercaseFirstLetter + lowercaseFirstNameRest;
    var finalName = uppercaseName + " " + lastNameCaps;
    	// console.log(finalName); */


    /* console.log(lastNameCaps); */



/* for (employer in work) {
	if (work.hasOwnProperty(employer)) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[employer]);
		$("#workExperience").append([formattedEmployer]);

	}
	// HTMLworkEmployer = HTMLworkStart work[jobs]
}

for (title in work) {
	if (work.hasOwnProperty(title)) {
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[title]);
		$("#workExperience").append([formattedWorkTitle]);
	}
}

		$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);


// if (work.hasOwnProperty(key)) {
//        console.log(myObj[key]);
//    }
*/



/* if (condition) {
	doSomething();
}
else {
	doSomethingElse();
}

*/


/* function inName() {
	for (name in bio.name) {
		var nameArray2 = bio.name.split(" ");
		var lastName2 = nameArray2.pop();
		var lastNameCaps2 = lastName2.toUpperCase();
		var firstName2 = nameArray2.shift();
		var firstLetterFirstName2 = firstName2.charAt(0);
		var uppercaseFirstLetter2 = firstLetterFirstName2.toUpperCase();
		var restOfFirstName2 = firstName2.charAt(1) + firstName2.charAt(2)
    + firstName2.charAt(3) + firstName2.charAt(4) + firstName2.charAt(5)
    + firstName2.charAt(6) + firstName2.charAt(7) + firstName2.charAt(8)
    + firstName2.charAt(9) + firstName2.charAt(10) + firstName2.charAt(11)
    + firstName2.charAt(12) + firstName2.charAt(13) + firstName2.charAt(14);
		var uppercaseName2 = uppercaseFirstLetter2 + restOfFirstName2;
		var finalName2 = uppercaseName2 + " " + lastNameCaps2;
	}
}
*/



/* function inName(name) {
		name = name.trim().split(" ");
		console.log(name);
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() +
			name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
}

$("#main").append([internationalizeButton]);
*/


// $("#main").append(["Alexander Cheung"]);

// var awesomeThoughts = "I am Alex Cheung and I AM AWESOME!";

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append([funThoughts]);

/* var role = "Product Designer and Front-End Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(formattedRole);

var name = "Alexander Cheung"

var formattedName = HTMLheaderName.replace("%data%", name);

$('#header').prepend(formattedName);


var oldWord = 'audacity ';
var newWord = oldWord.slice(1, -1);

console.log(newWord);

var uppercaseNewWord = newWord.charAt(0).toUpperCase() + newWord.charAt(1) +
newWord.charAt(2) + newWord.charAt(3) + newWord.charAt(4) + newWord.charAt(5)
+ newWord.charAt(6);

console.log(uppercaseNewWord);

var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2);

var waysOfSayingHello = ["hey", "hello", "what's up", "No way!", 43110];
var lengthOfArray = waysOfSayingHello.length;

console.log(lengthOfArray); */

 /*   var _array = [1, 4, 8];
    var takeaway = _array.pop();
    var newLast = takeaway + 1;
    var addLast = _array.push(newLast);
    var newArray = _array.slice();
    console.log(takeaway);
    console.log(newLast);
    console.log(_array);
    console.log(newArray); */

/*    var addANumber = last + 1;
    var remove = _array.pop();
    var newArray = addANumber.push(addANumber);
    console.log(newArray); */

/* var finalName = "leSTer EverbEd"

    var nameArray = finalName.split(" ");
        // console.log(nameArray);
    var lastName = nameArray.pop();
        // console.log(lastName);
    var lastNameCaps = lastName.toUpperCase();
        //console.log(lastNameCaps);
    var firstName = nameArray.shift();
        // console.log(firstName);
    var firstLetterFirstName = firstName.charAt(0);
    	// console.log(firstLetterFirstName);
    var uppercaseFirstLetter = firstLetterFirstName.toUpperCase();
    var restOfFirstName = firstName.charAt(1) + firstName.charAt(2)
    + firstName.charAt(3) + firstName.charAt(4) + firstName.charAt(5)
    + firstName.charAt(6) + firstName.charAt(7);
    var lowercaseFirstNameRest = restOfFirstName.toLowerCase();
    	// console.log(restOfFirstName);
    var uppercaseName = uppercaseFirstLetter + lowercaseFirstNameRest;
    var finalName = uppercaseName + " " + lastNameCaps;
    	// console.log(finalName); */


    /* console.log(lastNameCaps); */


    /* function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}*/


    /* function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

*/
/*

var bio = {
	"name": "Alexander Cheung",
	"role": "Product Designer and Developer",
	"contactInfo": {
		"email": "alexandermcheung@gmail.com",
		"phone": "510.557.2247",
		"github": "alexanderous",
		"twitter": "@alexalexandalex",
		"location": "Seattle"
	},

	"bioPic": "images/Alex.jpg",
	"welcomeMessage": "Hi, my name is Alex!",
	"skills": ["Responsive Design", "Javascript", "HTML", "CSS", "Ruby on Rails"]
};

    $("#main").append(bio.name + " " + bio.role + " " + bio.contactInfo + " " + bio.bioPic + " " + bio.welcomeMessage + " " + bio.skills);




var work = {
};

work.position = "Entrepreneur";
work.employer = "Self";
work.yearsWorked = 3;
work.city = ["San Francisco", "Seattle"];

var education = {
};

education["name"] = "Columbia University";
education["graduationYear"] = ["2010"];
education["city"] = "New York";

$("#main").append(work["position"]);

$("#main").append(education.name);


*/


//HTMLheaderName.replace("%data%", (bio.name);
/*
			{
			"name": "Mission San Jose High School",
			"city": "Fremont, CA",
			"majors": [""],
			"dates": "",
			"role": "Student Body President",
			"url": "http://www.msjhs.org"
		}
		*/


		/*
function displayWork() {
	for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
	}
}

displayWork(); */

/*			"url": "http://www.columbia.edu" */


var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append([formattedSkill]);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append([formattedSkill]);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append([formattedSkill]);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append([formattedSkill]);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append([formattedSkill]);