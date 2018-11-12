let social = [
    {
        img:"./img/facebook.png",
        link:"https://www.facebook.com/SuperFamousDanV"
    },

    {
        img:"./img/github.png",
        link:"https://github.com/SFDV"
    },

    {
        img:"./img/linkedin.png",
        link:"https://www.linkedin.com/in/dan-vickey-33654b156/"
    }
]

window.onload = function() {
    fillSocial();
}

function fillSocial() {
    let s = document.getElementById("social");
    let htmlString= "";
    for (let i=0; i < social.length; i++) {
        htmlString += "<a href=\"" + social[i].link + "\"><img src=\"" + social[i].img + "\" /></a>"
    }
    s.innerHTML = htmlString;
}