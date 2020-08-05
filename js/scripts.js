// // navigation icon
// $(document).ready(function(){
//     $(".menu-icon").on("click", function(){
//         $("nav ul").toggleClass("showing");
//     });
// });

// //Scrolling Effect
// $(window).on("scroll", function(){
//     if($(window).scrollTop()){
//         $('nav').addClass('black');
//     }
//     else{
//         $('nav').removeClass('black');
//     }
// });

// our features
$(document).ready(function(){
    $('.img1').click(function(){
        $(this).slideToggle('');
        $(this).slideToggle();
    });
});