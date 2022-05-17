// ==UserScript==
// @name         Add Geterbrewed navigation at top of custom grain list
// @namespace    unlogic
// @version      0.1
// @description  Inserts a Next and Prev navigation at the top of the custom grain kit pages
// @author       Unlogic
// @match        http*://*.geterbrewed.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geterbrewed.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const navEl = document.querySelector('div.actions:nth-child(3)');
    const parent = document.querySelector('.content')
    parent.parentNode.insertBefore(navEl.cloneNode(true), parent);
})();