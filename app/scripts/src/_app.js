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
                averageReadingTime: 240, // wpm (words per minute).
                success: () => {},
                error: () => {}
            },

            // Merging objects with same properties in config and user selected options.
            settings = Object.assign({}, config, options);

        // Define the settings as element.
        let element = settings;
        console.log(element.keepReadingHeading);


        let module = {},

            // Calculate numbers of words and readtime.
            storeCalculation = (option) => {
                keepReadingText = $(option).text();
                wordsCount = keepReadingText.trim().split(/\s+/g).length;
                let readingTime = wordsCount / element.averageReadingTime;
                readingTimeMinutes = Math.round(readingTime);
            },

            getKeepReading = () => {
                $(element.keepReading).each((i, e) => {
                    let el = e;

                    // If keepReading is not null then fire function.
                    if (element.keepReading !== null) {

                        storeCalculation(el);

                        // Display total word count.
                        if (element.keepReadingWordCount === true) {
                            let keepReadingTotalWords = $(el).find('.keepreading__words');
                            $(keepReadingTotalWords).html(wordsCount + ' words');
                            console.log(wordsCount);
                        } else {
                            console.log('Word count display not on!');
                            element.error.call(this);
                        }

                        // Get the descendants of each element in the current set.
                        let keepReadingTime = $(el).find('.keepreading__time');

                        // If reading time is greater than 1, show read time.
                        if (readingTimeMinutes > 1) {

                            // Add the calculated read time to DOM.
                            $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                        } else {

                            // Display new message if it's less than a minute.
                            $(keepReadingTime).html('Read time is less than a minute!');

                        }

                    } else {
                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html('Read time is less than a minute!');
                    }
                })
            },

            getKeepReadingRemote = () => {

                $(element.keepReadingPreview).each((i, e) => {
                    let el = e;
                    console.log(el);

                    let getRemotePath = $(el).data('file')

                    // Get remote file.
                    $.get(getRemotePath, (response) => {
                        storeRemote(response);
                    });

                    // Callback on remote data.
                    let storeRemote = (remoteText) => {

                        remoteKeepReading = $('<div>').html(remoteText).find('.keepreading p')

                        // Remote heading TODO: Refactor the way it's appended to preview!
                        let remoteHeading = $('<div>').html(remoteText).find('.keepreading h1')

                        storeCalculation(remoteKeepReading);

                        // Display total word count.
                        if (element.keepReadingWordCount === true) {
                            let keepReadingTotalWords = $(el).find('.keepreading__words-remote');
                            $(keepReadingTotalWords).html(wordsCount + ' words');
                        } else {
                            console.log('Word count display not on!');
                        }

                        // Get the descendants of each element in the current set.
                        let keepReadingTime = $('.keepreading-preview').eq(i).find('.keepreading__time-remote');

                        // If reading time is greater than 1, show read time.
                        if (readingTimeMinutes > 1) {

                            // Add the calculated read time to DOM.
                            $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');

                        } else {
                            // Display new message if it's less than a minute.
                            $(keepReadingTime).html('Read time is less than a minute!');
                        }

                        let fullRemoteText = remoteKeepReading.html();
                        let block = $(e)
                        block.prepend(remoteHeading)
                        block.append('<p>' + fullRemoteText + '...' + '<p>');
                        block.append('<a href="'+ getRemotePath +'">Read more</a>');
                    }
                })
            },

            appendPreview = () => {

            },

            getKeepReadingRemoteTime = () => {
                $(element.keepReadingPreview).each((i, e) => {

                    let el = e;
                })
            },

            getKeepReadingRemoteWords = () => {

            },

            init = () => {
                getKeepReading();
                getKeepReadingRemote();
                getKeepReadingRemoteTime();
                getKeepReadingRemoteWords();
                appendPreview();
            };

        init();
    };
});
