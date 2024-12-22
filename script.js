function mouseOver() {
    $(".hoverbandup").removeClass("d-none");
    $(".Teaminsurance, .ulipplan, .savingsplan, .healthplans").addClass("custom-width-16");
    $(".retirementplan").addClass("custom-width-30").css({ "padding": "0px" });
    $(".Teaminsurance .redcylinder, .Teaminsurance .bluecylinder, .retirementplan .redcylinder, .retirementplan .bluecylinder").addClass("d-none");
    $(".outerBannerdetails h1").css({ "display": "none", "transition": "all ease-out 0.2s;" });
    $(".banner-section .overlayClass").css({ "opacity": "0.9" });
}
function mouseLeave() {
    $(".hoverbandup").addClass("d-none");
    $(".Teaminsurance, .ulipplan, .savingsplan, .healthplans").removeClass("custom-width-16");
    $(".retirementplan").removeClass("custom-width-30").css({ "padding": "0px" });
    $(".Teaminsurance .redcylinder, .Teaminsurance .bluecylinder, .retirementplan .redcylinder, .retirementplan .bluecylinder").removeClass("d-none");
    $(".outerBannerdetails h1").css({ "display": "block", "transition": "all ease-out 0.2s;" });
    $(".banner-section .overlayClass").css({ "opacity": "0.8" });
}
$(document).ready(function () {
    $(".outerBannerdetails .retirementplan").hover(mouseOver, mouseLeave);
    $(".bluelaydetails button").on("click", function () {
        $("#retirementplans").removeClass("retirementplan").off("mouseenter mouseleave");
        $(".outerBannerdetails h1").css({ "display": "none", "transition": "all ease-out 0.2s;" })
        $(".hoverbandup").removeClass("d-none");
        $(".Teaminsurance, .ulipplan, .savingsplan, .healthplans,.blueoverlay").addClass("d-none");
        $(".hoverbandup .hoverdetails").removeClass("d-none");
        $("#retirementplans").addClass("custom-width-100");
        $(".hoverban").css({ "text-align": "left" });
        $(".hoverban img").addClass("custom-left-negative-14");
    });
    $(".close-btn").on("click", function () {
        $(".outerBannerdetails h1").css({ "display": "block", "transition": "all ease-out 0.2s;" })
        $(".hoverbandup").addClass("d-none");
        $("#retirementplans").addClass("retirementplan").on("mouseenter mouseleave");
        $(".Teaminsurance, .ulipplan, .savingsplan, .healthplans,.blueoverlay").removeClass("d-none");
        $(".hoverbandup .hoverdetails").addClass("d-none");
        $("#retirementplans").removeClass("custom-width-100 custom-width-30 custom-width-16");
        $(".Teaminsurance, .ulipplan, .savingsplan, .healthplans").removeClass("custom-width-16");
        $(".hoverban").css({ "text-align": "left" });
        $(".banner-section .overlayClass").css({ "opacity": "0.8" });
        $(".outerBannerdetails .retirementplan").hover(mouseOver, mouseLeave);
        $(".hoverban img").removeClass("custom-left-negative-14");
    })
    $(document).on("mouseenter", ".lifetime-assured-pans div", function () {
        $(this).find(".plans").addClass("d-none transitionown");
        $(this).addClass("transitionown").css({"background":"#ED3237"})
        $(this).find("h2, .bi-star-fill, .d-block, li, button, .kotaktext").addClass("text-white transitionown");
        $(this).find("button, .learnMore").removeClass("d-none transitionown");
        $(this).find(".bi-star-fill:last-child").removeClass("text-white transitionown").css({"color": "#00000033"});
        $(this).find(".learnMore").css({"transform": "translateX(30px)", "transition": "2s"});
        $(this).find(".greybg img").removeClass("d-none");
    }).on("mouseleave", ".lifetime-assured-pans div", function () {
        $(this).find(".plans").removeClass("d-none transitionown");
        $(this).removeClass("transitionown").css({"background":"#fff"})
        $(this).find("h2, .bi-star-fill, .d-block, li, button, .kotaktext").removeClass("text-white transitionown");
        $(this).find("button, .learnMore").addClass("d-none");
        $(this).find(".bi-star-fill:last-child").removeClass("text-white").css({"color": "#eaeaea"});
        $(this).find(".learnMore").css({"transform": "unset"});
        $(this).find(".greybg img").addClass("d-none");
    });
    
});