/*!
 * KeepReading
 * Copyright (c) Daniel Malmros
 * <daniel@bymalmros.dk>
 * Created: Januar 03, 2017
 * Updated: NaN
 * MIT Licensed
 */

'use strict'

$(() => {

    // Init plugin.
    let initKeepReading = () => {
        keepReading();
    };

    let keepReading = () => {

        // Global config settings for keepReading.
        const config = {
            keepReading: $('.keepreading'),
            keepReadingRemoteTarget: '.keepreading-remote',
            keepReadingRemotePath: 'remote.html',
            averageReadingTime: 200
        };

        // Get remote file.
        $.get(config.keepReadingRemotePath, (response) => {
            storeRemote(response);
        });

        // Callback on remote data.
        let storeRemote = (remoteText) => {
            let remoteKeepReading = $('<div>').html(remoteText).find(config.keepReadingRemoteTarget).text();
            console.log(remoteKeepReading);
        };

        // If keepReading is not null then fire function.
        if (config.keepReading !== null) {

            // Loop through each element that has the class '.keepreading'.
            $.each(config.keepReading, function(key, val) {

                // Calculate each text block.
                let keepReadingText = $(this).text();
                let charsLength = keepReadingText.length;
                let wordsCount = keepReadingText.trim().split(/\s+/g).length;
                let readingTime = wordsCount / config.averageReadingTime;
                let readingTimeMinutes = Math.round(readingTime);

                // Display total word count.
                let keepReadingTotalWords = $(this).find('.keepreading__words');
                $(keepReadingTotalWords).html(wordsCount + ' words');

                // Get the descendants of each element in the current set.
                let keepReadingTime = $(this).find('.keepreading__time');

                // If reading time is greater than 1, show read time.
                if (readingTimeMinutes > 1) {

                    // Add the calculated read time to DOM.
                    $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                } else {

                    // Display new message if it's less than a minute.
                    $(keepReadingTime).html('Read time is less than a minute!');

                }

            });

        } else {
            console.log('GO!');
        }

        // If remote exists then fire async.
        if (config.keepReadingRemoteTarget !== null) {
            // Loop through each element that has the class '.keepreading'.
            $.each(config.keepReadingRemoteTarget, function(key, val) {

                // Calculate each text block.
                let keepReadingText = $(this).text();
                let charsLength = keepReadingText.length;
                let wordsCount = keepReadingText.trim().split(/\s+/g).length;
                let readingTime = wordsCount / config.averageReadingTime;
                let readingTimeMinutes = Math.round(readingTime);

                // Display total word count.
                let keepReadingTotalWords = $(this).find('.keepreading__words');
                $(keepReadingTotalWords).html(wordsCount + ' words');

                // Get the descendants of each element in the current set.
                let keepReadingTime = $(this).find('.keepreading__time');

                // If reading time is greater than 1, show read time.
                if (readingTimeMinutes > 1) {

                    // Add the calculated read time to DOM.
                    $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                } else {

                    // Display new message if it's less than a minute.
                    $(keepReadingTime).html('Read time is less than a minute!');

                }

            });

        } else {
            console.log('GO!');
        }

    };

    initKeepReading();

});
