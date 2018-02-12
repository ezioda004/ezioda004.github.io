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

//this one
     $("img").on("mouseover", function(){
        $(this).css("opacity", "0.3");
        $(this).next().width($(this).width());
        $(this).next().height($(this).height());
        $(this).next().fadeIn(500, function(){
            $(this).next().css("display", "flex");
    }).css("display", "flex");
});
$("figcaption").on("mouseleave", function(){
    
    $(this).fadeOut(500, function(){
        $(this).prev().css("opacity", "1");
        $(this).css("display", "none");
    })
});
// $("figcaption").on("mouseleave", function(){
//     $(this).removeClass("transform").delay(500).css("display", "none");
// });

    
$(window).resize(function(){
    console.log($("img").width());
    $("figcaption").width($("img").width());
    $("figcaption").height($("img").height());
})
$("figcaption").width($("img").width());
$("figcaption").height($("img").height());
});