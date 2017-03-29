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
                    remoteKeepReading = $('<div>').html(remoteText).find('.keepreading');

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
                };
            });
        },
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
        };

        init();
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSwwQkFESjtBQUFBLFlBRUksYUFBYSxFQUZqQjtBQUFBLFlBR0ksMkJBSEo7O0FBS0E7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwsZ0NBQW9CLElBRmY7QUFHTCxxQ0FBeUIsSUFIcEI7QUFJTCxtQ0FBdUIsSUFKbEI7QUFLTCxrQ0FBc0IsSUFMakI7QUFNTCxnQ0FBb0IsR0FOZixFQU1vQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBUFo7QUFRTCxtQkFBTyxpQkFBTSxDQUFFO0FBUlYsU0FBYjs7O0FBV0k7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBWmY7O0FBY0E7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUNuQixjQUFFLFFBQVEsV0FBVixFQUF1QixJQUF2QixDQUE0QixVQUFDLENBQUQsRUFBSSxD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QUFPLEdBQU07QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNILFNBbEhMOztBQW9IQTtBQUNILEtBL0lEO0FBZ0pILENBbEpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBLZWVwUmVhZGluZ1xyXG4gKiBDb3B5cmlnaHQgKGMpIERhbmllbCBNYWxtcm9zXHJcbiAqIDxkYW5pZWxAYnltYWxtcm9zLmRrPlxyXG4gKiBDcmVhdGVkOiBKYW51YXIgMDMsIDIwMTdcclxuICogVXBkYXRlZDogTmFOXHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgJC5mbi5rZWVwUmVhZGluZyA9IChvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBzY29wZWQgb2JqZWN0c1xyXG4gICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQsXHJcbiAgICAgICAgICAgIHJlbW90ZUtlZXBSZWFkaW5nLFxyXG4gICAgICAgICAgICB3b3Jkc0NvdW50ID0gW10sXHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcztcclxuXHJcbiAgICAgICAgLy8gR2xvYmFsIGNvbmZpZyBzZXR0aW5ncyBmb3Iga2VlcFJlYWRpbmcuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdQcmV2aWV3OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVBhdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1dvcmRDb3VudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VSZWFkaW5nVGltZTogMjQwLCAvLyB3cG0gKHdvcmRzIHBlciBtaW51dGUpLlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge31cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdpbmcgb2JqZWN0cyB3aXRoIHNhbWUgcHJvcGVydGllcyBpbiBjb25maWcgYW5kIHVzZXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgdGhlIHNldHRpbmdzIGFzIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZXR0aW5ncztcclxuXHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IHt9LFxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG51bWJlcnMgb2Ygd29yZHMgYW5kIHJlYWR0aW1lLlxyXG4gICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdUZXh0ID0gJChvcHRpb24pLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmcpLmVhY2goKGksIGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSBlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBrZWVwUmVhZGluZyBpcyBub3QgbnVsbCB0aGVuIGZpcmUgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmcgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24oZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnIHdvcmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3b3Jkc0NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lcnJvci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50LmtlZXBSZWFkaW5nUHJldmlldykuZWFjaCgoaSwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2V0UmVtb3RlUGF0aCA9ICQoZWwpLmRhdGEoJ2ZpbGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5nZXQoZ2V0UmVtb3RlUGF0aCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2sgb24gcmVtb3RlIGRhdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlS2VlcFJlYWRpbmcgPSAkKCc8ZGl2PicpLmh0bWwocmVtb3RlVGV4dCkuZmluZCgnLmtlZXByZWFkaW5nJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24ocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMtcmVtb3RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoJy5rZWVwcmVhZGluZy1wcmV2aWV3JykuZXEoaSkuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZVRpbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lYWNoKChpLCBlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcblxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGVXb3JkcyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZVRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlV29yZHMoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==
