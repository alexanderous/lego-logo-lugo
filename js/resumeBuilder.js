/*jshint multistr: true */

// General

var data = "%data%";
var $header = $("#header");


// Bio

var bio = {
	"name": "Alexander Cheung",
	"role": "Product Designer and Developer",
	"welcomeMessage": "Hey there! Welcome to my resume!",
	"contacts": [{
				"email": "alexandermcheung@gmail.com",
				"mobile": "510.557.2247",
				"twitter": "@alexalexandalex",
				"github": "@alexanderous",
				"website": "www.alexanderous.co",
				"location": "Seattle"
			}
	],
	"bioPic": "images/Alex.jpg",
	"skills": ["Responsive Design", "Javascript", "HTML", "CSS", "Ruby on Rails",
			"jQuery", "Blogging", "Design Research", "Innovation Management",
			"Entrepreneurship", "Product Management", "Ideation",
			"Adobe Creative Suite", "Wireframing", "Usability Testing",
			"Leadership", "Agile Methodologies", "UX Design", "Visual Design",
			"Prototyping", "Customer Service", "Mandarin", "Cantonese",
			"Public Speaking", "Event Planning", "Training", "Film Production",
			"DSLR Photography", "Speech Writing", "Management"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);


	$header.append(formattedName, formattedRole);

    for (var contact in bio.contacts) {
	    if (bio.contacts.hasOwnProperty(contact)) {
	        var formattedMobile = HTMLmobile.replace(data,
	        		bio.contacts[contact].mobile);
	        var formattedEmail = HTMLemail.replace(data,
	        		bio.contacts[contact].email);
	        var formattedTwitter = HTMLtwitter.replace(data,
	        		bio.contacts[contact].twitter);
	        var formattedGithub = HTMLgithub.replace(data,
	        		bio.contacts[contact].github);
	        var formattedBlog = HTMLblog.replace(data,
	        		bio.contacts[contact].website);
	        var formattedLocation = HTMLlocation.replace(data,
	        		bio.contacts[contact].location);
	        var $topContacts = $("#topContacts");
	        var $footerContacts = $("#footerContacts");

	        $topContacts.append(formattedMobile, formattedEmail,
		        	formattedTwitter, formattedGithub, formattedBlog,
		        	formattedLocation);

	        $footerContacts.append(formattedMobile, formattedEmail,
	        		formattedTwitter, formattedGithub, formattedBlog,
	        		formattedLocation);
	    }
    }


	var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data,
			bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace(data, bio.skills);

	$header.prepend(formattedPic, formattedWelcomeMessage);
	if (bio.skills.length > 0) {
		$header.append([HTMLskillsStart]);
		bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace(data, skill);
	        $("#skills").append([formattedSkill]);
		});
	}
};

bio.display();


// Education

var education = {
	"schools": [{
			"name": "Columbia University",
			"location": "New York",
			"majors": ["Humanities: International Relations"],
			"degree": "B.A.",
			"dates": 2010,
			"url": "www.columbia.edu"
		},

	],
	"onlineClasses": [{
			"title": "Front End Web Development Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}, //Is the following open bracket supposed to start on this line?
					//Or is ok that it's on the next?
		{
			"title": "Ruby on Rails Tutorial",
			"school": "Michael Hartl",
			"date": 2012,
			"url": "www.railstutorial.org"
		}
	]
};

education.display = function() {

    for (var school in education.schools) {
	    if (education.schools.hasOwnProperty(school)) {
	        $("#education").append(HTMLschoolStart);
	        var formattedName = HTMLschoolName.replace(data,
		        	education.schools[school].name);
	        var formattedDegree = HTMLschoolDegree.replace(data,
		        	education.schools[school].degree);
	        var formattedDates = HTMLschoolDates.replace(data,
	        		education.schools[school].dates);
	        var formattedLocation = HTMLschoolLocation.replace(data,
	     		   	education.schools[school].location);
	        var formattedMajor = HTMLschoolMajor.replace(data,
	        		education.schools[school].majors);
	       	var formattedCollegeURL = HTMLschoolURL.replace(data,
	        	education.schools[school].url);
	        var $educationEntryLast = $(".education-entry:last");
	        $educationEntryLast.append(formattedName, formattedDegree,
	        		formattedDates, formattedLocation, formattedMajor,
	        		formattedCollegeURL);
	    }
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var onlineClass in education.onlineClasses) {
	    if (education.onlineClasses.hasOwnProperty(onlineClass)) {
	        var formattedTitle = HTMLonlineTitle.replace(data,
	        	education.onlineClasses[onlineClass].title);
	        var formattedDate = HTMLonlineDates.replace(data,
	        	education.onlineClasses[onlineClass].date);
	        var formattedSchool = HTMLonlineSchool.replace(data,
	        	education.onlineClasses[onlineClass].school);
	        var formattedURL = HTMLonlineURL.replace(data,
	        	education.onlineClasses[onlineClass].url);
	        $educationEntryLast.append(formattedTitle, formattedDate,
	        	formattedSchool, formattedURL);
	    }
    }
};

education.display();


// Work

var work = {
	"jobs": [{
			"employer": "Antho",
			"title": "Founder/Engineer",
			"location": "Seattle",
			"dates": "July 2012 to July 2015",
			"description": "• Applied lean startup methodologies to lead product\
					management from idea to execution: designed, built, and\
					launched alpha and beta site to users. • Imagineered\
					interactive, digital, multimedia approach in curating\
					content for younger generations to learn about and\
					contribute to their family histories (Adobe\
					Premiere/Lightroom/Audition). • Implemented Gestalt and\
					Rams design principles to shape multiple iterations of\
					site-wide and page-specific visual, UI/UX, and responsive\
					design (Adobe Photoshop/Illustrator/Edge Reflow). •\
					Diagramed and engineered responsive design for\
					museum-inspired, storytelling-themed templates. • Conducted\
					customer discovery interviews in multiple phases to iterate\
					app to better serve users. • Administered remote user\
					studies to generate insights, manage community culture,\
					pivot business models, and alter our vision. • Learned\
					server-side and client-side web development through a\
					needs-driven, self-taught curriculum (Ruby on Rails,\
					CSS/HTML, Javascript/jQuery, SQL/MySQL/PostgreSQL, Terminal,\
					Git, Sublime Text). • Compiled equipment, interview, and\
					customer journey checklists, designed reusable templates,\
					programmed DIY features, and outsourced tasks, shortening\
					the overall time per client by 75%. • Coached and\
					interviewed dozens of clients in assembling living histories\
					of family patriarchs and matriarchs."
		},
		{
			"employer": "Apple",
			"title": "Leadership Associate",
			"location": "San Francisco",
			"dates": "July 2010 to July 2012",
			"description": "• Along with my managerial team, led 100+ employees\
					of $30 million store through iterative, customer-focused\
					operations with daily group discussions, inspirational\
					speeches and personalized mentorship. • Completed a dozen\
					empathy-oriented case studies over two years while rotating\
					between most all the roles in the store, championing scores\
					of initiatives into successful adoption. • Analyzed net\
					promoter data to iterate strategy and empower our team to\
					reach #1 customer service out of 300+ stores in the company.\
					•Harnessed ecosystemic observation to develop a region-wide\
					training program that influenced the formation of a new\
					global training initiative for 40,000 full-time employees.\
					• Published one of the most commented blogs on the program’s\
					internal social network, drawing inspiration from online\
					ethnography."
		}
	]
};

work.display = function() {
	for (var job in work.jobs) {
	    if (work.jobs.hasOwnProperty(job)) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace(data,
				work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace(data,
				work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace(data,
				work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace(data,
				work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace(data,
				work.jobs[job].description);
			var $workEntryLast = $(".work-entry:last");
			$workEntryLast.append(formattedEmployerTitle, formattedDates,
					formattedLocation, formattedDescription);
	    }
	}
};

work.display();



// Projects

var projects = {
	"workSamples": [{
			"title": "Triathlon Ready",
			"dates": "September 2015 to Present",
			"description": "Designing the user research process and user\
					experience for the Triathlon Ready app, a web app that\
					instantly syncs a personalized training plan for beginning\
					triathletes.",
			"images": ["images/tr1.jpg", "images/tr2.jpg"]
		},
		{
			"title": "Nutriceipt",
			"dates": "August 2015 to Present",
			"description": "Building out an app that tracks dietary intake by\
					scanning grocery receipts.",
			"images": ["images/nutriceipt1.jpg", "images/nutriceipt2.jpg"]
		}
	]
};

projects.display = function() {
	for (var workSample in projects.workSamples) {
		if (projects.workSamples.hasOwnProperty(workSample)) {
		    $("#projects").append(HTMLprojectStart);

		    var $projectEntryLast = $(".project-entry:last");
		    var formattedProjectTitle = HTMLprojectTitle.replace(data,
		    		projects.workSamples[workSample].title);
		    $projectEntryLast.append(formattedProjectTitle);
		    var formattedProjectDates = HTMLprojectDates.replace(data,
		    		projects.workSamples[workSample].dates);
		    $projectEntryLast.append(formattedProjectDates);
		    var formattedProjectDescription = HTMLprojectDescription.replace(data,
		    		projects.workSamples[workSample].description);
		    $projectEntryLast.append(formattedProjectDescription);

	        projects.workSamples[workSample].images.forEach(function(image) {
				var formattedWorkSampleImages = HTMLprojectImage.replace(data,
	               			image);
	                $projectEntryLast.append(formattedWorkSampleImages);
	        });
	    }
    }
};

projects.display();


// Google Maps addition

$("#mapDiv").append(googleMap);
