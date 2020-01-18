function sendMail(contactForm) {
	emailjs
		.send("gmail", "code_resume", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			project_request: contactForm.projectsummary.value
		})
		.then(
			function(responce) {
				console.log("SUCCESS", responce);
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}
