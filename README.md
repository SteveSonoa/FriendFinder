# An Introduction to Friend Finder
Welcome to Friend Finder! Are you lonely? Maybe just bored? Do you want to go hang out, but finding a friend is just too much work? Well I've got GOOD NEWS for you! We can find friends for you! Just include a few details about yourself, and we'll work our magic. Try it for FREE!

### How does it work?
Friend Finder is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses [Express](https://www.npmjs.com/package/express) to configure and operate the server, [Body-Parser](https://www.npmjs.com/package/body-parser) to pass the json data back and forth between files & functions, and [fs](https://nodejs.org/api/fs.html) to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

### Who will use this?
Casual users looking to see who they best resemble will enjoy the app. A community of friends, co-workers, or students can compare their interests to each other as well.

### What is the goal?
The goal is to use deceptively deep personality questions to link 2 users together with a common bond. Many great questions and ideas were discovered during my research, but few translated well into a scale of 1-5. Sites like [Power Of Positivity](https://www.powerofpositivity.com/10-questions-ask-someone-will-reveal/) were helpful in taking the theories and adjusting them to a simple scale.

# Deployment
Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.

# Screen Capture
![Screenshot](http://www.fullstacksteve.com/wp-content/uploads/2018/02/friends-image-1.png)

# Credits
Steve Marshall, sole developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)