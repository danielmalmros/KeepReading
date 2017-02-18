$(() => {
    $('article').keepReading({
        keepReading: $('.keepreading'),
        keepReadingRemoteTarget: '.keepreading-remote',
        keepReadingRemotePath: $('.keepreading').data('file'),
        keepReadingWordCount: true,
    });
});
