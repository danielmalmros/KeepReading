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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7O0FBT0E7O0FBRUEsRUFBRSxZQUFNOztBQUVKLFFBQUksa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDeEI7QUFDSCxLQUZEOztBQUlBLFFBQUksY0FBYyx1QkFBTTs7QUFFcEI7QUFDQSxZQUFJLGNBQWMsRUFBRSxjQUFGLENBQWxCOztBQUVBO0FBQ0EsWUFBSSxxQkFBcUIsR0FBekI7O0FBRUE7QUFDQSxVQUFFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7O0FBRW5DO0FBQ0EsZ0JBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7QUFDQSxnQkFBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLGdCQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLGtCQUEvQjtBQUNBLGdCQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXpCOztBQUVBO0FBQ0EsZ0JBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxvQkFBYixDQUF0Qjs7QUFFQSxnQkFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0Esa0JBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixlQUFnQixrQkFBaEIsR0FBc0MsVUFBOUQ7QUFFSCxhQUxELE1BS087O0FBRUg7QUFDQSxrQkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIO0FBQ0osU0F2QkQ7QUF3QkgsS0FqQ0Q7O0FBbUNBO0FBRUgsQ0EzQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgbGV0IGluaXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICBrZWVwUmVhZGluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQga2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRleHQgYmxvY2sgY2xhc3MuXHJcbiAgICAgICAgbGV0IGtlZXBSZWFkaW5nID0gJCgnLmtlZXByZWFkaW5nJyk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhdmVyYWdlIHJlYWRpbmcgdGltZS5cclxuICAgICAgICBsZXQgYXZlcmFnZVJlYWRpbmdUaW1lID0gMjAwO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAkLmVhY2goa2VlcFJlYWRpbmcsIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBhdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgKHJlYWRpbmdUaW1lTWludXRlcykgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0S2VlcFJlYWRpbmcoKTtcclxuXHJcbn0pO1xyXG4iXX0=
