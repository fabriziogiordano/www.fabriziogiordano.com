---
layout: "../../layouts/Layout.astro"
title: Mobile heatmap landing page with Google Analytics
slug: mobile-heatmap-landing-page-with-google-analytics
description: Mobile heatmap landing page using google Analytics
excerpt: Mobile landing page heatmap
pubDate: "Dec 30 2012"
---

Few days ago I have been working on some new mobile landing pages.
One of the most important part of a landing page is that has to be fast to load and create
user interaction.

On the web there are many ways to [track user's mouse](http://en.wikipedia.org/wiki/Mouse_tracking) movements and create some nice heatmap.

On mobile there is no mouse but touch event. I turn on then a small test using Google Analytics.

First of all I embeded the Goggle Analytics code: _note that this is a [optimized mobile version](http://mathiasbynens.be/notes/async-analytics-snippet)_

<script src="https://gist.github.com/7fe63e5009aba6664f4d.js"></script>

Then at the touchstart event, attached to the document, it trigger the _track_ function:

<script src="https://gist.github.com/b1f4a3e99faf8f39b12d.js"></script>

_track_ will send to Google Analytics the coordinates x and y of the point where the user touch the screen.
The _gaq.push_ trigger the <a href="https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide">track event method</a>
and will send a track event that I called finger and subcategory tap and a value that will be something like <code>x:123;y:234</code>

The next step is to export from Google Analytics those events (I exported some of them, not the whole set):

<script src="https://gist.github.com/4490665.js"></script>

I then created a small page to draw the canvas on top of an image.

<script src="https://gist.github.com/4490680.js"></script>

The final result is an image with all the points the users interact with.
![Heatmap](/images/heatmap.small.png "Heatmap")

You can try a working example [here](/lab/heatmap/heatmap.html) _(work only on Chrome or Safari)_

I'm quite happy of the results. A considerable number of users interact with the call to action button in the middle of the page.

I'm surprise about the touch that happen at the corner of the screen.
An other consideration is the number of users that check the page in landscape mode.
And the landing is not optimizzed for landscape mode. I have to take care of in in the next few days.
