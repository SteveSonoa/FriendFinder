var fs = require('fs');

module.exports = function(app, path) {
	// Display all available friends
	app.get("/api/friends", function(req, res) {
		fs.readFile("app/data/friends.js", "utf8", function(err, data) {
			if (err) {
				return console.log(err);
			}

			else {
				var output = data.split("%%%");
				res.json(JSON.parse(output));
			}
		});
	});

	// Save the incoming result & determine the correct match
	app.post("/api/friends", function(req, res) {
		let output;
		fs.readFile("app/data/friends.js", "utf8", function(err, data) {
			if (err) {
				return console.log(err);
			}

			else {
				output = JSON.parse(data);
				output.push(req.body);


				// This will add a comma after the previous entry before adding a new one
				fs.appendFile("app/data/friends.js", JSON.stringify(output), function(err2) {
					// If an error was experienced we say it.
					if (err2) {
						console.log(err2);
					}

					// If no error is experienced, we'll log the phrase "Content Added" to our node console.
					else {
						console.log("Content Added!");
					}

				});

				res.json(JSON.parse(output));


			}
		});


	});
}