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
            wordsCount = void 0,
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

        // If keepReading is not null then fire function.
        if (element.keepReading !== null) {

            // Loop through each element that is defined
            $.each(element.keepReading, function (key, val) {

                var el = val;

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
                var keepReadingTime = $(el).find('.keepreading__time');

                // If reading time is greater than 1, show read time.
                if (readingTimeMinutes > 1) {

                    // Add the calculated read time to DOM.
                    $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                } else {

                    // Display new message if it's less than a minute.
                    $(keepReadingTime).html('Read time is less than a minute!');
                }
            });
        } else {
            console.log('Current blog not active!');
        }

        $.each(element.keepReading, function () {

            if (element.keepReadingRemoteTarget !== null) {
                (function () {

                    // Get remote file.
                    $.get(element.keepReadingRemotePath, function (response) {
                        storeRemote(response);
                    });

                    // Callback on remote data.
                    var storeRemote = function storeRemote(remoteText) {
                        var remoteKeepReading = $('<div>').html(remoteText).find(element.keepReadingRemoteTarget).text();

                        // If remote exists then fire async.
                        if (element.keepReadingRemoteTarget !== null) {
                            var el = element.keepReading;

                            // Calculate each text block.
                            var _keepReadingText = $(el).text();
                            var charsLength = _keepReadingText.length;
                            var _wordsCount = _keepReadingText.trim().split(/\s+/g).length;
                            var readingTime = _wordsCount / element.averageReadingTime;
                            var _readingTimeMinutes = Math.round(readingTime);

                            // Display total word count.
                            if (element.keepReadingWordCount === true) {
                                var keepReadingTotalWords = $('.keepreading').find('.keepreading__words-remote');
                                $(keepReadingTotalWords).html(_wordsCount + ' words');
                            } else {
                                console.log('Word count display not on!');
                            }

                            // Get the descendants of each element in the current set.
                            var keepReadingTime = $('.keepreading').find('.keepreading__time-remote');

                            // If reading time is greater than 1, show read time.
                            if (_readingTimeMinutes > 1) {

                                // Add the calculated read time to DOM.
                                $(keepReadingTime).html('Read time ' + _readingTimeMinutes + ' minuts!');
                            } else {

                                // Display new message if it's less than a minute.
                                $(keepReadingTime).html('Read time is less than a minute!');
                            }
                        } else {
                            console.log('Current remote blog not active!');
                        }
                    };
                })();
            }
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSxtQkFESjtBQUFBLFlBRUksMkJBRko7O0FBSUE7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwscUNBQXlCLElBRnBCO0FBR0wsbUNBQXVCLElBSGxCO0FBSUwsa0NBQXNCLElBSmpCO0FBS0wsZ0NBQW9CLEdBTGYsRUFLb0I7QUFDekIscUJBQVMsbUJBQU0sQ0FBRSxDQU5aO0FBT0wsbUJBQU8saUJBQU0sQ0FBRTtBQVBWLFNBQWI7OztBQVVJO0FBQ0EsbUJBQVcsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFsQixFQUEwQixPQUExQixDQVhmOztBQWFBO0FBQ0EsWUFBSSxVQUFVLFFBQWQ7O0FBRUE7QUFDQSxZQUFJLG1CQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxNQUFELEVBQVk7QUFDL0IsOEJBQWtCLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBbEI7QUFDQSx5QkFBYSxnQkFBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsTUFBbEQ7QUFDQSxnQkFBSSxjQUFjLGFBQWEsUUFBUSxrQkFBdkM7QUFDQSxpQ0FBcUIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUFyQjtBQUNILFNBTEQ7O0FBT0E7QUFDQSxZQUFJLFFBQVEsV0FBUixLQUF3QixJQUE1QixFQUFrQzs7QUFFOUI7QUFDQSxjQUFFLElBQUYsQ0FBTyxRQUFRLFdBQWYsRUFBNEIsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjOztBQUV0QyxvQkFBSSxLQUFLLEdBQVQ7O0FBRUEsaUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxLQS9MRDtBQWdNSCxDQWxNRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgc2NvcGVkIG9iamVjdHNcclxuICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICB3b3Jkc0NvdW50LFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZU1pbnV0ZXM7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVQYXRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmdXb3JkQ291bnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlUmVhZGluZ1RpbWU6IDI0MCwgLy8gd3BtICh3b3JkcyBwZXIgbWludXRlKS5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnaW5nIG9iamVjdHMgd2l0aCBzYW1lIHByb3BlcnRpZXMgaW4gY29uZmlnIGFuZCB1c2VyIHNlbGVjdGVkIG9wdGlvbnMuXHJcbiAgICAgICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBzZXR0aW5ncyBhcyBlbGVtZW50LlxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBudW1iZXJzIG9mIHdvcmRzIGFuZCByZWFkdGltZS5cclxuICAgICAgICBsZXQgc3RvcmVDYWxjdWxhdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAga2VlcFJlYWRpbmdUZXh0ID0gJChvcHRpb24pLnRleHQoKTtcclxuICAgICAgICAgICAgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gZWxlbWVudC5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaXMgZGVmaW5lZFxyXG4gICAgICAgICAgICAkLmVhY2goZWxlbWVudC5rZWVwUmVhZGluZywgKGtleSwgdmFsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gdmFsO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24oZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRzQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVycm9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBibG9nIG5vdCBhY3RpdmUhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmVhY2goZWxlbWVudC5rZWVwUmVhZGluZywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgICAgICAgICAkLmdldChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlUGF0aCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2sgb24gcmVtb3RlIGRhdGEuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVtb3RlIGV4aXN0cyB0aGVuIGZpcmUgYXN5bmMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZWxlbWVudC5rZWVwUmVhZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBlYWNoIHRleHQgYmxvY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQgPSAkKGVsKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBlbGVtZW50LmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoJy5rZWVwcmVhZGluZycpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMtcmVtb3RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoJy5rZWVwcmVhZGluZycpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZS1yZW1vdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCByZW1vdGUgYmxvZyBub3QgYWN0aXZlIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgLy8gJC5nZXQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVBhdGgsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBzdG9yZVJlbW90ZShyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVQYXRoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgIC8vIGxldCBzdG9yZVJlbW90ZSA9IChyZW1vdGVUZXh0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQpLnRleHQoKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIElmIHJlbW90ZSBleGlzdHMgdGhlbiBmaXJlIGFzeW5jLlxyXG4gICAgICAgIC8vICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZWxlbWVudCB0aGF0IGhhcyB0aGUgY2xhc3MgJy5rZWVwcmVhZGluZycuXHJcbiAgICAgICAgLy8gICAgICAgICAkLmVhY2gocmVtb3RlS2VlcFJlYWRpbmcsIChrZXksIHZhbCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGVsID0gdmFsO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGVhY2ggdGV4dCBibG9jay5cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJChlbCkudGV4dCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gZWxlbWVudC5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKCcua2VlcHJlYWRpbmcnKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzLXJlbW90ZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgbm90IG9uIScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCByZW1vdGUgYmxvZyBub3QgYWN0aXZlIScpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
