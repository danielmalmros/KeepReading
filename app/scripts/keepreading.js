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

                        // Remote file
                        $.get("remote.html", function (response) {
                                    storeRemote(response);
                        });

                        var storeRemote = function storeRemote(remoteHtml) {
                                    var remoteKeepReading = $(undefined).find('.keepreading');
                                    console.log(remoteKeepReading);
                        };

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

                                    // If remote exists then fire async.
                                    if ($('article').hasClass('keepreading-remote')) {} else {
                                                console.log('No remote files');
                                    }
                        });
            };

            initKeepReading();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFXQTs7QUFFQSxFQUFFLFlBQU07O0FBRUo7QUFDQSxnQkFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUN4QjtBQUNILGFBRkQ7O0FBSUEsZ0JBQUksY0FBYyx1QkFBTTs7QUFFcEI7QUFDQSw0QkFBSSxjQUFjLEVBQUUsY0FBRixDQUFsQjs7QUFFQTtBQUNBLDBCQUFFLEdBQUYsQ0FBTSxhQUFOLEVBQXFCLFVBQUMsUUFBRCxFQUFjO0FBQy9CLGdEQUFZLFFBQVo7QUFDSCx5QkFGRDs7QUFJQSw0QkFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLFVBQUQsRUFBZ0I7QUFDOUIsd0NBQUksb0JBQW9CLGFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBeEI7QUFDQSw0Q0FBUSxHQUFSLENBQVksaUJBQVo7QUFDSCx5QkFIRDs7QUFLQTtBQUNBLDRCQUFJLHFCQUFxQixHQUF6Qjs7QUFFQTtBQUNBLDBCQUFFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7O0FBRW5DO0FBQ0Esd0NBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7QUFDQSx3Q0FBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLHdDQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0Esd0NBQUksY0FBYyxhQUFhLGtCQUEvQjtBQUNBLHdDQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXpCOztBQUVBO0FBQ0Esd0NBQUksd0JBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxxQkFBYixDQUE1QjtBQUNBLHNDQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLGFBQWEsUUFBM0M7O0FBRUE7QUFDQSx3Q0FBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLG9CQUFiLENBQXRCOztBQUVBO0FBQ0Esd0NBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLGtEQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFDQUxELE1BS087O0FBRUg7QUFDQSxrREFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIOztBQUVEO0FBQ0Esd0NBQUksRUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixvQkFBdEIsQ0FBSixFQUFpRCxDQUloRCxDQUpELE1BSU87QUFDSCx3REFBUSxHQUFSLENBQVksaUJBQVo7QUFDSDtBQUVKLHlCQXRDRDtBQXVDSCxhQTFERDs7QUE0REE7QUFFSCxDQXJFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG5cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuJCgoKSA9PiB7XHJcblxyXG4gICAgLy8gSW5pdCBwbHVnaW5cclxuICAgIGxldCBpbml0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAga2VlcFJlYWRpbmcoKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGtlZXBSZWFkaW5nID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBTdG9yZSB0ZXh0IGJsb2NrIGNsYXNzLlxyXG4gICAgICAgIGxldCBrZWVwUmVhZGluZyA9ICQoJy5rZWVwcmVhZGluZycpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdGUgZmlsZVxyXG4gICAgICAgICQuZ2V0KFwicmVtb3RlLmh0bWxcIiwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZUh0bWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbW90ZUtlZXBSZWFkaW5nID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhdmVyYWdlIHJlYWRpbmcgdGltZS5cclxuICAgICAgICBsZXQgYXZlcmFnZVJlYWRpbmdUaW1lID0gMjAwO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAkLmVhY2goa2VlcFJlYWRpbmcsIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBhdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgcmVtb3RlIGV4aXN0cyB0aGVuIGZpcmUgYXN5bmMuXHJcbiAgICAgICAgICAgIGlmICgkKCdhcnRpY2xlJykuaGFzQ2xhc3MoJ2tlZXByZWFkaW5nLXJlbW90ZScpKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcmVtb3RlIGZpbGVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRLZWVwUmVhZGluZygpO1xyXG5cclxufSk7XHJcbiJdfQ==
