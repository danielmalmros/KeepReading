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

                                // Get remote file.
                                $.get(config.keepReadingRemotePath, function (response) {
                                                storeRemote(response);
                                });

                                // Callback on remote data.
                                var storeRemote = function storeRemote(remoteText) {
                                                var remoteKeepReading = $('<div>').html(remoteText).find(config.keepReadingRemoteTarget).text();
                                                console.log(remoteKeepReading);
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

                                // If remote exists then fire async.
                                if (config.keepReadingRemoteTarget !== null) {
                                                // Loop through each element that has the class '.keepreading'.
                                                $.each(config.keepReadingRemoteTarget, function (key, val) {

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
                };

                initKeepReading();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUo7QUFDQSxvQkFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUN4QjtBQUNILGlCQUZEOztBQUlBLG9CQUFJLGNBQWMsU0FBZCxXQUFjLEdBQU07O0FBRXBCO0FBQ0Esb0NBQU0sU0FBUztBQUNYLDZEQUFhLEVBQUUsY0FBRixDQURGO0FBRVgseUVBQXlCLHFCQUZkO0FBR1gsdUVBQXVCLGFBSFo7QUFJWCxvRUFBb0I7QUFKVCxpQ0FBZjs7QUFPQTtBQUNBLGtDQUFFLEdBQUYsQ0FBTSxPQUFPLHFCQUFiLEVBQW9DLFVBQUMsUUFBRCxFQUFjO0FBQzlDLDREQUFZLFFBQVo7QUFDSCxpQ0FGRDs7QUFJQTtBQUNBLG9DQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsVUFBRCxFQUFnQjtBQUM5QixvREFBSSxvQkFBb0IsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixVQUFoQixFQUE0QixJQUE1QixDQUFpQyxPQUFPLHVCQUF4QyxFQUFpRSxJQUFqRSxFQUF4QjtBQUNBLHdEQUFRLEdBQVIsQ0FBWSxpQkFBWjtBQUNILGlDQUhEOztBQUtBO0FBQ0Esb0NBQUksT0FBTyxXQUFQLEtBQXVCLElBQTNCLEVBQWlDOztBQUU3QjtBQUNBLGtEQUFFLElBQUYsQ0FBTyxPQUFPLFdBQWQsRUFBMkIsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjs7QUFFMUM7QUFDQSxvRUFBSSxrQkFBa0IsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUF0QjtBQUNBLG9FQUFJLGNBQWMsZ0JBQWdCLE1BQWxDO0FBQ0Esb0VBQUksYUFBYSxnQkFBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FBNkIsTUFBN0IsRUFBcUMsTUFBdEQ7QUFDQSxvRUFBSSxjQUFjLGFBQWEsT0FBTyxrQkFBdEM7QUFDQSxvRUFBSSxxQkFBcUIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF6Qjs7QUFFQTtBQUNBLG9FQUFJLHdCQUF3QixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEscUJBQWIsQ0FBNUI7QUFDQSxrRUFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixhQUFhLFFBQTNDOztBQUVBO0FBQ0Esb0VBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxvQkFBYixDQUF0Qjs7QUFFQTtBQUNBLG9FQUFJLHFCQUFxQixDQUF6QixFQUE0Qjs7QUFFeEI7QUFDQSxrRkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLGVBQWUsa0JBQWYsR0FBb0MsVUFBNUQ7QUFFSCxpRUFMRCxNQUtPOztBQUVIO0FBQ0Esa0ZBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFFSDtBQUVKLGlEQTdCRDtBQStCSCxpQ0FsQ0QsTUFrQ087QUFDSCx3REFBUSxHQUFSLENBQVksS0FBWjtBQUNIOztBQUVEO0FBQ0Esb0NBQUksT0FBTyx1QkFBUCxLQUFtQyxJQUF2QyxFQUE2QztBQUN6QztBQUNBLGtEQUFFLElBQUYsQ0FBTyxPQUFPLHVCQUFkLEVBQXVDLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7O0FBRXREO0FBQ0Esb0VBQUksa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7QUFDQSxvRUFBSSxjQUFjLGdCQUFnQixNQUFsQztBQUNBLG9FQUFJLGFBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQXREO0FBQ0Esb0VBQUksY0FBYyxhQUFhLE9BQU8sa0JBQXRDO0FBQ0Esb0VBQUkscUJBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBekI7O0FBRUE7QUFDQSxvRUFBSSx3QkFBd0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLHFCQUFiLENBQTVCO0FBQ0Esa0VBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsYUFBYSxRQUEzQzs7QUFFQTtBQUNBLG9FQUFJLGtCQUFrQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsb0JBQWIsQ0FBdEI7O0FBRUE7QUFDQSxvRUFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0Esa0ZBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixlQUFlLGtCQUFmLEdBQW9DLFVBQTVEO0FBRUgsaUVBTEQsTUFLTzs7QUFFSDtBQUNBLGtGQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0Isa0NBQXhCO0FBRUg7QUFFSixpREE3QkQ7QUErQkgsaUNBakNELE1BaUNPO0FBQ0gsd0RBQVEsR0FBUixDQUFZLEtBQVo7QUFDSDtBQUVKLGlCQWxHRDs7QUFvR0E7QUFFSCxDQTdHRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcclxuICogS2VlcFJlYWRpbmdcclxuICogQ29weXJpZ2h0IChjKSBEYW5pZWwgTWFsbXJvc1xyXG4gKiA8ZGFuaWVsQGJ5bWFsbXJvcy5kaz5cclxuICogQ3JlYXRlZDogSmFudWFyIDAzLCAyMDE3XHJcbiAqIFVwZGF0ZWQ6IE5hTlxyXG4gKiBNSVQgTGljZW5zZWRcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgIC8vIEluaXQgcGx1Z2luLlxyXG4gICAgbGV0IGluaXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICBrZWVwUmVhZGluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQga2VlcFJlYWRpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIEdsb2JhbCBjb25maWcgc2V0dGluZ3MgZm9yIGtlZXBSZWFkaW5nLlxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAga2VlcFJlYWRpbmc6ICQoJy5rZWVwcmVhZGluZycpLFxyXG4gICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVRhcmdldDogJy5rZWVwcmVhZGluZy1yZW1vdGUnLFxyXG4gICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVBhdGg6ICdyZW1vdGUuaHRtbCcsXHJcbiAgICAgICAgICAgIGF2ZXJhZ2VSZWFkaW5nVGltZTogMjAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHJlbW90ZSBmaWxlLlxyXG4gICAgICAgICQuZ2V0KGNvbmZpZy5rZWVwUmVhZGluZ1JlbW90ZVBhdGgsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZVJlbW90ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENhbGxiYWNrIG9uIHJlbW90ZSBkYXRhLlxyXG4gICAgICAgIGxldCBzdG9yZVJlbW90ZSA9IChyZW1vdGVUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKGNvbmZpZy5rZWVwUmVhZGluZ1JlbW90ZVRhcmdldCkudGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZW1vdGVLZWVwUmVhZGluZyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSWYga2VlcFJlYWRpbmcgaXMgbm90IG51bGwgdGhlbiBmaXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgIGlmIChjb25maWcua2VlcFJlYWRpbmcgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGNsYXNzICcua2VlcHJlYWRpbmcnLlxyXG4gICAgICAgICAgICAkLmVhY2goY29uZmlnLmtlZXBSZWFkaW5nLCBmdW5jdGlvbihrZXksIHZhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBlYWNoIHRleHQgYmxvY2suXHJcbiAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcnNMZW5ndGggPSBrZWVwUmVhZGluZ1RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdvcmRzQ291bnQgPSBrZWVwUmVhZGluZ1RleHQudHJpbSgpLnNwbGl0KC9cXHMrL2cpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCByZWFkaW5nVGltZSA9IHdvcmRzQ291bnQgLyBjb25maWcuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lTWludXRlcyA9IE1hdGgucm91bmQocmVhZGluZ1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKHRoaXMpLmZpbmQoJy5rZWVwcmVhZGluZ19fd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUb3RhbFdvcmRzKS5odG1sKHdvcmRzQ291bnQgKyAnIHdvcmRzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBkZXNjZW5kYW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgc2V0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX190aW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FsY3VsYXRlZCByZWFkIHRpbWUgdG8gRE9NLlxyXG4gICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTyEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHJlbW90ZSBleGlzdHMgdGhlbiBmaXJlIGFzeW5jLlxyXG4gICAgICAgIGlmIChjb25maWcua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZWxlbWVudCB0aGF0IGhhcyB0aGUgY2xhc3MgJy5rZWVwcmVhZGluZycuXHJcbiAgICAgICAgICAgICQuZWFjaChjb25maWcua2VlcFJlYWRpbmdSZW1vdGVUYXJnZXQsIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGVhY2ggdGV4dCBibG9jay5cclxuICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RleHQgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyc0xlbmd0aCA9IGtlZXBSZWFkaW5nVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGNvbmZpZy5hdmVyYWdlUmVhZGluZ1RpbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0b3RhbCB3b3JkIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVG90YWxXb3JkcyA9ICQodGhpcykuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUaW1lID0gJCh0aGlzKS5maW5kKCcua2VlcHJlYWRpbmdfX3RpbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiByZWFkaW5nIHRpbWUgaXMgZ3JlYXRlciB0aGFuIDEsIHNob3cgcmVhZCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSAnICsgcmVhZGluZ1RpbWVNaW51dGVzICsgJyBtaW51dHMhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSBuZXcgbWVzc2FnZSBpZiBpdCdzIGxlc3MgdGhhbiBhIG1pbnV0ZS5cclxuICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lIGlzIGxlc3MgdGhhbiBhIG1pbnV0ZSEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dPIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRLZWVwUmVhZGluZygpO1xyXG5cclxufSk7XHJcbiJdfQ==
