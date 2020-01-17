function fetchGitHubInformation(event) {
	var username = $("#gh-username").val();
	if (!username) {
		$("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
		return;
	}

	$("#gh-user-data").html(
		`<div id="loader">
            <img src="assets/images/loader.gif" alt="loading..." />
        </div>`
	);

	$.when($.getJSON(`https://api.github.com/users${username}`)).then(
		function(response) {
			var userData = response;
			$("#gh-user-data").html(userInformationHTML(userData));
		},
		function(errorResponse) {
			if (errorResponce.status === 404) {
				$("#gh-suer-data").html(`<h2>${username} Not found</h2>`);
			} else {
				console.log(errorResponse);
				$("#gh-user-data").html(
					`<h2>Error: ${errorResponse.responseJSON.message}</h2>`
				);
			}
		}
	);
}
