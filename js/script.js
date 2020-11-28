let mode = window.localStorage.getItem("darkmode");
console.log(mode);
    if (mode===null){
        window.localStorage.setItem("darkmode", false);
    } else if (mode==="true") {
        document.body.classList.add('dark');
        document.getElementById("toggle").checked=true;
    } else {
        document.body.classList.remove("dark");
        document.getElementById("toggle").checked=false;
    }



document.querySelector('#toggle').addEventListener
('change', (e) => {
    document.body.classList.toggle('dark');
    console.log(e.target.checked);
    window.localStorage.setItem("darkmode", e.target.checked);
});


var videos = $('.card');

videos.hover( 
    function () {
        var thisVideo= $( this ).find("video")[0];
        thisVideo.play();

}, function() {
    var thisVideo= $( this ).find("video")[0];
    thisVideo.pause();
} );

