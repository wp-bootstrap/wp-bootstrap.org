$(document).ready(function() {
	get_repos(); // Go and fetch my public github repos
}); //close document ready


// This function graps all my personal public repos from github
// It returns an array of json objects
function get_repos() {

	$('#result').html("");
	var html = '';

	$.ajax({
		url: "https://api.github.com/users/wp-bootstrap/repos",
		dataType: "jsonp",
		success: function(returndata) {
			$.each(returndata.data, function(i, item) { //Loop through array for each repo
				html +=  	'<div class="container col-md-offset-2">' +
					'<div class="col-md-10 well" style="border: black solid; margin: 10px;">' +
					'<p style="float: right; font-size: small;">' +
					'<a class="github-button" href="https://github.com/wp-bootstrap/' + this.name + '/archive/master.zip" data-icon="octicon-cloud-download" aria-label="Download wp-bootstrap/' + this.name + ' on GitHub">Download</a> ' +
					'<a class="github-button" href="https://github.com/wp-bootstrap/' + this.name + '" data-icon="octicon-star" data-count-href="/wp-bootstrap/wp-bootstrap-navwalker/stargazers" data-show-count="true"' + this.name + '#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star wp-bootstrap/wp-bootstrap-navwalker on GitHub">Star</a> ' +
					'<a class="github-button" href="https://github.com/wp-bootstrap/' + this.name + '/fork" data-icon="octicon-repo-forked" data-count-href="/wp-bootstrap/wp-bootstrap-navwalker/network" data-show-count="true" data-count-aria-label="# forks on GitHub" aria-label="Fork wp-bootstrap/wp-bootstrap-navwalker on GitHub">Fork</a> ' +
					'<a class="github-button" href="https://github.com/wp-bootstrap/' + this.name + '" data-count-href="/wp-bootstrap/' + this.name + '/stargazers" >View Repo</a>' +
					'</p>' +
					'<h3 class="repo-title"><a target="_blank" href="' + this.html_url + '">' + this.name + '</a></h3>' +
					'<p>' + this.description + '</p>' +
					'</div></div>' +'	<script async defer src="https://buttons.github.io/buttons.js"></script>';
			});
			$('#result').append(html); // add the array to html to
		} // End AJAX call
	});

} // End get repos




// <footer><div id="footer" style="bottom:0; margin-top: 220px;">	<div class="row" style="padding: 5px; background: black"><div class="col-md-4 col-sm-offset-4"><h3 style="font-style: italic; color: white; text-align: center;">Sponsored by  <a href="https://www.imforza.com/" target='_blank'><img class="img-responsive" src="assets/images/imforza2.jpg" width="450" alt="imforza-logo" height="200"></a></h3></div></div></div></footer>
