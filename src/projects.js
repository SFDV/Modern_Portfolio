var projects = [
    {
        title: "The Smash Center",
        image: "./img/smashlogo.jpg",
        description: "An app that allows users to create customizable profiles, and post information about tournaments they plan on holding",
        link: [["https://dv-capstone-client.herokuapp.com/", "Visit the Smash Center!"]]
    }
]

window.onload = function() {
    populateList();
}

function populateList(){

    var list = document.getElementById("projectList");

    var htmlString = "";

    for (var i=0; i < projects.length; i++) {
        htmlString += "<div class= \"project\">\n";
        htmlString += "<div class= \"imagewrapper\">\n";
        htmlString += "<img src=\"" + projects[i].image + "\" /> </div>\n<section>\n";
        htmlString += "<h1>" + projects[i].title + "</h1>\n";
        htmlString += "<p>" + projects[i].description + "</p>\n";

        for (var h=0; h < projects.links.length; h++) {
            htmlString += "<a href=\"" + projects[i].links[h][0] + "\">" + projects[i].links[h][1] + "</a> ";
        }

        htmlString += "\n</section>\n<div>"
    }
    list.innerHTML = htmlString;
}