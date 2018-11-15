document.addEventListener("DOMContentLoaded", function(e) {
  AOS.init({
    disable: "mobile"
  });
  function scrollFunc(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      let fVal = document.getElementsByTagName("html")[0].scrollTop;
      let iVal = document.querySelector(hash).offsetTop;
      let j = Math.max(iVal, fVal);
      let sign = Math.sign(iVal - fVal);
      let i = Math.min(fVal, iVal);
      const id = setInterval(() => {
        if (i < j) {
            console.log("here");
          document.getElementsByTagName("html")[0].scrollTop += sign*35;
          i+= 35;
        }
        else {
            window.location.hash = hash;
            clearInterval(id);
        }
      }, 10);
    } // End if
  }

  document
    .querySelectorAll("a")
    .forEach(link => link.addEventListener("click", scrollFunc));

  setTimeout(function() {
    $("body").addClass("loaded");

    var options = {
      strings: ["Hello World;"],
      typeSpeed: 120,
      startDelay: 1000,
      backDelay: 1000,
      backSpeed: 200,
      smartBackspace: true,
      showCursor: false,
      cursorChar: "|",
      onComplete: self => {
        var typed2 = new Typed("h2", second);
        $(".navbar")
          .fadeIn(1000)
          .css("display", "flex");
      }
    };

    var second = {
      strings: [
        "I'm Aditya. ^1000",
        "A Developer. ^1000",
        "A Dreamer. ^1000",
        "A Programmer."
      ],
      typeSpeed: 120,
      startDelay: 1000,
      backDelay: 1000,
      backSpeed: 200,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|"
    };

    var typed = new Typed("h1", options);
  }, 5000);

  $("button").on("click", function(e) {
    e.preventDefault();
    $("button svg").toggleClass("fa-angle-double-down");
    $("button svg").toggleClass("fa-times");
  });

  $("button[type = 'submit']").on("click", function(e) {
    e.preventDefault();
    $("#after-submit").fadeIn(1000, function() {
      // $(this).css("display", "block");
      setTimeout(function() {
        $("#after-submit").fadeOut(1000);
        $("form input").val("");
        $("form textarea").val("");
      }, 5000);
    });
  });
  $(".img-hover").on("mouseenter", function() {
    $(this).css("opacity", "0.3");
    $(this)
      .next()
      .width($(this).width());
    $(this)
      .next()
      .height($(this).height());
    $(this)
      .next()
      .fadeIn(400, "linear", function() {
        $(this)
          .next()
          .css("display", "flex");
      })
      .css("display", "flex");
  });
  $(".img-fluid").on("mouseleave", function() {
    $($(this).children()[1]).fadeOut(400, "linear", function() {
      $(this)
        .prev()
        .css("opacity", "1");
      $(this).css("display", "none");
    });
  });

  $(window).resize(function() {
    $("figcaption").width($("img").width());
    $("figcaption").height($("img").height());
    if ($(window).width() < 634) {
      $("#GC").height("auto");
    } else {
      $("#GC").height($("#FC").height());
    }
  });
  $("figcaption").width($("img").width());
  $("figcaption").height($("img").height());
});

// $(document).ready(function () {

// });

let emojis = ["😂🔫", "🍕", "💻", "✋📱"];
let i = 0;
setInterval(function() {
  $("#madeWith")
    .hide()
    .html(emojis[i])
    .fadeIn(500);
  if (i === 3) {
    i = -1;
  }
  i++;
}, 2000);
