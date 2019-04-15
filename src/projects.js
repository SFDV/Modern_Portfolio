var projects= [
    {
        title: "The Smash Center",
        image: "./img/smashlogo.png",
        description: "My final project from the Rutger's Coding Bootcamp. An app that allows users to create customizable profiles, and post basic information about tournaments they plan on holding. The app remembers all user and tournament information.",
        technology: "Technologies used: HTML, CSS, JavaScript, React, Express, Nodejs, MongoDB",
        link: "https://dv-capstone-client.herokuapp.com/"
    },

    {
        title: "My America Guide",
        image: "./img/americalogo.png",
        description: "A group project form the Rutger's Coding Bootcamp. This application takes the location a user inputs and runs them through a series of APIs in order to display information such as weather, local news, and notable landmarks of the area. Technologies used include Bootstrap, jQuery, and Firebase. <br> <br> Created in conjunction with Derek Chee, Mark Lech,Vale Rideout, and Salisu Babatunde",
        technology:"Technologies used: HTML, CSS, JavaScript, Express, Ajax, Nodejs, Firebase",
        link:"https://derkche.github.io/MyAmericanGuide/"
    }
]

window.onload = function() {
    populateList();
}

function populateList(){

    var list = document.getElementById("projectList");

    var htmlString = "";

    for (var i = 0; i < projects.length; i++) {
        htmlString += "<a class=\"project\" href=\"" + projects[i].link + "\" />\n";
        htmlString += "<h1 class=\"title\">" + projects[i].title + "</h1>\n";
        htmlString += "<p class=\"description\">" + projects[i].description + "</p>\n";
        htmlString += "<p class=\"technology\">" + projects[i].technology + "</p>\n";
        htmlString += "<div class=\"imagewrapper\">\n";
        htmlString += "<img id=\"project-image\" src=\"" + projects[i].image + "\" /> </div>\n<section>\n";
        htmlString += "\n</section>\n</div>"
    }

    list.innerHTML = htmlString;
}