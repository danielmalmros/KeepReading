$(() => {
    $('article').keepReading({
        keepReading: $('.keepreading'),
        keepReadingPreview: '.keepreading-preview',
        keepReadingRemoteTarget: '.keepreading-remote',
        keepReadingRemotePath: $('.keepreading').data('file'),
        keepReadingWordCount: true,
    });
});
