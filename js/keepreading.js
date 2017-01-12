$(() => {

    let initKeepReading = () => {
        keepReading();
    };

    let keepReading = () => {

        let keepReading = $('.keepreading');

        $.each(keepReading, function(key, val) {

            let text = $(this).text();
            keepReadingTime = $(this).find('.keepreading__time');
            let charsLength = text.length;
            let wordsCount = text.trim().split(/\s+/g).length;
            let readingTime = wordsCount / 200;
            let readingTimeMinutes = Math.round(readingTime);

            $(keepReadingTime).html('Read time ' + (readingTimeMinutes) + ' minuts!');

        });

    };

    initKeepReading();
});
