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

    $.fn.keepReading = (options) => {

        // Global scoped objects
        let keepReadingText,
            wordsCount = [],
            readingTimeMinutes;

        // Global config settings for keepReading.
        let config = {
                keepReading: null,
                keepReadingRemoteTarget: null,
                keepReadingRemotePath: null,
                keepReadingWordCount: true,
                averageReadingTime: 240, // wpm (words per minute).
                success: () => {},
                error: () => {}
            },

            // Merging objects with same properties in config and user selected options.
            settings = Object.assign({}, config, options);

        // Define the settings as element.
        let element = settings;

        // Calculate numbers of words and readtime.
        let storeCalculation = (option) => {
            keepReadingText = $(option).text();
            wordsCount = keepReadingText.trim().split(/\s+/g).length;
            let readingTime = wordsCount / element.averageReadingTime;
            readingTimeMinutes = Math.round(readingTime);
            console.log(wordsCount);
        };

        // If keepReading is not null then fire function.
        // if (element.keepReading !== null) {
        //
        //     // Loop through each element that is defined
        //     $.each(element.keepReading, (key, val) => {
        //         console.log(val);
        //
        //         let el = val;
        //
        //         storeCalculation(el);
        //
        //         // Display total word count.
        //         if (element.keepReadingWordCount === true) {
        //             let keepReadingTotalWords = $(el).find('.keepreading__words');
        //             $(keepReadingTotalWords).html(wordsCount + ' words');
        //             console.log(wordsCount);
        //         } else {
        //             console.log('Word count display not on!');
        //             element.error.call(this);
        //         }
        //
        //         // Get the descendants of each element in the current set.
        //         let keepReadingTime = $(el).find('.keepreading__time');
        //
        //         // If reading time is greater than 1, show read time.
        //         if (readingTimeMinutes > 1) {
        //
        //             // Add the calculated read time to DOM.
        //             $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
        //
        //         } else {
        //
        //             // Display new message if it's less than a minute.
        //             $(keepReadingTime).html('Read time is less than a minute!');
        //
        //         }
        //
        //     });
        //
        // } else {
        //     console.log('Current blog not active!');
        // }

        if (element.keepReadingRemoteTarget !== null) {

            $.each(element.keepReading, (key, val) => {

                let elements = val;

                // Get remote file.
                $.get(element.keepReadingRemotePath, (response) => {
                    storeRemote(response);
                });

                // Callback on remote data.
                let storeRemote = (remoteText) => {
                    let remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget);
                    console.log(remoteKeepReading);

                    let el = remoteKeepReading;

                    storeCalculation(el);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        let keepReadingTotalWords = $(elements).find('.keepreading__words-remote');
                        $(keepReadingTotalWords).html(wordsCount + ' words');
                    } else {
                        console.log('Word count display not on!');
                    }

                    // Get the descendants of each element in the current set.
                    let keepReadingTime = $('.keepreading').find('.keepreading__time-remote');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                    } else {

                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html('Read time is less than a minute!');

                    }

                };


            });
        }



        // // Get remote file.
        // $.get(element.keepReadingRemotePath, (response) => {
        //     storeRemote(response);
        //     console.log(element.keepReadingRemotePath);
        // });
        //
        // // Callback on remote data.
        // let storeRemote = (remoteText) => {
        //     let remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget).text();
        //     console.log(remoteKeepReading);
        //
        //     // If remote exists then fire async.
        //     if (element.keepReadingRemoteTarget !== null) {
        //         // Loop through each element that has the class '.keepreading'.
        //         $.each(remoteKeepReading, (key, val) => {
        //
        //             let el = val;
        //
        //             // Calculate each text block.
        //             let keepReadingText = $(el).text();
        //             let charsLength = keepReadingText.length;
        //             let wordsCount = keepReadingText.trim().split(/\s+/g).length;
        //             let readingTime = wordsCount / element.averageReadingTime;
        //             let readingTimeMinutes = Math.round(readingTime);
        //
        //             // Display total word count.
        //             if (element.keepReadingWordCount === true) {
        //                 let keepReadingTotalWords = $('.keepreading').find('.keepreading__words-remote');
        //                 $(keepReadingTotalWords).html(wordsCount + ' words');
        //             } else {
        //                 console.log('Word count display not on!');
        //             }
        //
        //             // Get the descendants of each element in the current set.
        //             let keepReadingTime = $('.keepreading').find('.keepreading__time-remote');
        //
        //             // If reading time is greater than 1, show read time.
        //             if (readingTimeMinutes > 1) {
        //
        //                 // Add the calculated read time to DOM.
        //                 $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
        //
        //             } else {
        //
        //                 // Display new message if it's less than a minute.
        //                 $(keepReadingTime).html('Read time is less than a minute!');
        //
        //             }
        //
        //         });
        //
        //     } else {
        //         console.log('Current remote blog not active!');
        //     }
        //
        // };

    };
});
