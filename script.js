$(document).ready(function() {
 
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    //   window.onscroll = function(){
    //     if(this.scrollY > 1381){
    //         $("nav.navbar").css("background", "red");
    //     }
    //   };



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
            // onComplete: (self) => {$(".navbar").fadeIn(1000).css("display", "flex")}
          }
          
          var typed = new Typed("h1", options);
    }, 5000);
 

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

let emoji = ["😂🔫", "🍕", "💻", "✋📱"];
let i = 0;
setInterval(function(){
    $("#madeWith").hide().html(emoji[i]).fadeIn(500);
    
    
    if (i ===2 ){
        i = -1;
        
    }
    i++;

}, 2000);
