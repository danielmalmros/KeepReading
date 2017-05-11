$(() => {
    $('article').keepReading({
        keepReading: $('.keepreading'),
        keepReadingPreview: '.keepreading-preview',
        keepReadingHeading: '.keepreading__heading',
        keepReadingRemoteTarget: '.keepreading-remote',
        keepReadingRemotePath: $('.keepreading').data('file'),
        keepReadingWordCount: true,
    });
});
