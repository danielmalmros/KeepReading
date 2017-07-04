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
                        var remoteHeading = $('<div>').html(remoteText).find(element.keepReadingHeading);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU9BOztBQUVBLEVBQUUsWUFBTTs7QUFFSixNQUFFLEVBQUYsQ0FBSyxXQUFMLEdBQW1CLFVBQUMsT0FBRCxFQUFhOztBQUU1QjtBQUNBLFlBQUksd0JBQUo7QUFBQSxZQUNJLDBCQURKO0FBQUEsWUFFSSxhQUFhLEVBRmpCO0FBQUEsWUFHSSwyQkFISjs7QUFLQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxnQ0FBb0IsSUFGZjtBQUdMLCtCQUFtQixJQUhkO0FBSUwsa0NBQXNCLElBSmpCO0FBS0wsOEJBQWtCLElBTGI7QUFNTCxvQ0FBd0IsSUFObkI7QUFPTCxnQ0FBb0IsR0FQZixFQU9vQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBUlo7QUFTTCxtQkFBTyxpQkFBTSxDQUFFO0FBVFYsU0FBYjs7O0FBWUk7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBYmY7O0FBZUE7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTs7QUFFbkI7QUFDQSxnQkFBSSxRQUFRLFdBQVIs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QixHQUFpQyxLQUE5QztBQUNBLDhCQUFNLE1BQU4sQ0FBYSxjQUFjLGFBQWQsR0FBOEIsaUJBQTNDO0FBQ0gscUJBcENEO0FBcUNILGlCQS9DRDtBQWdESDtBQUNKLFNBdEdMO0FBQUEsWUF3R0ksT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNUO0FBQ0E7QUFDSCxTQTNHTDs7QUE2R0E7QUFDSCxLQXpJRDtBQTBJSCxDQTVJRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4vKlxyXG4gICAgVE9ETzpcclxuICAgICAtIFJlcGxhY2UgYWxsIHN0YXRpYyBtYXJrdXAgdGV4dCB0byBiZSBkeW5hbWljIGluIG9wdGlvbnMhXHJcbiAgICAgLSBBZGQgbGl4IGNhbGN1bGF0b3IgdG8gbWVhc3VyZSByZWFkYWJpbGl0eSBieSBpbmRpY2F0aW5nIHRoZSBkaWZmaWN1bHR5IG9mIHJlYWRpbmcgdGhlIHRleHQhXHJcbiAgICAgLSBNYWtlIGl0IHBvc3NpYmxlIHRvIGFkZCBjdXN0b20gY2xhc3MgbmFtZSBvbiB0aGUgYXBwZW5kZWQgcmVhZCBtb3JlIGJ0biFcclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgJC5mbi5rZWVwUmVhZGluZyA9IChvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBzY29wZWQgb2JqZWN0c1xyXG4gICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQsXHJcbiAgICAgICAgICAgIHJlbW90ZUtlZXBSZWFkaW5nLFxyXG4gICAgICAgICAgICB3b3Jkc0NvdW50ID0gW10sXHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcztcclxuXHJcbiAgICAgICAgLy8gR2xvYmFsIGNvbmZpZyBzZXR0aW5ncyBmb3Iga2VlcFJlYWRpbmcuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdQcmV2aWV3OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1dvcmRDb3VudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nV29yZHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsZXNzVGhhbkFNaW51dGVNZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXZlcmFnZVJlYWRpbmdUaW1lOiAyNDAsIC8vIHdwbSAod29yZHMgcGVyIG1pbnV0ZSkuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2luZyBvYmplY3RzIHdpdGggc2FtZSBwcm9wZXJ0aWVzIGluIGNvbmZpZyBhbmQgdXNlciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgc2V0dGluZ3MgYXMgZWxlbWVudC5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IHNldHRpbmdzO1xyXG5cclxuICAgICAgICBsZXQgbW9kdWxlID0ge30sXHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbnVtYmVycyBvZiB3b3JkcyBhbmQgcmVhZHRpbWUuXHJcbiAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1RleHQgPSAkKG9wdGlvbikudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBrZWVwUmVhZGluZyBpcyBub3QgbnVsbCB0aGVuIGZpcmUgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmcpLmVhY2goKGksIGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd29yZEVsID0gJChlbCkuZmluZCgncCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHdvcmRFbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nV29yZHNDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyAnICsgZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgaXMgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsKS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdUaW1lQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoZWxlbWVudC5sZXNzVGhhbkFNaW51dGVNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50LmtlZXBSZWFkaW5nUHJldmlldykuZWFjaCgoaSwgZWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZXRSZW1vdGVQYXRoID0gJChlbCkuZGF0YSgnZmlsZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZ2V0KGdldFJlbW90ZVBhdGgsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHJlbW90ZUtlZXBSZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdGUgaGVhZGluZyBUT0RPOiBSZWZhY3RvciB0aGUgd2F5IGl0J3MgYXBwZW5kZWQgdG8gcHJldmlldyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZW1vdGVIZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ0hlYWRpbmcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlV29yZHNDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgJyArIGVsZW1lbnQua2VlcFJlYWRpbmdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgaXMgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lcShpKS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdUaW1lUmVtb3RlQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoZWxlbWVudC5sZXNzVGhhbkFNaW51dGVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnVsbFJlbW90ZVRleHQgPSByZW1vdGVLZWVwUmVhZGluZy5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSAkKGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sucHJlcGVuZChyZW1vdGVIZWFkaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kKCc8cD4nICsgZnVsbFJlbW90ZVRleHQgKyAnLi4uJyArICc8cD4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZCgnPGEgaHJlZj1cIicgKyBnZXRSZW1vdGVQYXRoICsgJ1wiPlJlYWQgbW9yZTwvYT4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
