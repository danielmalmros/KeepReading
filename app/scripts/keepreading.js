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

            // Init plugin
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

                                    // If reading time is greater than 1, show read time.
                                    if (readingTimeMinutes > 1) {

                                                // Add the calculated read time to DOM.
                                                $(keepReadingTime).html('Read time ' + readingTimeMinutes + ' minuts!');
                                    } else {

                                                // Display new message if it's less than a minute.
                                                $(keepReadingTime).html('Read time is less than a minute!');
                                    }

                                    // Find remote tag.
                                    var remote = $('.keepreading__time-remote');
                                    console.log(remote);
                                    // If remote exists then fire async.
                                    if (remote) {
                                                (function () {

                                                            $.get("remote.html", function (response) {
                                                                        storeRemote(response);
                                                            });

                                                            var storeRemote = function storeRemote(remoteHtml) {
                                                                        var test = $(remoteHtml).find('.remote-file');

                                                                        $(remote).html('Read time ' + test + ' minuts!');
                                                            };
                                                })();
                                    } else {
                                                console.log('No remote files');
                                    }
                        });
            };

            initKeepReading();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUo7QUFDQSxnQkFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUN4QjtBQUNILGFBRkQ7O0FBSUEsZ0JBQUksY0FBYyx1QkFBTTs7QUFFcEI7QUFDQSw0QkFBSSxjQUFjLEVBQUUsY0FBRixDQUFsQjs7QUFFQTtBQUNBLDRCQUFJLHFCQUFxQixHQUF6Qjs7QUFFQTtBQUNBLDBCQUFFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7O0FBRW5DO0FBQ0Esd0NBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7QUFDQSx3Q0FBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLHdDQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0Esd0NBQUksY0FBYyxhQUFhLGtCQUEvQjtBQUNBLHdDQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXpCOztBQUVBO0FBQ0Esd0NBQUksd0JBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxxQkFBYixDQUE1QjtBQUNBLHNDQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLGFBQWEsUUFBM0M7O0FBRUE7QUFDQSx3Q0FBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLG9CQUFiLENBQXRCOztBQUVBO0FBQ0Esd0NBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLGtEQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFDQUxELE1BS087O0FBRUg7QUFDQSxrREFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIOztBQUVEO0FBQ0Esd0NBQUksU0FBUyxFQUFFLDJCQUFGLENBQWI7QUFDQSw0Q0FBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0Esd0NBQUksTUFBSixFQUFZO0FBQUE7O0FBRVIsOERBQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBQyxRQUFELEVBQWM7QUFDL0Isb0ZBQVksUUFBWjtBQUNILDZEQUZEOztBQUlBLGdFQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsVUFBRCxFQUFnQjtBQUM5Qiw0RUFBSSxPQUFPLEVBQUUsVUFBRixFQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBWDs7QUFFQSwwRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLGVBQWUsSUFBZixHQUFzQixVQUFyQztBQUNILDZEQUpEO0FBTlE7QUFhWCxxQ0FiRCxNQWFPO0FBQ0gsd0RBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0g7QUFFSix5QkFsREQ7QUFtREgsYUE1REQ7O0FBOERBO0FBRUgsQ0F2RUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIENyZWF0ZWQ6IEphbnVhciAwMywgMjAxN1xyXG4gKiBVcGRhdGVkOiBOYU5cclxuICogTUlUIExpY2Vuc2VkXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG4kKCgpID0+IHtcclxuXHJcbiAgICAvLyBJbml0IHBsdWdpblxyXG4gICAgbGV0IGluaXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICBrZWVwUmVhZGluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQga2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRleHQgYmxvY2sgY2xhc3MuXHJcbiAgICAgICAgbGV0IGtlZXBSZWFkaW5nID0gJCgnLmtlZXByZWFkaW5nJyk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhdmVyYWdlIHJlYWRpbmcgdGltZS5cclxuICAgICAgICBsZXQgYXZlcmFnZVJlYWRpbmdUaW1lID0gMjAwO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAkLmVhY2goa2VlcFJlYWRpbmcsIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBhdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmluZCByZW1vdGUgdGFnLlxyXG4gICAgICAgICAgICBsZXQgcmVtb3RlID0gJCgnLmtlZXByZWFkaW5nX190aW1lLXJlbW90ZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZW1vdGUpO1xyXG4gICAgICAgICAgICAvLyBJZiByZW1vdGUgZXhpc3RzIHRoZW4gZmlyZSBhc3luYy5cclxuICAgICAgICAgICAgaWYgKHJlbW90ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICQuZ2V0KFwicmVtb3RlLmh0bWxcIiwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZUh0bWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdCA9ICQocmVtb3RlSHRtbCkuZmluZCgnLnJlbW90ZS1maWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocmVtb3RlKS5odG1sKCdSZWFkIHRpbWUgJyArIHRlc3QgKyAnIG1pbnV0cyEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHJlbW90ZSBmaWxlcycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0S2VlcFJlYWRpbmcoKTtcclxuXHJcbn0pO1xyXG4iXX0=
