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
            wordsCount = [],
            readingTimeMinutes = void 0;

        // Global config settings for keepReading.
        var config = {
            keepReading: null,
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

        // Calculate numbers of words and readtime.
        var storeCalculation = function storeCalculation(option) {
            keepReadingText = $(option).text();
            wordsCount = keepReadingText.trim().split(/\s+/g).length;
            var readingTime = wordsCount / element.averageReadingTime;
            readingTimeMinutes = Math.round(readingTime);
            console.log(wordsCount);
        };

        // If keepReading is not null then fire function.
        // if (element.keepReading !== null) {
        //
        //     // Loop through each element that is defined
        //     $.each(element.keepReading, (key, val) => {
        //         console.log(val);
        //
        //         let el = val;
        //
        //         storeCalculation(el);
        //
        //         // Display total word count.
        //         if (element.keepReadingWordCount === true) {
        //             let keepReadingTotalWords = $(el).find('.keepreading__words');
        //             $(keepReadingTotalWords).html(wordsCount + ' words');
        //             console.log(wordsCount);
        //         } else {
        //             console.log('Word count display not on!');
        //             element.error.call(this);
        //         }
        //
        //         // Get the descendants of each element in the current set.
        //         let keepReadingTime = $(el).find('.keepreading__time');
        //
        //         // If reading time is greater than 1, show read time.
        //         if (readingTimeMinutes > 1) {
        //
        //             // Add the calculated read time to DOM.
        //             $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
        //
        //         } else {
        //
        //             // Display new message if it's less than a minute.
        //             $(keepReadingTime).html('Read time is less than a minute!');
        //
        //         }
        //
        //     });
        //
        // } else {
        //     console.log('Current blog not active!');
        // }

        if (element.keepReadingRemoteTarget !== null) {

            $.each(element.keepReading, function (key, val) {

                var elements = val;

                // Get remote file.
                $.get(element.keepReadingRemotePath, function (response) {
                    storeRemote(response);
                });

                // Callback on remote data.
                var storeRemote = function storeRemote(remoteText) {
                    var remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget);
                    console.log(remoteKeepReading);

                    var el = remoteKeepReading;

                    storeCalculation(el);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(elements).find('.keepreading__words-remote');
                        $(keepReadingTotalWords).html(wordsCount + ' words');
                    } else {
                        console.log('Word count display not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $('.keepreading').find('.keepreading__time-remote');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {

                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html('Read time is less than a minute!');
                    }
                };
            });
        }

        // // Get remote file.
        // $.get(element.keepReadingRemotePath, (response) => {
        //     storeRemote(response);
        //     console.log(element.keepReadingRemotePath);
        // });
        //
        // // Callback on remote data.
        // let storeRemote = (remoteText) => {
        //     let remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget).text();
        //     console.log(remoteKeepReading);
        //
        //     // If remote exists then fire async.
        //     if (element.keepReadingRemoteTarget !== null) {
        //         // Loop through each element that has the class '.keepreading'.
        //         $.each(remoteKeepReading, (key, val) => {
        //
        //             let el = val;
        //
        //             // Calculate each text block.
        //             let keepReadingText = $(el).text();
        //             let charsLength = keepReadingText.length;
        //             let wordsCount = keepReadingText.trim().split(/\s+/g).length;
        //             let readingTime = wordsCount / element.averageReadingTime;
        //             let readingTimeMinutes = Math.round(readingTime);
        //
        //             // Display total word count.
        //             if (element.keepReadingWordCount === true) {
        //                 let keepReadingTotalWords = $('.keepreading').find('.keepreading__words-remote');
        //                 $(keepReadingTotalWords).html(wordsCount + ' words');
        //             } else {
        //                 console.log('Word count display not on!');
        //             }
        //
        //             // Get the descendants of each element in the current set.
        //             let keepReadingTime = $('.keepreading').find('.keepreading__time-remote');
        //
        //             // If reading time is greater than 1, show read time.
        //             if (readingTimeMinutes > 1) {
        //
        //                 // Add the calculated read time to DOM.
        //                 $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
        //
        //             } else {
        //
        //                 // Display new message if it's less than a minute.
        //                 $(keepReadingTime).html('Read time is less than a minute!');
        //
        //             }
        //
        //         });
        //
        //     } else {
        //         console.log('Current remote blog not active!');
        //     }
        //
        // };
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSxhQUFhLEVBRGpCO0FBQUEsWUFFSSwyQkFGSjs7QUFJQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxxQ0FBeUIsSUFGcEI7QUFHTCxtQ0FBdUIsSUFIbEI7QUFJTCxrQ0FBc0IsSUFKakI7QUFLTCxnQ0FBb0IsR0FMZixFQUtvQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBTlo7QUFPTCxtQkFBTyxpQkFBTSxDQUFFO0FBUFYsU0FBYjs7O0FBVUk7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBWGY7O0FBYUE7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQTtBQUNBLFlBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLE1BQUQsRUFBWTtBQUMvQiw4QkFBa0IsRUFBRSxNQUFGLEVBQVUsSUFBVixFQUFsQjtBQUNBLHlCQUFhLGdCQUFnQixJQUFoQixHQUF1QixLQUF2QixDQUE2QixNQUE3QixFQUFxQyxNQUFsRDtBQUNBLGdCQUFJLGNBQWMsYUFBYSxRQUFRLGtCQUF2QztBQUNBLGlDQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXJCO0FBQ0Esb0JBQVEsR0FBUixDQUFZLFVBQVo7QUFDSCxTQU5EOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFJLFFBQVEsdUJBQVIsS0FBb0MsSUFBeEMsRUFBOEM7O0FBRTFDLGNBQUUsSUFBRixDQUFPLFFBQVEsV0FBZixFQUE0QixVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7O0FBRXRDLG9CQUFJLFdBQVcsR0FBZjs7QUFFQTtBQUNBLGtCQUFFLEdBQUYsQ0FBTSxRQUFRLHFCQUFkLEVBQXFDLFVBQUMsUUFBRCxFQUFjO0FBQy9DLGdDQUFZLFFBQVo7QUFDSCxpQkFGRDs7QUFJQTtBQUNBLG9CQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsVUFBRCxFQUFnQjtBQUM5Qix3QkFBSSxvQkFBb0IsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixVQUFoQixFQUE0QixJQUE1QixDQUFpQyxRQUFRLHVCQUF6QyxDQUF4QjtBQUNBLDRCQUFRLEdBQVIsQ0FBWSxpQkFBWjs7QUFFQSx3QkFBSSxLQUFLLGlCQUFUOztBQUVBLHFDQUFpQixFQUFqQjs7QUFFQTtBQUNBLHdCQUFJLFFBQVEsb0JBQVIsS0FBaUMsSUFBckMsRUFBMkM7QUFDdkMsNEJBQUksd0JBQXdCLEVBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsNEJBQWpCLENBQTVCO0FBQ0EsMEJBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsYUFBYSxRQUEzQztBQUNILHFCQUhELE1BR087QUFDSCxnQ0FBUSxHQUFSLENBQVksNEJBQVo7QUFDSDs7QUFFRDtBQUNBLHdCQUFJLGtCQUFrQixFQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsMkJBQXZCLENBQXRCOztBQUVBO0FBQ0Esd0JBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLDBCQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFCQUxELE1BS087O0FBRUg7QUFDQSwwQkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIO0FBRUosaUJBaENEO0FBbUNILGFBN0NEO0FBOENIOztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxLQXpMRDtBQTBMSCxDQTVMRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICB3b3Jkc0NvdW50ID0gW10sXHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcztcclxuXHJcbiAgICAgICAgLy8gR2xvYmFsIGNvbmZpZyBzZXR0aW5ncyBmb3Iga2VlcFJlYWRpbmcuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVBhdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1dvcmRDb3VudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VSZWFkaW5nVGltZTogMjQwLCAvLyB3cG0gKHdvcmRzIHBlciBtaW51dGUpLlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge31cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdpbmcgb2JqZWN0cyB3aXRoIHNhbWUgcHJvcGVydGllcyBpbiBjb25maWcgYW5kIHVzZXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgdGhlIHNldHRpbmdzIGFzIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZXR0aW5ncztcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG51bWJlcnMgb2Ygd29yZHMgYW5kIHJlYWR0aW1lLlxyXG4gICAgICAgIGxldCBzdG9yZUNhbGN1bGF0aW9uID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBrZWVwUmVhZGluZ1RleHQgPSAkKG9wdGlvbikudGV4dCgpO1xyXG4gICAgICAgICAgICB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRzQ291bnQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAvLyBpZiAoZWxlbWVudC5rZWVwUmVhZGluZyAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGVsZW1lbnQgdGhhdCBpcyBkZWZpbmVkXHJcbiAgICAgICAgLy8gICAgICQuZWFjaChlbGVtZW50LmtlZXBSZWFkaW5nLCAoa2V5LCB2YWwpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGxldCBlbCA9IHZhbDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihlbCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRzQ291bnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbGVtZW50LmVycm9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAvLyAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAvLyAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGJsb2cgbm90IGFjdGl2ZSEnKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0ICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goZWxlbWVudC5rZWVwUmVhZGluZywgKGtleSwgdmFsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gdmFsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgICQuZ2V0KGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZVJlbW90ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlbW90ZSA9IChyZW1vdGVUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSByZW1vdGVLZWVwUmVhZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbGVtZW50cykuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAvLyAkLmdldChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlUGF0aCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVBhdGgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy8gQ2FsbGJhY2sgb24gcmVtb3RlIGRhdGEuXHJcbiAgICAgICAgLy8gbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCkudGV4dCgpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZW1vdGVLZWVwUmVhZGluZyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgLy8gSWYgcmVtb3RlIGV4aXN0cyB0aGVuIGZpcmUgYXN5bmMuXHJcbiAgICAgICAgLy8gICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAvLyAgICAgICAgICQuZWFjaChyZW1vdGVLZWVwUmVhZGluZywgKGtleSwgdmFsKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZWwgPSB2YWw7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQgPSAkKGVsKS50ZXh0KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGNoYXJzTGVuZ3RoID0ga2VlcFJlYWRpbmdUZXh0Lmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoJy5rZWVwcmVhZGluZycpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMtcmVtb3RlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnIHdvcmRzJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKCcua2VlcHJlYWRpbmcnKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUtcmVtb3RlJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHJlbW90ZSBibG9nIG5vdCBhY3RpdmUhJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==
