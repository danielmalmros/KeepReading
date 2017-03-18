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
        };

        // Loop through each element that is defined
        $.each(element.keepReading, function (key, val) {

            var el = val;
            console.log(val);

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

            if (element.keepReadingRemoteTarget !== null) {

                // Get remote file.
                $.get(element.keepReadingRemotePath, function (response) {
                    storeRemote(response);
                });

                // Callback on remote data.
                var storeRemote = function storeRemote(remoteText) {
                    var remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget);
                    console.log(remoteKeepReading);

                    var newEl = remoteKeepReading;

                    storeCalculation(newEl);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var _keepReadingTotalWords = $(el).find('.keepreading__words-remote');
                        $(_keepReadingTotalWords).html(wordsCount + ' words');
                    } else {
                        console.log('Word count display not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $('.keepreading').find('.keepreading__time-remote');

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {}
                };
            }
        });
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSxhQUFhLEVBRGpCO0FBQUEsWUFFSSwyQkFGSjs7QUFJQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxxQ0FBeUIsSUFGcEI7QUFHTCxtQ0FBdUIsSUFIbEI7QUFJTCxrQ0FBc0IsSUFKakI7QUFLTCxnQ0FBb0IsR0FMZixFQUtvQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBTlo7QUFPTCxtQkFBTyxpQkFBTSxDQUFFO0FBUFYsU0FBYjs7O0FBVUk7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBWGY7O0FBYUE7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQTtBQUNBLFlBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLE1BQUQsRUFBWTtBQUMvQiw4QkFBa0IsRUFBRSxNQUFGLEVBQVUsSUFBVixFQUFsQjtBQUNBLHlCQUFhLGdCQUFnQixJQUFoQixHQUF1QixLQUF2QixDQUE2QixNQUE3QixFQUFxQyxNQUFsRDtBQUNBLGdCQUFJLGNBQWMsYUFBYSxRQUFRLGtCQUF2QztBQUNBLGlDQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXJCO0FBQ0gsU0FMRDs7QUFPQTtBQUNBLFVBQUUsSUFBRixDQUFPLFFBQVEsV0FBZixFQUE0QixVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7O0FBRXRDLGdCQUFJLEtBQUssR0FBVDtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxHQUFaOztBQUVBO0FBQ0EsZ0JBQUksUUFBUSxXQUFSLEtBQXdCLElBQTVCLEVBQWtDOztBQUU5QixpQ0FBaUIsRUFBakI7O0FBRUE7QUFDQSxvQkFBSSxRQUFRLG9CQUFSLEtBQWlDLElBQXJDLEVBQTJDO0FBQ3ZDLHdCQUFJLHdCQUF3QixFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcscUJBQVgsQ0FBNUI7QUFDQSxzQkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixhQUFhLFFBQTNDO0FBQ0EsNEJBQVEsR0FBUixDQUFZLFVBQVo7QUFDSCxpQkFKRCxNQUlPO0FBQ0gsNEJBQVEsR0FBUixDQUFZLDRCQUFaO0FBQ0EsNEJBQVEsS0FBUixDQUFjLElBQWQ7QUFDSDs7QUFFRDtBQUNBLG9CQUFJLG1CQUFrQixFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcsb0JBQVgsQ0FBdEI7O0FBRUE7QUFDQSxvQkFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0Esc0JBQUUsZ0JBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILGlCQUxELE1BS087O0FBRUg7QUFDQSxzQkFBRSxnQkFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFFSDtBQUVKLGFBOUJELE1BOEJPO0FBQ0g7QUFDQSxrQkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUNIOztBQUVELGdCQUFJLFFBQVEsdUJBQVIsS0FBb0MsSUFBeEMsRUFBOEM7O0FBRTFDO0FBQ0Esa0JBQUUsR0FBRixDQUFNLFFBQVEscUJBQWQsRUFBcUMsVUFBQyxRQUFELEVBQWM7QUFDL0MsZ0NBQVksUUFBWjtBQUNILGlCQUZEOztBQUlBO0FBQ0Esb0JBQUksY0FBYyxTQUFkLFdBQWMsQ0FBQyxVQUFELEVBQWdCO0FBQzlCLHdCQUFJLG9CQUFvQixFQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCLElBQTVCLENBQWlDLFFBQVEsdUJBQXpDLENBQXhCO0FBQ0EsNEJBQVEsR0FBUixDQUFZLGlCQUFaOztBQUVBLHdCQUFJLFFBQVEsaUJBQVo7O0FBRUEscUNBQWlCLEtBQWpCOztBQUVBO0FBQ0Esd0JBQUksUUFBUSxvQkFBUixLQUFpQyxJQUFyQyxFQUEyQztBQUN2Qyw0QkFBSSx5QkFBd0IsRUFBRSxFQUFGLEVBQU0sSUFBTixDQUFXLDRCQUFYLENBQTVCO0FBQ0EsMEJBQUUsc0JBQUYsRUFBeUIsSUFBekIsQ0FBOEIsYUFBYSxRQUEzQztBQUNILHFCQUhELE1BR087QUFDSCxnQ0FBUSxHQUFSLENBQVksNEJBQVo7QUFDSDs7QUFFRDtBQUNBLHdCQUFJLGtCQUFrQixFQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsMkJBQXZCLENBQXRCOztBQUVBO0FBQ0Esd0JBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLDBCQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFCQUxELE1BS08sQ0FFTjtBQUNKLGlCQTVCRDtBQThCSDtBQUNKLFNBaEZEO0FBaUZILEtBbEhEO0FBbUhILENBckhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBLZWVwUmVhZGluZ1xyXG4gKiBDb3B5cmlnaHQgKGMpIERhbmllbCBNYWxtcm9zXHJcbiAqIDxkYW5pZWxAYnltYWxtcm9zLmRrPlxyXG4gKiBDcmVhdGVkOiBKYW51YXIgMDMsIDIwMTdcclxuICogVXBkYXRlZDogTmFOXHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgJC5mbi5rZWVwUmVhZGluZyA9IChvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBzY29wZWQgb2JqZWN0c1xyXG4gICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQsXHJcbiAgICAgICAgICAgIHdvcmRzQ291bnQgPSBbXSxcclxuICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzO1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgY29uZmlnIHNldHRpbmdzIGZvciBrZWVwUmVhZGluZy5cclxuICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlUGF0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nV29yZENvdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXZlcmFnZVJlYWRpbmdUaW1lOiAyNDAsIC8vIHdwbSAod29yZHMgcGVyIG1pbnV0ZSkuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2luZyBvYmplY3RzIHdpdGggc2FtZSBwcm9wZXJ0aWVzIGluIGNvbmZpZyBhbmQgdXNlciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgc2V0dGluZ3MgYXMgZWxlbWVudC5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IHNldHRpbmdzO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgbnVtYmVycyBvZiB3b3JkcyBhbmQgcmVhZHRpbWUuXHJcbiAgICAgICAgbGV0IHN0b3JlQ2FsY3VsYXRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGtlZXBSZWFkaW5nVGV4dCA9ICQob3B0aW9uKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaXMgZGVmaW5lZFxyXG4gICAgICAgICQuZWFjaChlbGVtZW50LmtlZXBSZWFkaW5nLCAoa2V5LCB2YWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbCA9IHZhbDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmcgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3b3Jkc0NvdW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lcnJvci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgICQuZ2V0KGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZVJlbW90ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlbW90ZSA9IChyZW1vdGVUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RWwgPSByZW1vdGVLZWVwUmVhZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihuZXdFbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
