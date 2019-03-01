// sticky scrollbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('navbar').style.opacity = "0.85";
        document.getElementById('navbar').style.position = "fixed";
        document.getElementById('logo').style.width = "50px";
        document.getElementById('logo').style.height = "63px";
        document.getElementById('join').style.padding = "5px 10px";
        document.getElementById('login').style.padding = "5px 10px";
        document.getElementById('navbar-right').style.display = "none";
    } else {
        document.getElementById('navbar').style.opacity = "1.0";
        document.getElementById('navbar').style.position = "fixed";
        document.getElementById('logo').style.width = "265px";
        document.getElementById('logo').style.height = "200px";
        document.getElementById('join').style.padding = "10px 20px";
        document.getElementById('login').style.padding = "10px 20px";
        document.getElementById('navbar-right').style.display = "inline-block";
    };
};
