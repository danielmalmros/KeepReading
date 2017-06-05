$(() => {
    $('article').keepReading({
        keepReading: $('.keepreading'),
        keepReadingPreview: '.keepreading-preview',
        keepReadingHeading: '.keepreading__heading',
        keepReadingRemoteTarget: '.keepreading-remote p',
        keepReadingRemotePath: $('.keepreading').data('file'),
        keepReadingWords: ' words',
        lessThanAMinuteMessage: 'Read time is less than a minute!',
        averageReadingTime: 240, // wpm (words per minute).
        keepReadingWordCount: true
    });
});
