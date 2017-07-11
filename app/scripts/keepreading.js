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
                    $.get(getRemotePath + '&callback=?', function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU9BOztBQUVBLEVBQUUsWUFBTTs7QUFFSixNQUFFLEVBQUYsQ0FBSyxXQUFMLEdBQW1CLFVBQUMsT0FBRCxFQUFhOztBQUU1QjtBQUNBLFlBQUksd0JBQUo7QUFBQSxZQUNJLDBCQURKO0FBQUEsWUFFSSxhQUFhLEVBRmpCO0FBQUEsWUFHSSwyQkFISjs7QUFLQTtBQUNBLFlBQUksU0FBUztBQUNMLHlCQUFhLElBRFI7QUFFTCxnQ0FBb0IsSUFGZjtBQUdMLCtCQUFtQixJQUhkO0FBSUwsa0NBQXNCLElBSmpCO0FBS0wsOEJBQWtCLElBTGI7QUFNTCxvQ0FBd0IsSUFObkI7QUFPTCxnQ0FBb0IsR0FQZixFQU9vQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBUlo7QUFTTCxtQkFBTyxpQkFBTSxDQUFFO0FBVFYsU0FBYjs7O0FBWUk7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBYmY7O0FBZUE7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTs7QUFFbkI7QUFDQSxnQkFBSSxRQUFRLFdBQVIs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QXlCLEtBQXpCLEdBQWlDLEtBQTlDO0FBQ0EsOEJBQU0sTUFBTixDQUFhLGNBQWMsYUFBZCxHQUE4QixpQkFBM0M7QUFDSCxxQkFwQ0Q7QUFxQ0gsaUJBL0NEO0FBZ0RIO0FBQ0osU0F0R0w7QUFBQSxZQXdHSSxPQUFPLFNBQVAsSUFBTyxHQUFNO0FBQ1Q7QUFDQTtBQUNILFNBM0dMOztBQTZHQTtBQUNILEtBeklEO0FBMElILENBNUlEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBLZWVwUmVhZGluZ1xyXG4gKiBDb3B5cmlnaHQgKGMpIERhbmllbCBNYWxtcm9zXHJcbiAqIDxkYW5pZWxAYnltYWxtcm9zLmRrPlxyXG4gKiBDcmVhdGVkOiBKYW51YXIgMDMsIDIwMTdcclxuICogVXBkYXRlZDogTmFOXHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKi9cclxuXHJcbi8qXHJcbiAgICBUT0RPOlxyXG4gICAgIC0gUmVwbGFjZSBhbGwgc3RhdGljIG1hcmt1cCB0ZXh0IHRvIGJlIGR5bmFtaWMgaW4gb3B0aW9ucyFcclxuICAgICAtIEFkZCBsaXggY2FsY3VsYXRvciB0byBtZWFzdXJlIHJlYWRhYmlsaXR5IGJ5IGluZGljYXRpbmcgdGhlIGRpZmZpY3VsdHkgb2YgcmVhZGluZyB0aGUgdGV4dCFcclxuICAgICAtIE1ha2UgaXQgcG9zc2libGUgdG8gYWRkIGN1c3RvbSBjbGFzcyBuYW1lIG9uIHRoZSBhcHBlbmRlZCByZWFkIG1vcmUgYnRuIVxyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG4kKCgpID0+IHtcclxuXHJcbiAgICAkLmZuLmtlZXBSZWFkaW5nID0gKG9wdGlvbnMpID0+IHtcclxuXHJcbiAgICAgICAgLy8gR2xvYmFsIHNjb3BlZCBvYmplY3RzXHJcbiAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCxcclxuICAgICAgICAgICAgcmVtb3RlS2VlcFJlYWRpbmcsXHJcbiAgICAgICAgICAgIHdvcmRzQ291bnQgPSBbXSxcclxuICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzO1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgY29uZmlnIHNldHRpbmdzIGZvciBrZWVwUmVhZGluZy5cclxuICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1ByZXZpZXc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nV29yZENvdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxlc3NUaGFuQU1pbnV0ZU1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlUmVhZGluZ1RpbWU6IDI0MCwgLy8gd3BtICh3b3JkcyBwZXIgbWludXRlKS5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnaW5nIG9iamVjdHMgd2l0aCBzYW1lIHByb3BlcnRpZXMgaW4gY29uZmlnIGFuZCB1c2VyIHNlbGVjdGVkIG9wdGlvbnMuXHJcbiAgICAgICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzZXR0aW5ncyBhcyBlbGVtZW50LlxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGxldCBtb2R1bGUgPSB7fSxcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBudW1iZXJzIG9mIHdvcmRzIGFuZCByZWFkdGltZS5cclxuICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nVGV4dCA9ICQob3B0aW9uKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gZWxlbWVudC5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZykuZWFjaCgoaSwgZWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3b3JkRWwgPSAkKGVsKS5maW5kKCdwJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24od29yZEVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKGVsKS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdXb3Jkc0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnICcgKyBlbGVtZW50LmtlZXBSZWFkaW5nV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBpcyBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoZWwpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1RpbWVDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbChlbGVtZW50Lmxlc3NUaGFuQU1pbnV0ZU1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBrZWVwUmVhZGluZyBpcyBub3QgbnVsbCB0aGVuIGZpcmUgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lYWNoKChpLCBlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdldFJlbW90ZVBhdGggPSAkKGVsKS5kYXRhKCdmaWxlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5nZXQoZ2V0UmVtb3RlUGF0aCArICcmY2FsbGJhY2s9PycsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHJlbW90ZUtlZXBSZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdGUgaGVhZGluZyBUT0RPOiBSZWZhY3RvciB0aGUgd2F5IGl0J3MgYXBwZW5kZWQgdG8gcHJldmlldyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZW1vdGVIZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoZWxlbWVudC5rZWVwUmVhZGluZ0hlYWRpbmcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlV29yZHNDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgJyArIGVsZW1lbnQua2VlcFJlYWRpbmdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgaXMgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lcShpKS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdUaW1lUmVtb3RlQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoZWxlbWVudC5sZXNzVGhhbkFNaW51dGVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnVsbFJlbW90ZVRleHQgPSByZW1vdGVLZWVwUmVhZGluZy5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSAkKGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sucHJlcGVuZChyZW1vdGVIZWFkaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kKCc8cD4nICsgZnVsbFJlbW90ZVRleHQgKyAnLi4uJyArICc8cD4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZCgnPGEgaHJlZj1cIicgKyBnZXRSZW1vdGVQYXRoICsgJ1wiPlJlYWQgbW9yZTwvYT4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
