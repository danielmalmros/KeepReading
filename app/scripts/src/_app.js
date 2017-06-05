/*!
 * KeepReading
 * Copyright (c) Daniel Malmros
 * <daniel@bymalmros.dk>
 * Created: Januar 03, 2017
 * Updated: NaN
 * MIT Licensed
 */

/*
    TODO:
     - Replace all static markup text to be dynamic in options!
     - Add lix calculator to measure readability by indicating the difficulty of reading the text!
     - Make it possible to add custom class name on the appended read more btn!
*/

'use strict'

$(() => {

    $.fn.keepReading = (options) => {

        // Global scoped objects
        let keepReadingText,
            remoteKeepReading,
            wordsCount = [],
            readingTimeMinutes;

        // Global config settings for keepReading.
        let config = {
                keepReading: null,
                keepReadingPreview: null,
                keepReadingHeading: null,
                keepReadingRemoteTarget: null,
                keepReadingRemotePath: null,
                keepReadingWordCount: true,
                keepReadingWords: null,
                lessThanAMinuteMessage: null,
                averageReadingTime: 240, // wpm (words per minute).
                success: () => {},
                error: () => {}
            },

            // Merging objects with same properties in config and user selected options.
            settings = Object.assign({}, config, options);

        // Define the settings as element.
        let element = settings;

        let module = {},

            // Calculate numbers of words and readtime.
            storeCalculation = (option) => {
                keepReadingText = $(option).text();
                wordsCount = keepReadingText.trim().split(/\s+/g).length;
                let readingTime = wordsCount / element.averageReadingTime;
                readingTimeMinutes = Math.round(readingTime);
            },

            getKeepReading = () => {
                $(element.keepReading).each((i, el) => {

                    let wordEl = $(el).find('p')

                    // If keepReading is not null then fire function.
                    if (element.keepReading !== null) {

                        storeCalculation(wordEl);

                        // Display total word count.
                        if (element.keepReadingWordCount === true) {
                            let keepReadingTotalWords = $(el).find('.keepreading__words');
                            $(keepReadingTotalWords).html(wordsCount + element.keepReadingWords);
                        } else {
                            console.log('Word count display is not on!');
                        }

                        // Get the descendants of each element in the current set.
                        let keepReadingTime = $(el).find('.keepreading__time');

                        // If reading time is greater than 1, show read time.
                        if (readingTimeMinutes > 1) {

                            // Add the calculated read time to DOM.
                            $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                        } else {

                            // Display new message if it's less than a minute.
                            $(keepReadingTime).html(element.lessThanAMinuteMessage);

                        }
                    }
                })
            },

            getKeepReadingRemote = () => {

                $(element.keepReadingPreview).each((i, el) => {

                    let getRemotePath = $(el).data('file')

                    // Get remote file.
                    $.get(getRemotePath, (response) => {
                        storeRemote(response);
                    });

                    // Callback on remote data.
                    let storeRemote = (remoteText) => {

                        remoteKeepReading = $('<div>').html(remoteText).find('.keepreading p')

                        // Remote heading TODO: Refactor the way it's appended to preview!
                        let remoteHeading = $('<div>').html(remoteText).find('.keepreading h2')

                        storeCalculation(remoteKeepReading);

                        // Display total word count.
                        if (element.keepReadingWordCount === true) {
                            let keepReadingTotalWords = $(el).find('.keepreading__words-remote');
                            $(keepReadingTotalWords).html(wordsCount + element.keepReadingWords);
                        } else {
                            console.log('Word count display is not on!');
                        }

                        // Get the descendants of each element in the current set.
                        let keepReadingTime = $('.keepreading-preview').eq(i).find('.keepreading__time-remote');

                        // If reading time is greater than 1, show read time.
                        if (readingTimeMinutes > 1) {

                            // Add the calculated read time to DOM.
                            $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                        } else {
                            // Display new message if it's less than a minute.
                            $(keepReadingTime).html(element.lessThanAMinuteMessage);
                        }

                        let fullRemoteText = remoteKeepReading.html();
                        let block = $(el)
                        block.prepend(remoteHeading)
                        block.append('<p>' + fullRemoteText + '...' + '<p>');
                        block.append('<a href="' + getRemotePath + '">Read more</a>');
                    }
                })
            },

            init = () => {
                getKeepReading();
                getKeepReadingRemote();
            };

        init();
    };
});
