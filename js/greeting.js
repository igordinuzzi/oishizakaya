$(document).ready(function() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = '';
    var additionalText = 'Dive into Tokyo\'s Culinary Soul!';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    $('#greeting').text(greeting + ', ' + additionalText);
});
