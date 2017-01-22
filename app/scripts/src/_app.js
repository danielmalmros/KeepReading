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

    // Init plugin
    let initKeepReading = () => {
        keepReading();
    };

    let keepReading = () => {

        // Store text block class.
        let keepReading = $('.keepreading');

        // Store the average reading time.
        let averageReadingTime = 200;

        // Loop through each element that has the class '.keepreading'.
        $.each(keepReading, function(key, val) {

            // Calculate each text block.
            let keepReadingText = $(this).text();
            let charsLength = keepReadingText.length;
            let wordsCount = keepReadingText.trim().split(/\s+/g).length;
            let readingTime = wordsCount / averageReadingTime;
            let readingTimeMinutes = Math.round(readingTime);

            // Display total word count.
            let keepReadingTotalWords = $(this).find('.keepreading__words');
            $(keepReadingTotalWords).html(wordsCount + ' words');

            // Get the descendants of each element in the current set.
            let keepReadingTime = $(this).find('.keepreading__time');

            // Find remote tag.
            let remote = $(this).find('.keepreading__time-remote');

            // If remote exists then fire async.
            if (remote) {

                $.get("remote.html", (response) => {
                    storeRemote(response);
                });

                let storeRemote = (test) => {
                    let remoteBlock = $(test).find('.keepreading__time');
                    console.log(remoteBlock.length);

                    $(remote).html('Read time ' + readingTimeMinutes + ' minuts!');
                }

            } else {
                console.log('No remote files');
            }

            // If reading time is greater than 1, show read time.
            if (readingTimeMinutes > 1) {

                // Add the calculated read time to DOM.
                $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

            } else {

                // Display new message if it's less than a minute.
                $(keepReadingTime).html('Read time is less than a minute!');

            }
        });
    };

    initKeepReading();

});
