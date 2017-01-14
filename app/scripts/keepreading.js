(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * KeepReading
 * Copyright (c) Daniel Malmros
 * <daniel@bymalmros.dk>
 * MIT Licensed
 */

'use strict';

$(function () {

            var initKeepReading = function initKeepReading() {
                        keepReading();
            };

            var keepReading = function keepReading() {

                        // Store text block class.
                        var keepReading = $('.keepreading');

                        // Store the average reading time.
                        var averageReadingTime = 200;

                        // Loop through each element that has the class '.keepreading'.
                        $.each(keepReading, function (key, val) {

                                    // Calculate each text block.
                                    var keepReadingText = $(this).text();
                                    var charsLength = keepReadingText.length;
                                    var wordsCount = keepReadingText.trim().split(/\s+/g).length;
                                    var readingTime = wordsCount / averageReadingTime;
                                    var readingTimeMinutes = Math.round(readingTime);

                                    // Display total word count.
                                    var keepReadingTotalWords = $(this).find('.keepreading__words');
                                    $(keepReadingTotalWords).html(wordsCount + ' words');

                                    // Get the descendants of each element in the current set.
                                    var keepReadingTime = $(this).find('.keepreading__time');

                                    if (readingTimeMinutes > 1) {

                                                // Add the calculated read time to DOM.
                                                $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                                    } else {

                                                // Display new message if it's less than a minute.
                                                $(keepReadingTime).html('Read time is less than a minute!');
                                    }
                        });
            };

            initKeepReading();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7O0FBT0E7O0FBRUEsRUFBRSxZQUFNOztBQUVKLGdCQUFJLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQ3hCO0FBQ0gsYUFGRDs7QUFJQSxnQkFBSSxjQUFjLHVCQUFNOztBQUVwQjtBQUNBLDRCQUFJLGNBQWMsRUFBRSxjQUFGLENBQWxCOztBQUVBO0FBQ0EsNEJBQUkscUJBQXFCLEdBQXpCOztBQUVBO0FBQ0EsMEJBQUUsSUFBRixDQUFPLFdBQVAsRUFBb0IsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjs7QUFFbkM7QUFDQSx3Q0FBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUF0QjtBQUNBLHdDQUFJLGNBQWMsZ0JBQWdCLE1BQWxDO0FBQ0Esd0NBQUksYUFBYSxnQkFBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsTUFBdEQ7QUFDQSx3Q0FBSSxjQUFjLGFBQWEsa0JBQS9CO0FBQ0Esd0NBQUkscUJBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBekI7O0FBRUE7QUFDQSx3Q0FBSSx3QkFBd0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLHFCQUFiLENBQTVCO0FBQ0Esc0NBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsYUFBYSxRQUEzQzs7QUFFQTtBQUNBLHdDQUFJLGtCQUFrQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsb0JBQWIsQ0FBdEI7O0FBRUEsd0NBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLGtEQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFDQUxELE1BS087O0FBRUg7QUFDQSxrREFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIO0FBQ0oseUJBM0JEO0FBNEJILGFBckNEOztBQXVDQTtBQUVILENBL0NEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBLZWVwUmVhZGluZ1xyXG4gKiBDb3B5cmlnaHQgKGMpIERhbmllbCBNYWxtcm9zXHJcbiAqIDxkYW5pZWxAYnltYWxtcm9zLmRrPlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgIGxldCBpbml0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAga2VlcFJlYWRpbmcoKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGtlZXBSZWFkaW5nID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBTdG9yZSB0ZXh0IGJsb2NrIGNsYXNzLlxyXG4gICAgICAgIGxldCBrZWVwUmVhZGluZyA9ICQoJy5rZWVwcmVhZGluZycpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgYXZlcmFnZSByZWFkaW5nIHRpbWUuXHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VSZWFkaW5nVGltZSA9IDIwMDtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZWxlbWVudCB0aGF0IGhhcyB0aGUgY2xhc3MgJy5rZWVwcmVhZGluZycuXHJcbiAgICAgICAgJC5lYWNoKGtlZXBSZWFkaW5nLCBmdW5jdGlvbihrZXksIHZhbCkge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGVhY2ggdGV4dCBibG9jay5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgY2hhcnNMZW5ndGggPSBrZWVwUmVhZGluZ1RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKHRoaXMpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdEtlZXBSZWFkaW5nKCk7XHJcblxyXG59KTtcclxuIl19