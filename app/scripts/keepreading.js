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

        console.log(element.keepReadingRemotePath);

        // If keepReading is not null then fire function.
        if (element.keepReading !== null) {

            // Loop through each element that is defined
            $.each(element.keepReading, function (key, val) {

                var el = val;

                // Calculate each text block.
                var keepReadingText = $(el).text();
                var charsLength = keepReadingText.length;
                var wordsCount = keepReadingText.trim().split(/\s+/g).length;
                var readingTime = wordsCount / element.averageReadingTime;
                var readingTimeMinutes = Math.round(readingTime);

                // Display total word count.
                if (element.keepReadingWordCount === true) {
                    var keepReadingTotalWords = $(el).find('.keepreading__words');
                    $(keepReadingTotalWords).html(wordsCount + ' words');
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
                            var keepReadingText = $(el).text();
                            var charsLength = keepReadingText.length;
                            var wordsCount = keepReadingText.trim().split(/\s+/g).length;
                            var readingTime = wordsCount / element.averageReadingTime;
                            var readingTimeMinutes = Math.round(readingTime);

                            // Display total word count.
                            if (element.keepReadingWordCount === true) {
                                var keepReadingTotalWords = $('.keepreading').find('.keepreading__words-remote');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwscUNBQXlCLElBRnBCO0FBR0wsbUNBQXVCLElBSGxCO0FBSUwsa0NBQXNCLElBSmpCO0FBS0wsZ0NBQW9CLEdBTGYsRUFLb0I7QUFDekIscUJBQVMsbUJBQU0sQ0FBRSxDQU5aO0FBT0wsbUJBQU8saUJBQU0sQ0FBRTtBQVBWLFNBQWI7OztBQVVJO0FBQ0EsbUJBQVcsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFsQixFQUEwQixPQUExQixDQVhmOztBQWFBO0FBQ0EsWUFBSSxVQUFVLFFBQWQ7O0FBRUEsZ0JBQVEsR0FBUixDQUFZLFFBQVEscUJBQXBCOztBQUVBO0FBQ0EsWUFBSSxRQUFRLFdBQVIsS0FBd0IsSUFBNUIsRUFBa0M7O0FBRTlCO0FBQ0EsY0FBRSxJQUFGLENBQU8sUUFBUSxXQUFmLEVBQTRCLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYzs7QUFFdEMsb0JBQUksS0FBSyxHQUFUOztBQUVBO0FBQ0Esb0JBQUksa0JBQWtCLEVBQUUsRUFBRixFQUFNLElBQU4sRUFBdEI7QUFDQSxvQkFBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLG9CQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0Esb0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0Esb0JBQUkscUJBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBekI7O0FBRUE7QUFDQSxvQkFBSSxRQUFRLG9CQUFSLEtBQWlDLElBQXJD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxLQXpMRDtBQTBMSCxDQTVMRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgICQuZm4ua2VlcFJlYWRpbmcgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgY29uZmlnIHNldHRpbmdzIGZvciBrZWVwUmVhZGluZy5cclxuICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlUGF0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nV29yZENvdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXZlcmFnZVJlYWRpbmdUaW1lOiAyNDAsIC8vIHdwbSAod29yZHMgcGVyIG1pbnV0ZSkuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2luZyBvYmplY3RzIHdpdGggc2FtZSBwcm9wZXJ0aWVzIGluIGNvbmZpZyBhbmQgdXNlciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgc2V0dGluZ3MgYXMgZWxlbWVudC5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IHNldHRpbmdzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlUGF0aCk7XHJcblxyXG4gICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZWxlbWVudCB0aGF0IGlzIGRlZmluZWRcclxuICAgICAgICAgICAgJC5lYWNoKGVsZW1lbnQua2VlcFJlYWRpbmcsIChrZXksIHZhbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbCA9IHZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCA9ICQoZWwpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVycm9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBibG9nIG5vdCBhY3RpdmUhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJC5lYWNoKGVsZW1lbnQua2VlcFJlYWRpbmcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0ICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJlbW90ZSBmaWxlLlxyXG4gICAgICAgICAgICAgICAgJC5nZXQoZWxlbWVudC5rZWVwUmVhZGluZ1JlbW90ZVBhdGgsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3RlS2VlcFJlYWRpbmcgPSAkKCc8ZGl2PicpLmh0bWwocmVtb3RlVGV4dCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0KS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHJlbW90ZSBleGlzdHMgdGhlbiBmaXJlIGFzeW5jLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSBlbGVtZW50LmtlZXBSZWFkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBlYWNoIHRleHQgYmxvY2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJChlbCkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJzTGVuZ3RoID0ga2VlcFJlYWRpbmdUZXh0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gZWxlbWVudC5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgcmVtb3RlIGJsb2cgbm90IGFjdGl2ZSEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gLy8gR2V0IHJlbW90ZSBmaWxlLlxyXG4gICAgICAgIC8vICQuZ2V0KGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlUGF0aCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAvLyBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgcmVtb3RlS2VlcFJlYWRpbmcgPSAkKCc8ZGl2PicpLmh0bWwocmVtb3RlVGV4dCkuZmluZChlbGVtZW50LmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0KS50ZXh0KCk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlbW90ZUtlZXBSZWFkaW5nKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAvLyBJZiByZW1vdGUgZXhpc3RzIHRoZW4gZmlyZSBhc3luYy5cclxuICAgICAgICAvLyAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGNsYXNzICcua2VlcHJlYWRpbmcnLlxyXG4gICAgICAgIC8vICAgICAgICAgJC5lYWNoKHJlbW90ZUtlZXBSZWFkaW5nLCAoa2V5LCB2YWwpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBlbCA9IHZhbDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBlYWNoIHRleHQgYmxvY2suXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCA9ICQoZWwpLnRleHQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY2hhcnNMZW5ndGggPSBrZWVwUmVhZGluZ1RleHQubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZ1dvcmRDb3VudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJCgnLmtlZXByZWFkaW5nJykuZmluZCgnLmtlZXByZWFkaW5nX193b3Jkcy1yZW1vdGUnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29yZCBjb3VudCBkaXNwbGF5IG5vdCBvbiEnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoJy5rZWVwcmVhZGluZycpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZS1yZW1vdGUnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgcmVtb3RlIGJsb2cgbm90IGFjdGl2ZSEnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfTtcclxuXHJcbiAgICB9O1xyXG59KTtcclxuIl19
