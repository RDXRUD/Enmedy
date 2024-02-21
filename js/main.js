(function ($) {
    "use strict";

    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    var context = new AudioContext();
    
    
    // Initiate the wowjs
    new WOW().init();

    
    document.addEventListener('click', function() {
        playBackgroundMusic();
    });
    function playBackgroundMusic() {
        if (bgMusic.paused) {
            context.resume();
            bgMusic.play();
            console.log('Playback started successfully');
        }
    }

    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $(document).ready(function(){
        // Get the current page URL
        var currentUrl = window.location.href;
        console.log(currentUrl);
        // Check if the URL contains the keyword for each section
        // console.log(currentUrl.indexOf("#about-section"));
        if (currentUrl.indexOf("#header-carousel") !== -1) {
            $("a[href='#header-carousel']").addClass("active");
        } else if (currentUrl.indexOf("#about-section") !== -1) {
            $("a[href='#about-section']").addClass("active");
        } else if (currentUrl.indexOf("contact.html") !== -1) {
            $("a[href='contact.html']").addClass("active");
        }
    });
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    


})(jQuery);

function submitform(){
    
    var name=document.getElementById("Name").value;
    var email=document.getElementById("Email").value;
    var subject=document.getElementById("Subject").value;
    var message=document.getElementById("Message").value;
    var otherSubject = document.getElementById("OtherSubject").value;
    var otherInput = document.getElementById("otherInput");
    if(otherInput.style.display == "block"){
        subject=otherSubject
    }
    console.log(subject)
    var body="Name: "+ name + "<br/>Email: "+ email+ "<br/>Subject: "+ subject + "<br/>Message: "+ message


    // console.log("sum=bmitform",body)    
    Email.send({
        SecureToken:"2ff701b7-d196-49d1-bec6-9f32e74ee64c",
        // Host : "smtp.elasticemail.com",
        // Username : "rudrakshagarwal03@gmail.com",
        // Password : "DD94662D617EA5D7D9685C8E1383BC3D57F4",
        To : 'rudrakshagarwal03@gmail.com',
        From : "rudrakshagarwal03@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => {
        if(message=="OK"){
            swal("Successfull!","Your enquiry/review has been send","success");
            document.getElementById("enquiry-form").reset();
        }
        else{
            swal("Something Went Wrong!","Your enquiry/review has not been send","error")
        }
      }
    );
}
function checkOther() {
    var subjectSelect = document.getElementById("Subject");
    var otherInput = document.getElementById("otherInput");

    if (subjectSelect.value === "Other") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}


