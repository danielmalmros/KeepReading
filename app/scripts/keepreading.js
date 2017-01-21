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

                                    //
                                    var remote = $(this).find('.keepreading__time-remote');

                                    if (remote) {
                                                (function () {

                                                            // Store remote hole remote file.
                                                            var storeRemote = void 0;

                                                            $.get("remote.html", function (response) {
                                                                        storeRemote = response;
                                                                        console.log(storeRemote);
                                                            });
                                                })();
                                    } else {
                                                console.log('Dude please debug me..');
                                    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUo7QUFDQSxnQkFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUN4QjtBQUNILGFBRkQ7O0FBSUEsZ0JBQUksY0FBYyx1QkFBTTs7QUFFcEI7QUFDQSw0QkFBSSxjQUFjLEVBQUUsY0FBRixDQUFsQjs7QUFFQTtBQUNBLDRCQUFJLHFCQUFxQixHQUF6Qjs7QUFFQTtBQUNBLDBCQUFFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7O0FBRW5DO0FBQ0Esd0NBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7QUFDQSx3Q0FBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLHdDQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0Esd0NBQUksY0FBYyxhQUFhLGtCQUEvQjtBQUNBLHdDQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXpCOztBQUVBO0FBQ0Esd0NBQUksd0JBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxxQkFBYixDQUE1QjtBQUNBLHNDQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLGFBQWEsUUFBM0M7O0FBRUE7QUFDQSx3Q0FBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLG9CQUFiLENBQXRCOztBQUVBO0FBQ0Esd0NBQUksU0FBUyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsMkJBQWIsQ0FBYjs7QUFFQSx3Q0FBSSxNQUFKLEVBQVk7QUFBQTs7QUFFUjtBQUNBLGdFQUFJLG9CQUFKOztBQUVBLDhEQUFFLEdBQUYsQ0FBTSxhQUFOLEVBQXFCLFVBQUMsUUFBRCxFQUFjO0FBQy9CLHNGQUFjLFFBQWQ7QUFDQSxnRkFBUSxHQUFSLENBQVksV0FBWjtBQUNILDZEQUhEO0FBTFE7QUFXWCxxQ0FYRCxNQVdPO0FBQ0gsd0RBQVEsR0FBUixDQUFZLHdCQUFaO0FBQ0g7O0FBRUQsd0NBQUkscUJBQXFCLENBQXpCLEVBQTRCOztBQUV4QjtBQUNBLGtEQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFDQUxELE1BS087O0FBRUg7QUFDQSxrREFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGtDQUF4QjtBQUVIO0FBQ0oseUJBN0NEO0FBOENILGFBdkREOztBQXlEQTtBQUVILENBbEVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBLZWVwUmVhZGluZ1xyXG4gKiBDb3B5cmlnaHQgKGMpIERhbmllbCBNYWxtcm9zXHJcbiAqIDxkYW5pZWxAYnltYWxtcm9zLmRrPlxyXG4gKiBDcmVhdGVkOiBKYW51YXIgMDMsIDIwMTdcclxuICogVXBkYXRlZDogTmFOXHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG4kKCgpID0+IHtcclxuXHJcbiAgICAvLyBJbml0IHBsdWdpblxyXG4gICAgbGV0IGluaXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICBrZWVwUmVhZGluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQga2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRleHQgYmxvY2sgY2xhc3MuXHJcbiAgICAgICAgbGV0IGtlZXBSZWFkaW5nID0gJCgnLmtlZXByZWFkaW5nJyk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhdmVyYWdlIHJlYWRpbmcgdGltZS5cclxuICAgICAgICBsZXQgYXZlcmFnZVJlYWRpbmdUaW1lID0gMjAwO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAkLmVhY2goa2VlcFJlYWRpbmcsIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBhdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGxldCByZW1vdGUgPSAkKHRoaXMpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZS1yZW1vdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZW1vdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSByZW1vdGUgaG9sZSByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlbW90ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmdldChcInJlbW90ZS5odG1sXCIsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlUmVtb3RlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcmVSZW1vdGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEdWRlIHBsZWFzZSBkZWJ1ZyBtZS4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0S2VlcFJlYWRpbmcoKTtcclxuXHJcbn0pO1xyXG4iXX0=
