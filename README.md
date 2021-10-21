# js-toggle-dark-mode 🌙

A smart JavaScript application that automatically inherits the user's prefers-color-scheme, but allows it to be overridden by the user and stored in the user's browser storage to enable site-wide preference and future visits.

## Installing on your own site

1. Copy the 3 `<link rel="stylesheet"...` declarations from the top of **index.html** (the first two Bootstrap and Font Awesome are really only for styling the toggle button so that's up to you).
2. Copy the `<div id="theme-toggler">...` line which will display the toggle button if functionality is supported by the user's browser.
3. Copy the `<script src...`  declaration from the bottom of **index.html**.
4. Copy the **js** and **css** folders.
5. Edit the **css/light-theme.css** with all your light theme styles and **css/dark-theme.css** with all your dark theme styles.

## Demo

https://robsd.github.io/js-toggle-dark-mode