var projects = [
    {
        title: "The Smash Center",
        image: "./img/smashlogo.png",
        description: "My final project from the Rutger's Coding Bootcamp. An app that allows users to create customizable profiles, and post basic information about tournaments they plan on holding. Technologies used in this project include Express, Node, and MongoDB",
        link: [["https://dv-capstone-client.herokuapp.com/", "Visit the Smash Center!"]]
    },

    {
        title: "My America Guide",
        image: "./img/americalogo.png",
        description: "A group project form the Rutger's Coding Bootcamp. This application takes the location a user inputs and runs them through a series of APIs in order to display information such as weather, local news, and notable landmarks of the area. Technologies used include Bootstrap, jQuery, and Firebase. Created in conjunction with <a href=\"https://github.com/derkche\">Derek Chee</a>, <a href=\"https://github.com/mlech413\">Mark Lech</a>, <a href=\"https://github.com/OperaSinger\">Vale Rideout</a>, and <a href=\"https://github.com/tundesalisu\">Salisu Babatunde</a>  ",
        link: [["https://derkche.github.io/MyAmericanGuide/", "Check out My America Guide!"]]
    }
]

window.onload = function() {
    populateList();
}

function populateList(){

    var list = document.getElementById("projectList");

    var htmlString = "";

    for (var i = 0; i < projects.length; i++) {
        htmlString += "<div class=\"project\">\n";
        htmlString += "<div class=\"imagewrapper\">\n";
        htmlString += "<img src=\"" + projects[i].image + "\" /> </div>\n<section>\n";
        htmlString += "<h1>" + projects[i].title + "</h1>\n";
        htmlString += "<p>" + projects[i].description + "</p>\n\n";

        for (var h = 0; h < projects[i].link.length; h++) {
            htmlString += "<a href=\"" + projects[i].link[h][0] + "\">" + projects[i].link[h][1] + "</a> ";
        }

        htmlString += "\n</section>\n</div>"
    }

    list.innerHTML = htmlString;
}