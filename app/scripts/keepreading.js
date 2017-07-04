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
            keepReadingRemote: null,
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

            // If keepReading is not null then fire function.
            if (element.keepReading !== null) {

                $(element.keepReading).each(function (i, el) {

                    var wordEl = $(el).find('p');

                    storeCalculation(wordEl);

                    // Display total word count.
                    if (element.keepReadingWordCount === true) {
                        var keepReadingTotalWords = $(el).find(element.keepReadingWordsClass);
                        $(keepReadingTotalWords).html(wordsCount + ' ' + element.keepReadingWords);
                    } else {
                        console.log('Word count display is not on!');
                    }

                    // Get the descendants of each element in the current set.
                    var keepReadingTime = $(el).find(element.keepReadingTimeClass);

                    // If reading time is greater than 1, show read time.
                    if (readingTimeMinutes > 1) {

                        // Add the calculated read time to DOM.
                        $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                    } else {

                        // Display new message if it's less than a minute.
                        $(keepReadingTime).html(element.lessThanAMinuteMessage);
                    }
                });
            }
        },
            getKeepReadingRemote = function getKeepReadingRemote() {

            // If keepReading is not null then fire function.
            if (element.keepReadingRemote !== null) {

                $(element.keepReadingPreview).each(function (i, el) {

                    var getRemotePath = $(el).data('file');

                    // Get remote file.
                    $.get(getRemotePath, function (response) {
                        storeRemote(response);
                    });

                    // Callback on remote data.
                    var storeRemote = function storeRemote(remoteText) {

                        remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemote);

                        storeCalculation(remoteKeepReading);

                        // Remote heading TODO: Refactor the way it's appended to preview!
                        var remoteHeading = $('<div>').html(remoteText).find('.keepreading h2');

                        // Display total word count.
                        if (element.keepReadingWordCount === true) {
                            var keepReadingTotalWords = $(el).find(element.keepReadingRemoteWordsClass);
                            $(keepReadingTotalWords).html(wordsCount + ' ' + element.keepReadingWords);
                        } else {
                            console.log('Word count display is not on!');
                        }

                        // Get the descendants of each element in the current set.
                        var keepReadingTime = $(element.keepReadingPreview).eq(i).find(element.keepReadingTimeRemoteClass);

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
            }
        },
            init = function init() {
            getKeepReading();
            getKeepReadingRemote();
        };

        init();
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU9BOztBQUVBLEVBQUUsWUFBTTs7QUFFSixNQUFFLEVBQUYsQ0FBSyxXQUFMLEdBQW1CLFVBQUMsT0FBRCxFQUFhOztBQUU1QjtBQUNBLFlBQUksd0JBQUo7QUFBQSxZQUNJLDBCQURKO0FBQUEsWUFFSSxhQUFhLEVBRmpCO0FBQUEsWUFHSSwyQkFISjs7QUFLQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxnQ0FBb0IsSUFGZjtBQUdMLGdDQUFvQixJQUhmO0FBSUwsK0JBQW1CLElBSmQ7QUFLTCxrQ0FBc0IsSUFMakI7QUFNTCw4QkFBa0IsSUFOYjtBQU9MLG9DQUF3QixJQVBuQjtBQVFMLGdDQUFvQixHQVJmLEVBUW9CO0FBQ3pCLHFCQUFTLG1CQUFNLENBQUUsQ0FUWjtBQVVMLG1CQUFPLGlCQUFNLENBQUU7QUFWVixTQUFiOzs7QUFhSTtBQUNBLG1CQUFXLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsQ0FkZjs7QUFnQkE7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTs7QUFFbkI7QUFD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QVIsR0FBeUIsS0FBekIsR0FBaUMsS0FBOUM7QUFDQSw4QkFBTSxNQUFOLENBQWEsY0FBYyxhQUFkLEdBQThCLGlCQUEzQztBQUNILHFCQXBDRDtBQXFDSCxpQkEvQ0Q7QUFnREg7QUFDSixTQXRHTDtBQUFBLFlBd0dJLE9BQU8sU0FBUCxJQUFPLEdBQU07QUFDVDtBQUNBO0FBQ0gsU0EzR0w7O0FBNkdBO0FBQ0gsS0ExSUQ7QUEySUgsQ0E3SUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIENyZWF0ZWQ6IEphbnVhciAwMywgMjAxN1xyXG4gKiBVcGRhdGVkOiBOYU5cclxuICogTUlUIExpY2Vuc2VkXHJcbiAqL1xyXG5cclxuLypcclxuICAgIFRPRE86XHJcbiAgICAgLSBSZXBsYWNlIGFsbCBzdGF0aWMgbWFya3VwIHRleHQgdG8gYmUgZHluYW1pYyBpbiBvcHRpb25zIVxyXG4gICAgIC0gQWRkIGxpeCBjYWxjdWxhdG9yIHRvIG1lYXN1cmUgcmVhZGFiaWxpdHkgYnkgaW5kaWNhdGluZyB0aGUgZGlmZmljdWx0eSBvZiByZWFkaW5nIHRoZSB0ZXh0IVxyXG4gICAgIC0gTWFrZSBpdCBwb3NzaWJsZSB0byBhZGQgY3VzdG9tIGNsYXNzIG5hbWUgb24gdGhlIGFwcGVuZGVkIHJlYWQgbW9yZSBidG4hXHJcbiovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyxcclxuICAgICAgICAgICAgd29yZHNDb3VudCA9IFtdLFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXM7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUHJldmlldzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nSGVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1dvcmRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGVzc1RoYW5BTWludXRlTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VSZWFkaW5nVGltZTogMjQwLCAvLyB3cG0gKHdvcmRzIHBlciBtaW51dGUpLlxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge31cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdpbmcgb2JqZWN0cyB3aXRoIHNhbWUgcHJvcGVydGllcyBpbiBjb25maWcgYW5kIHVzZXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgICAgICAgICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgdGhlIHNldHRpbmdzIGFzIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZXR0aW5ncztcclxuXHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IHt9LFxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG51bWJlcnMgb2Ygd29yZHMgYW5kIHJlYWR0aW1lLlxyXG4gICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdUZXh0ID0gJChvcHRpb24pLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmcgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50LmtlZXBSZWFkaW5nKS5lYWNoKChpLCBlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdvcmRFbCA9ICQoZWwpLmZpbmQoJ3AnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbih3b3JkRWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRzQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgJyArIGVsZW1lbnQua2VlcFJlYWRpbmdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IGlzIG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJChlbCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nVGltZUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKGVsZW1lbnQubGVzc1RoYW5BTWludXRlTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZ1ByZXZpZXcpLmVhY2goKGksIGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2V0UmVtb3RlUGF0aCA9ICQoZWwpLmRhdGEoJ2ZpbGUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHJlbW90ZSBmaWxlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmdldChnZXRSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihyZW1vdGVLZWVwUmVhZGluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3RlIGhlYWRpbmcgVE9ETzogUmVmYWN0b3IgdGhlIHdheSBpdCdzIGFwcGVuZGVkIHRvIHByZXZpZXchXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3RlSGVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKCcua2VlcHJlYWRpbmcgaDInKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVdvcmRzQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnICcgKyBlbGVtZW50LmtlZXBSZWFkaW5nV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IGlzIG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJChlbGVtZW50LmtlZXBSZWFkaW5nUHJldmlldykuZXEoaSkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nVGltZVJlbW90ZUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKGVsZW1lbnQubGVzc1RoYW5BTWludXRlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ1bGxSZW1vdGVUZXh0ID0gcmVtb3RlS2VlcFJlYWRpbmcuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrID0gJChlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnByZXBlbmQocmVtb3RlSGVhZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZCgnPHA+JyArIGZ1bGxSZW1vdGVUZXh0ICsgJy4uLicgKyAnPHA+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay5hcHBlbmQoJzxhIGhyZWY9XCInICsgZ2V0UmVtb3RlUGF0aCArICdcIj5SZWFkIG1vcmU8L2E+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9O1xyXG59KTtcclxuIl19
