window.onload = init;

var car;
function init(){

    car = $('.car').ThreeSixty({
        totalFrames: 52, // Total no. of image you have for 360 slider
        endFrame: 52, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath:'assets/images/spins', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        height: 1000,
        width: 447,
        navigation: false
    });

    $('.custom_previous').bind('click', function(e) {
      car.previous();
    });

    $('.custom_next').bind('click', function(e) {
      car.next();
    });

    $('.custom_play').bind('click', function(e) {
      car.play();
    });

    $('.custom_stop').bind('click', function(e) {
      car.stop();
    });

}