$(document).ready(function () {
    var $timer = $("#timer");
    var seconds = "00";
    var tens = "00";
    var interval;
    var opacityInterval;

    // Adding the timer-background class to the timer
    $timer.addClass('timer-background');

    // Add classes to buttons and style them
    $('#button-start, #button-stop, #button-reset').addClass('btn');

    // Start button functionality with opacity animation
    $("#button-start").on('click', function () {
        clearInterval(interval);
        clearInterval(opacityInterval);
        interval = setInterval(startTimer, 10);
        $timer.css('background-color', 'rgb(51, 165, 50)'); // Green when running

        // Opacity animation from 0.8 to 1.0
        opacityInterval = setInterval(function () {
            $timer.animate({ opacity: 0.8 }, 500).animate({ opacity: 1.0 }, 500);
        }, 1000);
    });

    // Stop button functionality
    $("#button-stop").on('click', function () {
        clearInterval(interval);
        clearInterval(opacityInterval); // Stop the opacity animation
        if (seconds !== "00" || tens !== "00") {
            $timer.css('background-color', 'rgb(251, 18, 47)'); // Red when paused
        }
    });

    // Reset button functionality
    $("#button-reset").on('click', function () {
        clearInterval(interval);
        clearInterval(opacityInterval); // Stop the opacity animation
        tens = "00";
        seconds = "00";
        $("#tens").html(tens);
        $("#seconds").html(seconds);
        $timer.css({
            'background-color': 'grey', // Reset to default grey color
            'opacity': '1' // Reset opacity to 1
        });
    });

    function startTimer() {
        tens++;
        if (tens < 9) {
            $("#tens").html("0" + tens);
        }
        if (tens > 9) {
            $("#tens").html(tens);
        }
        if (tens > 99) {
            seconds++;
            $("#seconds").html("0" + seconds);
            tens = 0;
            $("#tens").html("00");
        }
        if (seconds > 9) {
            $("#seconds").html(seconds);
        }
    }
});