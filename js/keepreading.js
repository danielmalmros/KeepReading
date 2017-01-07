$(() => {
    let initKeepReading = () => {
        keepReading();
    };

    let keepReading = () => {
        let text = $('.keepreading').text();
        let charsLength = text.length;
        let wordsCount = text.trim().split(/\s+/g).length;

        let readingTime = wordsCount / 200;

        let readingTimeMinutes  = Math.round(readingTime)

        console.log(readingTimeMinutes);

        $('.keepreading__time').html('Read time ' + readingTimeMinutes + ' minuts!')
    };

    initKeepReading();
});
