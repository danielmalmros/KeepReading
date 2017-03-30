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
                    remoteKeepReading = $('<div>').html(remoteText).find('.keepreading p');

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

                    var fullRemoteText = remoteKeepReading.text(),
                        previewText = fullRemoteText.substr(0, 800);

                    var block = $(e).find('a');
                    block.before('<p>' + previewText + '...' + '<p>');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7QUFTQTs7QUFFQSxFQUFFLFlBQU07O0FBRUosTUFBRSxFQUFGLENBQUssV0FBTCxHQUFtQixVQUFDLE9BQUQsRUFBYTs7QUFFNUI7QUFDQSxZQUFJLHdCQUFKO0FBQUEsWUFDSSwwQkFESjtBQUFBLFlBRUksYUFBYSxFQUZqQjtBQUFBLFlBR0ksMkJBSEo7O0FBS0E7QUFDQSxZQUFJLFNBQVM7QUFDTCx5QkFBYSxJQURSO0FBRUwsZ0NBQW9CLElBRmY7QUFHTCxxQ0FBeUIsSUFIcEI7QUFJTCxtQ0FBdUIsSUFKbEI7QUFLTCxrQ0FBc0IsSUFMakI7QUFNTCxnQ0FBb0IsR0FOZixFQU1vQjtBQUN6QixxQkFBUyxtQkFBTSxDQUFFLENBUFo7QUFRTCxtQkFBTyxpQkFBTSxDQUFFO0FBUlYsU0FBYjs7O0FBV0k7QUFDQSxtQkFBVyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLENBWmY7O0FBY0E7QUFDQSxZQUFJLFVBQVUsUUFBZDs7QUFFQSxZQUFJLFNBQVMsRUFBYjs7O0FBRUk7QUFDQSwyQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFZO0FBQzNCLDhCQUFrQixFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWxCO0FBQ0EseUJBQWEsZ0JBQWdCLElBQWhCLEdBQXVCLEtBQXZCLENBQTZCLE1BQTdCLEVBQXFDLE1BQWxEO0FBQ0EsZ0JBQUksY0FBYyxhQUFhLFFBQVEsa0JBQXZDO0FBQ0EsaUNBQXFCLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBckI7QUFDSCxTQVJMO0FBQUEsWUFVSSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUNuQixjQUFFLFFBQVEsV0FBVixFQUF1QixJQUF2QixDQUE0QixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDbEMsb0JBQUksS0FBSyxDQUFUOztBQUVBO0FBQ0Esb0JBQUksUUFBUSxXQUFSLEtBQXdCLElBQTVCLEVBQWtDOztBQUU5QixxQ0FBaUIsRUFBakI7O0FBRUE7QUFDQSx3QkFBSSxRQUFRLG9CQUFSLEtBQWlDLElBQXJDLEVBQTJDO0FBQ3ZDLDRCQUFJLHdCQUF3QixFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcscUJBQVgsQ0FBNUI7QUFDQSwwQkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixhQUFhLFFBQTNDO0FBQ0EsZ0NBQVEsR0FBUixDQUFZLFVBQVo7QUFDSCxxQkFKRCxNQUlPO0FBQ0gsZ0NBQVEsR0FBUixDQUFZLDRCQUFaO0FBQ0EsZ0NBQVEsS0FBUixDQUFjLElBQWQ7QUFDSDs7QUFFRDtBQUNBLHdCQUFJLG1CQUFrQixFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcsb0JBQVgsQ0FBdEI7O0FBRUE7QUFDQSx3QkFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0EsMEJBQUUsZ0JBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZUFBZSxrQkFBZixHQUFvQyxVQUE1RDtBQUVILHFCQUxELE1BS087O0FBRUg7QUFDQSwwQkFBRSxnQkFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFFSDtBQUVKLGlCQTlCRCxNQThCTztBQUNIO0FBQ0Esc0JBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFDSDtBQUNKLGFBdENEO0FBdUNILFNBbERMO0FBQUEsWUFvREksdUJBQXVCLFNBQXZCLG9CQUF1QixHQUFNOztBQUV6QixjQUFFLFFBQVEsa0JBQVYsRUFBOEIsSUFBOUIsQ0FBbUMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ3pDLG9CQUFJLEtBQUssQ0FBVDtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxFQUFaOztBQUVBLG9CQUFJLGdCQUFnQixFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcsTUFBWCxDQUFwQjs7QUFFQTtBQUNBLGtCQUFFLEdBQUYsQ0FBTSxhQUFOLEVBQXFCLFVBQUMsUUFBRCxFQUFjO0FBQy9CLGdDQUFZLFFBQVo7QUFDSCxpQkFGRDs7QUFJQTtBQUNBLG9CQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsVUFBRCxFQUFnQjtBQUM5Qix3Q0FBb0IsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixVQUFoQixFQUE0QixJQUE1QixDQUFpQyxnQkFBakMsQ0FBcEI7O0FBRUEscUNBQWlCLGlCQUFqQjs7QUFFQTtBQUNBLHdCQUFJLFFBQVEsb0JBQVIsS0FBaUMsSUFBckMsRUFBMkM7QUFDdkMsNEJBQUksd0JBQXdCLEVBQUUsRUFBRixFQUFNLElBQU4sQ0FBVyw0QkFBWCxDQUE1QjtBQUNBLDBCQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLGFBQWEsUUFBM0M7QUFDSCxxQkFIRCxNQUdPO0FBQ0gsZ0NBQVEsR0FBUixDQUFZLDRCQUFaO0FBQ0g7O0FBRUQ7QUFDQSx3QkFBSSxrQkFBa0IsRUFBRSxzQkFBRixFQUEwQixFQUExQixDQUE2QixDQUE3QixFQUFnQyxJQUFoQyxDQUFxQywyQkFBckMsQ0FBdEI7O0FBRUE7QUFDQSx3QkFBSSxxQkFBcUIsQ0FBekIsRUFBNEI7O0FBRXhCO0FBQ0EsMEJBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixlQUFlLGtCQUFmLEdBQW9DLFVBQTVEO0FBRUgscUJBTEQsTUFLTztBQUNIO0FBQ0EsMEJBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixrQ0FBeEI7QUFDSDs7QUFFRCx3QkFBSSxpQkFBaUIsa0JBQWtCLElBQWxCLEVBQXJCO0FBQUEsd0JBQ0ksY0FBYyxlQUFlLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsQ0FEbEI7O0FBR0Esd0JBQUksUUFBUSxFQUFFLENBQUYsRUFBSyxJQUFMLENBQVUsR0FBVixDQUFaO0FBQ0EsMEJBQU0sTUFBTixDQUFhLFFBQVEsV0FBUixHQUFzQixLQUF0QixHQUE4QixLQUEzQztBQUNILGlCQWhDRDtBQWlDSCxhQTdDRDtBQThDSCxTQXBHTDtBQUFBLFlBc0dJLGdCQUFnQixTQUFoQixhQUFnQixHQUFNLENBRXJCLENBeEdMO0FBQUEsWUEwR0ksMkJBQTJCLFNBQTNCLHdCQUEyQixHQUFNO0FBQzdCLGNBQUUsUUFBUSxrQkFBVixFQUE4QixJQUE5QixDQUFtQyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7O0FBRXpDLG9CQUFJLEtBQUssQ0FBVDtBQUdILGFBTEQ7QUFNSCxTQWpITDtBQUFBLFlBbUhJLDRCQUE0QixTQUE1Qix5QkFBNEIsR0FBTSxDQUVqQyxDQXJITDtBQUFBLFlBdUhJLE9BQU8sU0FBUCxJQUFPLEdBQU07QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0E3SEw7O0FBK0hBO0FBQ0gsS0ExSkQ7QUEySkgsQ0E3SkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXHJcbiAqIEtlZXBSZWFkaW5nXHJcbiAqIENvcHlyaWdodCAoYykgRGFuaWVsIE1hbG1yb3NcclxuICogPGRhbmllbEBieW1hbG1yb3MuZGs+XHJcbiAqIENyZWF0ZWQ6IEphbnVhciAwMywgMjAxN1xyXG4gKiBVcGRhdGVkOiBOYU5cclxuICogTUlUIExpY2Vuc2VkXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG4kKCgpID0+IHtcclxuXHJcbiAgICAkLmZuLmtlZXBSZWFkaW5nID0gKG9wdGlvbnMpID0+IHtcclxuXHJcbiAgICAgICAgLy8gR2xvYmFsIHNjb3BlZCBvYmplY3RzXHJcbiAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGV4dCxcclxuICAgICAgICAgICAgcmVtb3RlS2VlcFJlYWRpbmcsXHJcbiAgICAgICAgICAgIHdvcmRzQ291bnQgPSBbXSxcclxuICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzO1xyXG5cclxuICAgICAgICAvLyBHbG9iYWwgY29uZmlnIHNldHRpbmdzIGZvciBrZWVwUmVhZGluZy5cclxuICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAga2VlcFJlYWRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1ByZXZpZXc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1JlbW90ZVRhcmdldDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nUmVtb3RlUGF0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtlZXBSZWFkaW5nV29yZENvdW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXZlcmFnZVJlYWRpbmdUaW1lOiAyNDAsIC8vIHdwbSAod29yZHMgcGVyIG1pbnV0ZSkuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2luZyBvYmplY3RzIHdpdGggc2FtZSBwcm9wZXJ0aWVzIGluIGNvbmZpZyBhbmQgdXNlciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgc2V0dGluZ3MgYXMgZWxlbWVudC5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IHNldHRpbmdzO1xyXG5cclxuICAgICAgICBsZXQgbW9kdWxlID0ge30sXHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbnVtYmVycyBvZiB3b3JkcyBhbmQgcmVhZHRpbWUuXHJcbiAgICAgICAgICAgIHN0b3JlQ2FsY3VsYXRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrZWVwUmVhZGluZ1RleHQgPSAkKG9wdGlvbikudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgd29yZHNDb3VudCA9IGtlZXBSZWFkaW5nVGV4dC50cmltKCkuc3BsaXQoL1xccysvZykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWRpbmdUaW1lID0gd29yZHNDb3VudCAvIGVsZW1lbnQuYXZlcmFnZVJlYWRpbmdUaW1lO1xyXG4gICAgICAgICAgICAgICAgcmVhZGluZ1RpbWVNaW51dGVzID0gTWF0aC5yb3VuZChyZWFkaW5nVGltZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZykuZWFjaCgoaSwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGtlZXBSZWFkaW5nIGlzIG5vdCBudWxsIHRoZW4gZmlyZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5rZWVwUmVhZGluZyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxjdWxhdGlvbihlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRvdGFsIHdvcmQgY291bnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmtlZXBSZWFkaW5nV29yZENvdW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2VlcFJlYWRpbmdUb3RhbFdvcmRzID0gJChlbCkuZmluZCgnLmtlZXByZWFkaW5nX193b3JkcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRzQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmQgY291bnQgZGlzcGxheSBub3Qgb24hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVycm9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGVzY2VuZGFudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlZXBSZWFkaW5nVGltZSA9ICQoZWwpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAxLCBzaG93IHJlYWQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRpbmdUaW1lTWludXRlcyA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNhbGN1bGF0ZWQgcmVhZCB0aW1lIHRvIERPTS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgJyArIHJlYWRpbmdUaW1lTWludXRlcyArICcgbWludXRzIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgbmV3IG1lc3NhZ2UgaWYgaXQncyBsZXNzIHRoYW4gYSBtaW51dGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoa2VlcFJlYWRpbmdUaW1lKS5odG1sKCdSZWFkIHRpbWUgaXMgbGVzcyB0aGFuIGEgbWludXRlIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQua2VlcFJlYWRpbmdQcmV2aWV3KS5lYWNoKChpLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZXRSZW1vdGVQYXRoID0gJChlbCkuZGF0YSgnZmlsZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCByZW1vdGUgZmlsZS5cclxuICAgICAgICAgICAgICAgICAgICAkLmdldChnZXRSZW1vdGVQYXRoLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZW1vdGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBvbiByZW1vdGUgZGF0YS5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZW1vdGUgPSAocmVtb3RlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVLZWVwUmVhZGluZyA9ICQoJzxkaXY+JykuaHRtbChyZW1vdGVUZXh0KS5maW5kKCcua2VlcHJlYWRpbmcgcCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGN1bGF0aW9uKHJlbW90ZUtlZXBSZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdG90YWwgd29yZCBjb3VudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQua2VlcFJlYWRpbmdXb3JkQ291bnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RvdGFsV29yZHMgPSAkKGVsKS5maW5kKCcua2VlcHJlYWRpbmdfX3dvcmRzLXJlbW90ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RvdGFsV29yZHMpLmh0bWwod29yZHNDb3VudCArICcgd29yZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JkIGNvdW50IGRpc3BsYXkgbm90IG9uIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZWVwUmVhZGluZ1RpbWUgPSAkKCcua2VlcHJlYWRpbmctcHJldmlldycpLmVxKGkpLmZpbmQoJy5rZWVwcmVhZGluZ19fdGltZS1yZW1vdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHJlYWRpbmcgdGltZSBpcyBncmVhdGVyIHRoYW4gMSwgc2hvdyByZWFkIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkaW5nVGltZU1pbnV0ZXMgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjYWxjdWxhdGVkIHJlYWQgdGltZSB0byBET00uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtlZXBSZWFkaW5nVGltZSkuaHRtbCgnUmVhZCB0aW1lICcgKyByZWFkaW5nVGltZU1pbnV0ZXMgKyAnIG1pbnV0cyEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG5ldyBtZXNzYWdlIGlmIGl0J3MgbGVzcyB0aGFuIGEgbWludXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZWVwUmVhZGluZ1RpbWUpLmh0bWwoJ1JlYWQgdGltZSBpcyBsZXNzIHRoYW4gYSBtaW51dGUhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmdWxsUmVtb3RlVGV4dCA9IHJlbW90ZUtlZXBSZWFkaW5nLnRleHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdUZXh0ID0gZnVsbFJlbW90ZVRleHQuc3Vic3RyKDAsIDgwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSAkKGUpLmZpbmQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYmVmb3JlKCc8cD4nICsgcHJldmlld1RleHQgKyAnLi4uJyArICc8cD4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRQcmV2aWV3ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlVGltZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudC5rZWVwUmVhZGluZ1ByZXZpZXcpLmVhY2goKGksIGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nUmVtb3RlV29yZHMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdldEtlZXBSZWFkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZSgpO1xyXG4gICAgICAgICAgICAgICAgZ2V0S2VlcFJlYWRpbmdSZW1vdGVUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRLZWVwUmVhZGluZ1JlbW90ZVdvcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBhcHBlbmRQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH07XHJcbn0pO1xyXG4iXX0=
