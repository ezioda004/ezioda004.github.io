$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        
        
        var options = {
            strings: ["Hello World;"],
            typeSpeed: 120,
            startDelay: 1000,
            backDelay: 1000,
            backSpeed: 200,
            smartBackspace: true,
            showCursor: false,
            cursorChar: '|',
            // fadeOutClass: 'typed-fade-out'
            onComplete: (self) => {var typed2 = new Typed("h2", second);}
          }

          var second = {
            strings: ["I'm Aditya. ^1000", "A Developer. ^1000", "A Dreamer. ^1000" , "A Programmer."],
            typeSpeed: 120,
            startDelay: 1000,
            backDelay: 1000,
            backSpeed: 200,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
            onComplete: (self) => {$(".navbar").fadeIn(1000).css("display", "flex")}
          }
          
          var typed = new Typed("h1", options);
    }, 100);
 

    $("button").on("click", function(e){
        e.preventDefault();
        $("button svg").toggleClass("fa-angle-double-down");
        $("button svg").toggleClass("fa-times");


    });
    // $("#img-hover").hover(function(){
    //     $(this).next().toggleClass("transform");    
    // }, function(){
    //     $(this).next().toggleClass("transform");
    // });
$("img").on("mouseenter", function(){
    $(this).next().addClass("transform");
});
$("figcaption").on("mouseleave", function(){
    $(this).removeClass("transform");
});

    // if($(".skill-name").text() === "CSS"){
    //     $(this > .skill-)
    // }
    
    
});