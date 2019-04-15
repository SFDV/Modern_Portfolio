let skill = [
    {
        img:"./img/html-5-logo.png",
    },

    {
        img:"./img/css-3-logo.png",
    },

    {
        img:"./img/js-logo.png",
    },

    {
        img:"./img/handlebars-js.png",
    },

    {
        img:"./img/jquery-logo.png",
    },

    {
        img:"./img/nodejs.png",
    },
    
    {
        img:"./img/react-logo.png",
    },

    {
        img:"./img/mysql-logo.png",
    },

    {
        img:"./img/firebase.png",
    },

    {
        img:"./img/mongodb-logo.png",
    },

    {
        img:"./img/Sequelize.png",
    },

    {
        img:"./img/express.png",
    },
]

window.onload = function() {
    fillSocial();
}

function fillSocial() {
    let s = document.getElementById("skill");
    let htmlString= "";
    for (let i=0; i < skill.length; i++) {
        htmlString += "<img src=\"" + skill[i].img + "\" /></a>"
    }
    s.innerHTML = htmlString;
}