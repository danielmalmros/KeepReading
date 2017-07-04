$(() => {
    $().keepReading({
        keepReading: '.keepreading',
        keepReadingPreview: '.keepreading-preview',
        keepReadingHeading: '.keepreading__heading',
        keepReadingRemote: '.keepreading p',
        keepReadingWordsClass: '.keepreading__words',
        keepReadingRemoteWordsClass: '.keepreading__words-remote',
        keepReadingWords: 'words',
        keepReadingTimeClass: '.keepreading__time',
        keepReadingTimeRemoteClass: '.keepreading__time-remote',
        lessThanAMinuteMessage: 'Read time is less than a minute!',
        averageReadingTime: 240, // wpm (words per minute).
        keepReadingWordCount: true
    });
});
