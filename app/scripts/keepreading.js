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

                    // let fullRemoteText = remoteKeepReading.text(),
                    //     previewText = fullRemoteText.substr(0, 800);

                    var fullRemoteText = remoteKeepReading.html();
                    var block = $(e).find('a');
                    block.before('<p>' + fullRemoteText + '...' + '<p>');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSwwQkFESjtBQUFBLFlBRUksYUFBYSxFQUZqQjtBQUFBLFlBR0ksMkJBSEo7O0FBS0E7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwsZ0NBQW9CLElBRmY7QUFHTCxxQ0FBeUIsSUFIcEI7QUFJTCxtQ0FBdUIsSUFKbEI7QUFLTCxrQ0FBc0IsSUFMakI7QUFNTCxnQ0FBb0IsR0FOZixFQU1vQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBUFo7QUFRTCxtQkFBTyxpQkFBTSxDQUFFO0FBUlYsU0FBYjs7O0FBV0k7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBWmY7O0FBY0E7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUNuQixjQUFFLFFBQVEsV0FBVixFQUF1QixJQUF2QixDQUE0QixVQUFDLENBQUQsRUFBSSxD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QkFBMkIsU0FBM0Isd0JBQTJCLEdBQU07QUFDN0IsY0FBRSxRQUFRLGtCQUFWLEVBQThCLElBQTlCLENBQW1DLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTs7QUFFekMsb0JBQUksS0FBSyxDQUFUO0FBQ0gsYUFIRDtBQUlILFNBakhMO0FBQUEsWUFtSEksNEJBQTRCLFNBQTVCLHlCQUE0QixHQUFNLENBRWpDLENBckhMO0FBQUEsWUF1SEksT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTQTdITDs7QUErSEE7QUFDSCxLQTFKRDtBQTJKSCxDQTdKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyxcclxuICAgICAgICAgICAgd29yZHNDb3VudCA9IFtdLFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXM7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUHJldmlldzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVQYXRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlUmVhZGluZ1RpbWU6IDI0MCwgLy8gd3BtICh3b3JkcyBwZXIgbWludXRlKS5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnaW5nIG9iamVjdHMgd2l0aCBzYW1lIHByb3BlcnRpZXMgaW4gY29uZmlnIGFuZCB1c2VyIHNlbGVjdGVkIG9wdGlvbnMuXHJcbiAgICAgICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzZXR0aW5ncyBhcyBlbGVtZW50LlxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGxldCBtb2R1bGUgPSB7fSxcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBudW1iZXJzIG9mIHdvcmRzIGFuZCByZWFkdGltZS5cclxuICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nVGV4dCA9ICQob3B0aW9uKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gZWxlbWVudC5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50LmtlZXBSZWFkaW5nKS5lYWNoKChpLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cod29yZHNDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZXJyb3IuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX190aW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZ1ByZXZpZXcpLmVhY2goKGksIGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdldFJlbW90ZVBhdGggPSAkKGVsKS5kYXRhKCdmaWxlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHJlbW90ZSBmaWxlLlxyXG4gICAgICAgICAgICAgICAgICAgICQuZ2V0KGdldFJlbW90ZVBhdGgsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVJlbW90ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlbW90ZSA9IChyZW1vdGVUZXh0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKCcua2VlcHJlYWRpbmcnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihyZW1vdGVLZWVwUmVhZGluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnIHdvcmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCgnLmtlZXByZWFkaW5nLXByZXZpZXcnKS5lcShpKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUtcmVtb3RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZnVsbFJlbW90ZVRleHQgPSByZW1vdGVLZWVwUmVhZGluZy50ZXh0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcmV2aWV3VGV4dCA9IGZ1bGxSZW1vdGVUZXh0LnN1YnN0cigwLCA4MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ1bGxSZW1vdGVUZXh0ID0gcmVtb3RlS2VlcFJlYWRpbmcuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSAkKGUpLmZpbmQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYmVmb3JlKCc8cD4nICsgZnVsbFJlbW90ZVRleHQgKyAnLi4uJyArICc8cD4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRQcmV2aWV3ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlVGltZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZ1ByZXZpZXcpLmVhY2goKGksIGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZVdvcmRzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZygpO1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGUoKTtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGVXb3JkcygpO1xyXG4gICAgICAgICAgICAgICAgYXBwZW5kUHJldmlldygpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9O1xyXG59KTtcclxuIl19
