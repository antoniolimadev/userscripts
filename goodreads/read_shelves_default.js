// ==UserScript==
// @name         goodreads compare read shelves
// @namespace    https://www.goodreads.com/
// @version      0.1
// @description  makes the goodreads compare feature use READ shelves by default
// @author       You
// @match        https://www.goodreads.com/user/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
// ==/UserScript==

var uhref = $("a:contains('Compare Books')").attr('href');
uhref += "?utf8=✓&shelf=read";

$("a:contains('Compare Books')").attr('href', uhref);