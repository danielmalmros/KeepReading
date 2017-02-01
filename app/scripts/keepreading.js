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

    // Init plugin.
    var initKeepReading = function initKeepReading() {
        keepReading();
    };

    var keepReading = function keepReading() {

        // Global config settings for keepReading.
        var config = {
            keepReading: $('.keepreading'),
            keepReadingRemoteTarget: '.keepreading-remote',
            keepReadingRemotePath: 'remote.html',
            averageReadingTime: 200
        };

        // If keepReading is not null then fire function.
        if (config.keepReading !== null) {

            // Loop through each element that has the class '.keepreading'.
            $.each(config.keepReading, function (key, val) {

                // Calculate each text block.
                var keepReadingText = $(this).text();
                var charsLength = keepReadingText.length;
                var wordsCount = keepReadingText.trim().split(/\s+/g).length;
                var readingTime = wordsCount / config.averageReadingTime;
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
            });
        } else {
            console.log('GO!');
        }

        // Get remote file.
        $.get(config.keepReadingRemotePath, function (response) {
            storeRemote(response);
        });

        // Callback on remote data.
        var storeRemote = function storeRemote(remoteText) {
            var remoteKeepReading = $('<div>').html(remoteText).find(config.keepReadingRemoteTarget);
            // console.log(remoteKeepReading);

            // If remote exists then fire async.
            if (config.keepReadingRemoteTarget !== null) {
                // Loop through each element that has the class '.keepreading'.
                $.each(remoteKeepReading, function (key, val) {

                    // Calculate each text block.
                    var keepReadingText = $(this).text();
                    var charsLength = keepReadingText.length;
                    var wordsCount = keepReadingText.trim().split(/\s+/g).length;
                    var readingTime = wordsCount / config.averageReadingTime;
                    var readingTimeMinutes = Math.round(readingTime);

                    // Display total word count.
                    var keepReadingTotalWords = $('.keepreading').find('.keepreading__words-remote');
                    $(keepReadingTotalWords).html(wordsCount + ' words');

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
                });
            } else {
                console.log('GO!');
            }
        };
    };

    initKeepReading();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUo7QUFDQSxRQUFJLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQ3hCO0FBQ0gsS0FGRDs7QUFJQSxRQUFJLGNBQWMsU0FBZCxXQUFjLEdBQU07O0FBRXBCO0FBQ0EsWUFBTSxTQUFTO0FBQ1gseUJBQWEsRUFBRSxjQUFGLENBREY7QUFFWCxxQ0FBeUIscUJBRmQ7QUFHWCxtQ0FBdUIsYUFIWjtBQUlYLGdDQUFvQjtBQUpULFNBQWY7O0FBT0E7QUFDQSxZQUFJLE9BQU8sV0FBUCxLQUF1QixJQUEzQixFQUFpQzs7QUFFN0I7QUFDQSxjQUFFLElBQUYsQ0FBTyxPQUFPLFdBQWQsRUFBMkIsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjs7QUFFMUM7QUFDQSxvQkFBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUF0QjtBQUNBLG9CQUFJLGNBQWMsZ0JBQWdCLE1BQWxDO0FBQ0Esb0JBQUksYUFBYSxnQkFBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsTUFBdEQ7QUFDQSxvQkFBSSxjQUFjLGFBQWEsT0FBTyxrQkFBdEM7QUFDQSxvQkFBSSxxQkFBcUIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF6Qjs7QUFFQTtBQUNBLG9CQUFJLHdCQUF3QixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEscUJBQWIsQ0FBNUI7QUFDQSxrQkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixhQUFhLFFBQTNDOztBQUVBO0FBQ0Esb0JBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxvQkFBYixDQUF0Qjs7QUFFQTtBQUNBLG9CQUFJLHFCQUFxQixDQUF6QixFQUE0Qjs7QUFFeEI7QUFDQSxzQkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGVBQWUsa0JBQWYsR0FBb0MsVUFBNUQ7QUFFSCxpQkFMRCxNQUtPOztBQUVIO0FBQ0Esc0JBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFFSDtBQUVKLGFBN0JEO0FBK0JILFNBbENELE1Ba0NPO0FBQ0gsb0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDSDs7QUFFRDtBQUNBLFVBQUUsR0FBRixDQUFNLE9BQU8scUJBQWIsRUFBb0MsVUFBQyxRQUFELEVBQWM7QUFDOUMsd0JBQVksUUFBWjtBQUNILFNBRkQ7O0FBSUE7QUFDQSxZQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsVUFBRCxFQUFnQjtBQUM5QixnQkFBSSxvQkFBb0IsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixVQUFoQixFQUE0QixJQUE1QixDQUFpQyxPQUFPLHVCQUF4QyxDQUF4QjtBQUNBOztBQUVBO0FBQ0EsZ0JBQUksT0FBTyx1QkFBUCxLQUFtQyxJQUF2QyxFQUE2QztBQUN6QztBQUNBLGtCQUFFLElBQUYsQ0FBTyxpQkFBUCxFQUEwQixVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1COztBQUV6QztBQUNBLHdCQUFJLGtCQUFrQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXRCO0FBQ0Esd0JBQUksY0FBYyxnQkFBZ0IsTUFBbEM7QUFDQSx3QkFBSSxhQUFhLGdCQUFnQixJQUFoQixHQUF1QixLQUF2QixDQUE2QixNQUE3QixFQUFxQyxNQUF0RDtBQUNBLHdCQUFJLGNBQWMsYUFBYSxPQUFPLGtCQUF0QztBQUNBLHdCQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXpCOztBQUVBO0FBQ0Esd0JBQUksd0JBQXdCLEVBQUUsY0FBRixFQUFrQixJQUFsQixDQUF1Qiw0QkFBdkIsQ0FBNUI7QUFDQSxzQkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixhQUFhLFFBQTNDOztBQUVBO0FBQ0Esd0JBQUksa0JBQWtCLEVBQUUsY0FBRixFQUFrQixJQUFsQixDQUF1QiwyQkFBdkIsQ0FBdEI7O0FBRUE7QUFDQSx3QkFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0EsMEJBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixlQUFlLGtCQUFmLEdBQW9DLFVBQTVEO0FBRUgscUJBTEQsTUFLTzs7QUFFSDtBQUNBLDBCQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0Isa0NBQXhCO0FBRUg7QUFFSixpQkE3QkQ7QUErQkgsYUFqQ0QsTUFpQ087QUFDSCx3QkFBUSxHQUFSLENBQVksS0FBWjtBQUNIO0FBRUosU0ExQ0Q7QUE0Q0gsS0FuR0Q7O0FBcUdBO0FBRUgsQ0E5R0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIENyZWF0ZWQ6IEphbnVhciAwMywgMjAxN1xyXG4gKiBVcGRhdGVkOiBOYU5cclxuICogTUlUIExpY2Vuc2VkXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG4kKCgpID0+IHtcclxuXHJcbiAgICAvLyBJbml0IHBsdWdpbi5cclxuICAgIGxldCBpbml0S2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAga2VlcFJlYWRpbmcoKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGtlZXBSZWFkaW5nID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgY29uZmlnIHNldHRpbmdzIGZvciBrZWVwUmVhZGluZy5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGtlZXBSZWFkaW5nOiAkKCcua2VlcHJlYWRpbmcnKSxcclxuICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQ6ICcua2VlcHJlYWRpbmctcmVtb3RlJyxcclxuICAgICAgICAgICAga2VlcFJlYWRpbmdSZW1vdGVQYXRoOiAncmVtb3RlLmh0bWwnLFxyXG4gICAgICAgICAgICBhdmVyYWdlUmVhZGluZ1RpbWU6IDIwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICBpZiAoY29uZmlnLmtlZXBSZWFkaW5nICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyAnLmtlZXByZWFkaW5nJy5cclxuICAgICAgICAgICAgJC5lYWNoKGNvbmZpZy5rZWVwUmVhZGluZywgZnVuY3Rpb24oa2V5LCB2YWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJzTGVuZ3RoID0ga2VlcFJlYWRpbmdUZXh0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWUgPSB3b3Jkc0NvdW50IC8gY29uZmlnLmF2ZXJhZ2VSZWFkaW5nVGltZTtcclxuICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZU1pbnV0ZXMgPSBNYXRoLnJvdW5kKHJlYWRpbmdUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzJyk7XHJcbiAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVG90YWxXb3JkcykuaHRtbCh3b3Jkc0NvdW50ICsgJyB3b3JkcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKHRoaXMpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZGluZ1RpbWVNaW51dGVzID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR08hJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgcmVtb3RlIGZpbGUuXHJcbiAgICAgICAgJC5nZXQoY29uZmlnLmtlZXBSZWFkaW5nUmVtb3RlUGF0aCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlUmVtb3RlKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2FsbGJhY2sgb24gcmVtb3RlIGRhdGEuXHJcbiAgICAgICAgbGV0IHN0b3JlUmVtb3RlID0gKHJlbW90ZVRleHQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbW90ZUtlZXBSZWFkaW5nID0gJCgnPGRpdj4nKS5odG1sKHJlbW90ZVRleHQpLmZpbmQoY29uZmlnLmtlZXBSZWFkaW5nUmVtb3RlVGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVtb3RlS2VlcFJlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgcmVtb3RlIGV4aXN0cyB0aGVuIGZpcmUgYXN5bmMuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGNsYXNzICcua2VlcHJlYWRpbmcnLlxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHJlbW90ZUtlZXBSZWFkaW5nLCBmdW5jdGlvbihrZXksIHZhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgZWFjaCB0ZXh0IGJsb2NrLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcnNMZW5ndGggPSBrZWVwUmVhZGluZ1RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3Jkc0NvdW50ID0ga2VlcFJlYWRpbmdUZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGNvbmZpZy5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQoJy5rZWVwcmVhZGluZycpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMtcmVtb3RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKCcua2VlcHJlYWRpbmcnKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUtcmVtb3RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dPIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0S2VlcFJlYWRpbmcoKTtcclxuXHJcbn0pO1xyXG4iXX0=
