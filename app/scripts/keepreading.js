(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

'use strict';

$(function () {

    $.fn.keepReading = function (options) {

        // Global scoped objects
        var keepReadingText = void 0,
            remoteKeepReading = void 0,
            wordsCount = [],
            readingTimeMinutes = void 0;

        // Global config settings for keepReading.
        var config = {
            keepReading: null,
            keepReadingPreview: null,
            keepReadingHeading: null,
            keepReadingRemoteTarget: null,
            keepReadingRemotePath: null,
            keepReadingWordCount: true,
            keepReadingWords: null,
            lessThanAMinuteMessage: null,
            averageReadingTime: 240, // wpm (words per minute).
            success: function success() {},
            error: function error() {}
        },


        // Merging objects with same properties in config and user selected options.
        settings = Object.assign({}, config, options);

        // Define the settings as element.
        var element = settings;

        var module = {},


        // Calculate numbers of words and readtime.
        storeCalculation = function storeCalculation(option) {
            keepReadingText = $(option).text();
            wordsCount = keepReadingText.trim().split(/\s+/g).length;
            var readingTime = wordsCount / element.averageReadingTime;
            readingTimeMinutes = Math.round(readingTime);
        },
            getKeepReading = function getKeepReading() {
            $(element.keepReading).each(function (i, el) {

                var wordEl = $(el).find('p');

                // If keepReading is not null then fire function.
                if (element.keepReading !== null) {

                    storeCalculation(wordEl);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(el).find('.keepreading__words');
                        $(keepReadingTotalWords).html(wordsCount + element.keepReadingWords);
                    } else {
                        console.log('Word count display is not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $(el).find('.keepreading__time');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {

                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html(element.lessThanAMinuteMessage);
                    }
                }
            });
        },
            getKeepReadingRemote = function getKeepReadingRemote() {

            $(element.keepReadingPreview).each(function (i, el) {

                var getRemotePath = $(el).data('file');

                // Get remote file.
                $.get(getRemotePath, function (response) {
                    storeRemote(response);
                });

                // Callback on remote data.
                var storeRemote = function storeRemote(remoteText) {

                    remoteKeepReading = $('<div>').html(remoteText).find('.keepreading p');

                    // Remote heading TODO: Refactor the way it's appended to preview!
                    var remoteHeading = $('<div>').html(remoteText).find('.keepreading h2');

                    storeCalculation(remoteKeepReading);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(el).find('.keepreading__words-remote');
                        $(keepReadingTotalWords).html(wordsCount + element.keepReadingWords);
                    } else {
                        console.log('Word count display is not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $('.keepreading-preview').eq(i).find('.keepreading__time-remote');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {
                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html(element.lessThanAMinuteMessage);
                    }

                    var fullRemoteText = remoteKeepReading.html();
                    var block = $(el);
                    block.prepend(remoteHeading);
                    block.append('<p>' + fullRemoteText + '...' + '<p>');
                    block.append('<a href="' + getRemotePath + '">Read more</a>');
                };
            });
        },
            init = function init() {
            getKeepReading();
            getKeepReadingRemote();
        };

        init();
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU9BOztBQUVBLEVBQUUsWUFBTTs7QUFFSixNQUFFLEVBQUYsQ0FBSyxXQUFMLEdBQW1CLFVBQUMsT0FBRCxFQUFhOztBQUU1QjtBQUNBLFlBQUksd0JBQUo7QUFBQSxZQUNJLDBCQURKO0FBQUEsWUFFSSxhQUFhLEVBRmpCO0FBQUEsWUFHSSwyQkFISjs7QUFLQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxnQ0FBb0IsSUFGZjtBQUdMLGdDQUFvQixJQUhmO0FBSUwscUNBQXlCLElBSnBCO0FBS0wsbUNBQXVCLElBTGxCO0FBTUwsa0NBQXNCLElBTmpCO0FBT0wsOEJBQWtCLElBUGI7QUFRTCxvQ0FBd0IsSUFSbkI7QUFTTCxnQ0FBb0IsR0FUZixFQVNvQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBVlo7QUFXTCxtQkFBTyxpQkFBTSxDQUFFO0FBWFYsU0FBYjs7O0FBY0k7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBZmY7O0FBaUJBO0FBQ0EsWUFBSSxVQUFVLFFBQWQ7O0FBRUEsWUFBSSxTQUFTLEVBQWI7OztBQUVJO0FBQ0EsMkJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLE1BQUQsRUFBWTtBQUMzQiw4QkFBa0IsRUFBRSxNQUFGLEVBQVUsSUFBVixFQUFsQjtBQUNBLHlCQUFhLGdCQUFnQixJQUFoQixHQUF1QixLQUF2QixDQUE2QixNQUE3QixFQUFxQyxNQUFsRDtBQUNBLGdCQUFJLGNBQWMsYUFBYSxRQUFRLGtCQUF2QztBQUNBLGlDQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXJCO0FBQ0gsU0FSTDtBQUFBLFlBVUksaUJBQWlCLFNBQWpCLGNB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SCxhQS9DRDtBQWdESCxTQWpHTDtBQUFBLFlBbUdJLE9BQU8sU0FBUCxJQUFPLEdBQU07QUFDVDtBQUNBO0FBQ0gsU0F0R0w7O0FBd0dBO0FBQ0gsS0F0SUQ7QUF1SUgsQ0F6SUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIENyZWF0ZWQ6IEphbnVhciAwMywgMjAxN1xyXG4gKiBVcGRhdGVkOiBOYU5cclxuICogTUlUIExpY2Vuc2VkXHJcbiAqL1xyXG5cclxuLypcclxuICAgIFRPRE86XHJcbiAgICAgLSBSZXBsYWNlIGFsbCBzdGF0aWMgbWFya3VwIHRleHQgdG8gYmUgZHluYW1pYyBpbiBvcHRpb25zIVxyXG4gICAgIC0gQWRkIGxpeCBjYWxjdWxhdG9yIHRvIG1lYXN1cmUgcmVhZGFiaWxpdHkgYnkgaW5kaWNhdGluZyB0aGUgZGlmZmljdWx0eSBvZiByZWFkaW5nIHRoZSB0ZXh0IVxyXG4gICAgIC0gTWFrZSBpdCBwb3NzaWJsZSB0byBhZGQgY3VzdG9tIGNsYXNzIG5hbWUgb24gdGhlIGFwcGVuZGVkIHJlYWQgbW9yZSBidG4hXHJcbiovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyxcclxuICAgICAgICAgICAgd29yZHNDb3VudCA9IFtdLFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXM7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUHJldmlldzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nSGVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVQYXRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1dvcmRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGVzc1RoYW5BTWludXRlTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VSZWFkaW5nVGltZTogMjQwLCAvLyB3cG0gKHdvcmRzIHBlciBtaW51dGUpLlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge31cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdpbmcgb2JqZWN0cyB3aXRoIHNhbWUgcHJvcGVydGllcyBpbiBjb25maWcgYW5kIHVzZXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgdGhlIHNldHRpbmdzIGFzIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZXR0aW5ncztcclxuXHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IHt9LFxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG51bWJlcnMgb2Ygd29yZHMgYW5kIHJlYWR0aW1lLlxyXG4gICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdUZXh0ID0gJChvcHRpb24pLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmcpLmVhY2goKGksIGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JkRWwgPSAkKGVsKS5maW5kKCdwJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHdvcmRFbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArIGVsZW1lbnQua2VlcFJlYWRpbmdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IGlzIG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX190aW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbChlbGVtZW50Lmxlc3NUaGFuQU1pbnV0ZU1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lYWNoKChpLCBlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2V0UmVtb3RlUGF0aCA9ICQoZWwpLmRhdGEoJ2ZpbGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5nZXQoZ2V0UmVtb3RlUGF0aCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2sgb24gcmVtb3RlIGRhdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoJy5rZWVwcmVhZGluZyBwJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW90ZSBoZWFkaW5nIFRPRE86IFJlZmFjdG9yIHRoZSB3YXkgaXQncyBhcHBlbmRlZCB0byBwcmV2aWV3IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3RlSGVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKCcua2VlcHJlYWRpbmcgaDInKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihyZW1vdGVLZWVwUmVhZGluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyBlbGVtZW50LmtlZXBSZWFkaW5nV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBpcyBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoJy5rZWVwcmVhZGluZy1wcmV2aWV3JykuZXEoaSkuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbChlbGVtZW50Lmxlc3NUaGFuQU1pbnV0ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnVsbFJlbW90ZVRleHQgPSByZW1vdGVLZWVwUmVhZGluZy5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9jayA9ICQoZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnByZXBlbmQocmVtb3RlSGVhZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kKCc8cD4nICsgZnVsbFJlbW90ZVRleHQgKyAnLi4uJyArICc8cD4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kKCc8YSBocmVmPVwiJyArIGdldFJlbW90ZVBhdGggKyAnXCI+UmVhZCBtb3JlPC9hPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
