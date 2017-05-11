(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * KeepReading
 * Copyright (c) Daniel Malmros
 * <daniel@bymalmros.dk>
 * Created: Januar 03, 2017
 * Updated: NaN
 * MIT Licensed
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
            averageReadingTime: 240, // wpm (words per minute).
            success: function success() {},
            error: function error() {}
        },


        // Merging objects with same properties in config and user selected options.
        settings = Object.assign({}, config, options);

        // Define the settings as element.
        var element = settings;
        console.log(element.keepReadingHeading);

        var module = {},


        // Calculate numbers of words and readtime.
        storeCalculation = function storeCalculation(option) {
            keepReadingText = $(option).text();
            wordsCount = keepReadingText.trim().split(/\s+/g).length;
            var readingTime = wordsCount / element.averageReadingTime;
            readingTimeMinutes = Math.round(readingTime);
        },
            getKeepReading = function getKeepReading() {
            $(element.keepReading).each(function (i, e) {
                var el = e;

                // If keepReading is not null then fire function.
                if (element.keepReading !== null) {

                    storeCalculation(el);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(el).find('.keepreading__words');
                        $(keepReadingTotalWords).html(wordsCount + ' words');
                        console.log(wordsCount);
                    } else {
                        console.log('Word count display not on!');
                        element.error.call(undefined);
                    }

                    // Get the descendants of each element in the current set.
                    var _keepReadingTime = $(el).find('.keepreading__time');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(_keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {

                        // Display new message if it's less than a minute.
                        $(_keepReadingTime).html('Read time is less than a minute!');
                    }
                } else {
                    // Display new message if it's less than a minute.
                    $(keepReadingTime).html('Read time is less than a minute!');
                }
            });
        },
            getKeepReadingRemote = function getKeepReadingRemote() {

            $(element.keepReadingPreview).each(function (i, e) {
                var el = e;
                console.log(el);

                var getRemotePath = $(el).data('file');

                // Get remote file.
                $.get(getRemotePath, function (response) {
                    storeRemote(response);
                });

                // Callback on remote data.
                var storeRemote = function storeRemote(remoteText) {

                    remoteKeepReading = $('<div>').html(remoteText).find('.keepreading p');

                    // Remote heading TODO: Refactor the way it's appended to preview!
                    var remoteHeading = $('<div>').html(remoteText).find('.keepreading h1');

                    storeCalculation(remoteKeepReading);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(el).find('.keepreading__words-remote');
                        $(keepReadingTotalWords).html(wordsCount + ' words');
                    } else {
                        console.log('Word count display not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $('.keepreading-preview').eq(i).find('.keepreading__time-remote');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {
                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html('Read time is less than a minute!');
                    }

                    var fullRemoteText = remoteKeepReading.html();
                    var block = $(e);
                    block.prepend(remoteHeading);
                    block.append('<p>' + fullRemoteText + '...' + '<p>');
                    block.append('<a href="' + getRemotePath + '">Read more</a>');
                };
            });
        },
            appendPreview = function appendPreview() {},
            getKeepReadingRemoteTime = function getKeepReadingRemoteTime() {
            $(element.keepReadingPreview).each(function (i, e) {

                var el = e;
            });
        },
            getKeepReadingRemoteWords = function getKeepReadingRemoteWords() {},
            init = function init() {
            getKeepReading();
            getKeepReadingRemote();
            getKeepReadingRemoteTime();
            getKeepReadingRemoteWords();
            appendPreview();
        };

        init();
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSwwQkFESjtBQUFBLFlBRUksYUFBYSxFQUZqQjtBQUFBLFlBR0ksMkJBSEo7O0FBS0E7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwsZ0NBQW9CLElBRmY7QUFHTCxnQ0FBb0IsSUFIZjtBQUlMLHFDQUF5QixJQUpwQjtBQUtMLG1DQUF1QixJQUxsQjtBQU1MLGtDQUFzQixJQU5qQjtBQU9MLGdDQUFvQixHQVBmLEVBT29CO0FBQ3pCLHFCQUFTLG1CQUFNLENBQUUsQ0FSWjtBQVNMLG1CQUFPLGlCQUFNLENBQUU7QUFUVixTQUFiOzs7QUFZSTtBQUNBLG1CQUFXLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsQ0FiZjs7QUFlQTtBQUNBLFlBQUksVUFBVSxRQUFkO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLFFBQVEsa0JBQXBCOztBQUVBLFlBQUksU0FBUyxFQUFiOzs7QUFFSTtBQUNBLDJCQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxNQUFELEVBQVk7QUFDM0IsOEJBQWtCLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBbEI7QUFDQSx5QkFBYSxnQkFBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsTUFBbEQ7QUFDQSxnQkFBSSxjQUFjLGFBQWEsUUFBUSxrQkFBdkM7QUFDQSxpQ0FBcUIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUFyQjtBQUNILFNBUkw7QUFBQSxZQVVJLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQ25C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QUFhLFFBQVEsY0FBUixHQUF5QixLQUF6QixHQUFpQyxLQUE5QztBQUNBLDBCQUFNLE1BQU4sQ0FBYSxjQUFhLGFBQWIsR0FBNEIsaUJBQXpDO0FBQ0gsaUJBcENEO0FBcUNILGFBakREO0FBa0RILFNBeEdMO0FBQUEsWUEwR0ksZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQU0sQ0FFckIsQ0E1R0w7QUFBQSxZQThHSSwyQkFBMkIsU0FBM0Isd0JBQTJCLEdBQU07QUFDN0IsY0FBRSxRQUFRLGtCQUFWLEVBQThCLElBQTlCLENBQW1DLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTs7QUFFekMsb0JBQUksS0FBSyxDQUFUO0FBQ0gsYUFIRDtBQUlILFNBbkhMO0FBQUEsWUFxSEksNEJBQTRCLFNBQTVCLHlCQUE0QixHQUFNLENBRWpDLENBdkhMO0FBQUEsWUF5SEksT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTQS9ITDs7QUFpSUE7QUFDSCxLQTlKRDtBQStKSCxDQWpLRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyxcclxuICAgICAgICAgICAgd29yZHNDb3VudCA9IFtdLFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXM7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUHJldmlldzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nSGVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVQYXRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlUmVhZGluZ1RpbWU6IDI0MCwgLy8gd3BtICh3b3JkcyBwZXIgbWludXRlKS5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnaW5nIG9iamVjdHMgd2l0aCBzYW1lIHByb3BlcnRpZXMgaW4gY29uZmlnIGFuZCB1c2VyIHNlbGVjdGVkIG9wdGlvbnMuXHJcbiAgICAgICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzZXR0aW5ncyBhcyBlbGVtZW50LlxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gc2V0dGluZ3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5rZWVwUmVhZGluZ0hlYWRpbmcpO1xyXG5cclxuICAgICAgICBsZXQgbW9kdWxlID0ge30sXHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbnVtYmVycyBvZiB3b3JkcyBhbmQgcmVhZHRpbWUuXHJcbiAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1RleHQgPSAkKG9wdGlvbikudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZykuZWFjaCgoaSwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRzQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVycm9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lYWNoKChpLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZXRSZW1vdGVQYXRoID0gJChlbCkuZGF0YSgnZmlsZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgICAgICAkLmdldChnZXRSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlS2VlcFJlYWRpbmcgPSAkKCc8ZGl2PicpLmh0bWwocmVtb3RlVGV4dCkuZmluZCgnLmtlZXByZWFkaW5nIHAnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3RlIGhlYWRpbmcgVE9ETzogUmVmYWN0b3IgdGhlIHdheSBpdCdzIGFwcGVuZGVkIHRvIHByZXZpZXchXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZW1vdGVIZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoJy5rZWVwcmVhZGluZyBoMScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHJlbW90ZUtlZXBSZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzLXJlbW90ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKCcua2VlcHJlYWRpbmctcHJldmlldycpLmVxKGkpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZS1yZW1vdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmdWxsUmVtb3RlVGV4dCA9IHJlbW90ZUtlZXBSZWFkaW5nLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrID0gJChlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5wcmVwZW5kKHJlbW90ZUhlYWRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZCgnPHA+JyArIGZ1bGxSZW1vdGVUZXh0ICsgJy4uLicgKyAnPHA+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZCgnPGEgaHJlZj1cIicrIGdldFJlbW90ZVBhdGggKydcIj5SZWFkIG1vcmU8L2E+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZFByZXZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGVUaW1lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50LmtlZXBSZWFkaW5nUHJldmlldykuZWFjaCgoaSwgZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSBlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlV29yZHMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSgpO1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGVUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZVdvcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBhcHBlbmRQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
