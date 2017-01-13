$(() => {

    let initKeepReading = () => {
        keepReading();
    };

    let keepReading = () => {

        // Store text block class.
        let keepReading = $('.keepreading');

        // Store the average reading time.
        let averageReadingTime = 200;

        // loop through each element that has the class '.keepreading'.
        $.each(keepReading, function(key, val) {

            // Calculate each text block.
            let keepReadingText = $(this).text();
            let charsLength = keepReadingText.length;
            let wordsCount = keepReadingText.trim().split(/\s+/g).length;
            let readingTime = wordsCount / averageReadingTime;
            let readingTimeMinutes = Math.round(readingTime);

            // Get the descendants of each element in the current set.
            keepReadingTime = $(this).find('.keepreading__time');

            // Add the calculated read time to DOM.
            $(keepReadingTime).html('Read time ' + (readingTimeMinutes) + ' minuts!');

        });
    };

    initKeepReading();

});
