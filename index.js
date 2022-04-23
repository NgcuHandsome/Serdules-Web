setInterval(() => $('.carousel').carousel('next'), 5000)


lottie.loadAnimation({
    container: document.getElementById('slide2_ani'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/slide2.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('slide3_ani'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/slide3.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('slide4_ani'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json/slide4.json' // the path to the animation json
});

scrollId = {
    'home_page_btn': '#slide_view',
    'function_btn': '#function',
    'contact_btn': 'contact'
}

$(".menu").click(function () {
    let id = $(this).attr('id');
    $('#main').animate({
        scrollTop: $(scrollId[id]).offset().top
    }, 300);
});