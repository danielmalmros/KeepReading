!function t(e,r,n){function i(u,a){if(!r[u]){if(!e[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=r[u]={exports:{}};e[u][0].call(c.exports,function(t){var r=e[u][1][t];return i(r?r:t)},c,c.exports,t,e,r,n)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(t,e,r){"use strict";$(function(){var t=function(){e()},e=function t(){var t=$(".keepreading"),e=200;$.each(t,function(t,r){var n=$(this).text(),i=(n.length,n.trim().split(/\s+/g).length),o=i/e,u=Math.round(o),a=$(this).find(".keepreading__words");$(a).html(i+" words");var f=$(this).find(".keepreading__time");u>1?$(f).html("Read time "+u+" minuts!"):$(f).html("Read time is less than a minute!")})};t()})},{}]},{},[1]);