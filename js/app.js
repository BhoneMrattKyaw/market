let screenHeight = $(window).height();
$(window).scroll(_=>{
    let currentPosition = $(this).scrollTop();
if(currentPosition >= screenHeight){
        $(".nav-container").addClass("pfixed")
    }else if (currentPosition == 0) {
        setActive("home");
    }else{
        $(".nav-container").removeClass("pfixed");
    }
});

$(".navbar-toggler").click(_=>{
    let result = $(".menu-icon").hasClass("fa-bars");
    if(result){
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }else{
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }
})

let setActive = x => {
    $(".nav-link").removeClass("active")
    $(`.nav-link[href="#${x}"]`).addClass("active");
}

let currentSection = $("section[id]");
currentSection.waypoint(function (direction) {
    if(direction == "down"){
        let currentSectionId = $(this.element).attr("id");
        setActive(currentSectionId);
    }else if (direction == "up"){
        let currentSectionId = $(this.element).attr("id");
        setActive(currentSectionId);
    }
},{offset : '150px'});

wow = new WOW(
    {
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       0,    
    mobile:       true,
    live:         true     
  }
  )
  wow.init();

$('.pricing-slide').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHove: true,
    autoplaySpeed: 10000,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
    }
    },{
    breakpoint: 825,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },{
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }}
    ]
});

$(window).on("load",_=>{
    $(".loader-container").fadeOut(500,_=>{
        $(".loader-container").remove();
    });
})