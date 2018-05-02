/**
 * main.js
 * Main JavaScript file that processes all logic
 */

 $(document).ready(function () {
    console.log('ready.');

    $('#main-form').on('submit', function (ev) {
        var $this = $(this);
        ev.preventDefault();

        var $resultsBox = $('.main-form.results'),
            $resultsMinutesSaved = $('#result-minutes-saved'),
            $resultsDesiredSpeed = $('#result-desired-speed'),
            $resultsExplanation = $('#result-explanation'),
            $resultsResponse = $('#response');

        var $limit = $('#speed-limit'),
            $desired = $('#desired-speed'),
            $distance = $('#distance');

        var limit = $limit.val(),
            desired = $desired.val(),
            distance = $distance.val();

        if (isNaN(limit) || isNaN(desired) || isNaN(distance)) {
            alert('Please enter a number for all fields.');
            return;
        }

        console.log('Speed Limit: ' + limit);
        console.log('Desired Speed: ' + desired);
        console.log('Distance: ' + distance);

        var minutesAtLimit = Math.round(60 * distance / limit);
        var minutesAtDesired = Math.round(60 * distance / desired);

        var minutesSaved = minutesAtLimit - minutesAtDesired;
        var speedDifference = desired - limit;

        if (speedDifference < 0) {
            $resultsResponse.text('Umm...');
            $resultsExplanation.text('driving significantly slower than the surrounding traffic is also dangerous. It is recommended to always follow the flow of traffic when possible. We do not condone unsafe or illegal driving.')
        } else if (speedDifference == 0) {
            $resultsResponse.text('Well...');
            $resultsExplanation.text('at that speed, you wouldn\'t be considered "speeding" at all!');
        } else if (speedDifference < 20) {
            $resultsResponse.text('Probably not.');
            $resultsExplanation.text('driving significantly faster than the surrounding traffic is dangerous and can increase the likelihood of a collision. It is recommended to always follow the flow of traffic when possible. We do not condone unsafe or illegal driving.')
        } else /* if (speedDifference < 30) */ {
            $resultsResponse.text('No.');
            $resultsExplanation.text('driving significantly faster than the surrounding traffic is dangerous and can increase the likelihood of a collision. Some states will revoke or suspend your license if you are driving 20 miles per hour over the speed limit! It is recommended to always follow the flow of traffic when possible. We do not condone unsafe or illegal driving.')
        }
        
        $resultsMinutesSaved.text(minutesSaved + ' minutes');
        $resultsDesiredSpeed.text(desired + ' mph');
        $resultsBox.show();
    });
 });