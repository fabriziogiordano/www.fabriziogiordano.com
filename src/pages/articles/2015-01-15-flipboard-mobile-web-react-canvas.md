---
layout: "../../layouts/Article.astro"
title: Flipboard implementation of the mobile web in canvas - 60FPS but 15,000 Speed Index and 22Mb size
description: Flipboard implementation of the mobile web in canvas - 60FPS but 15,000 Speed Index and 22Mb size
pubDate: "Jan 15 2015"
excerpt: 60 FPS but 22Mb of site.
---

[Flipboard](http://engineering.flipboard.com/2015/02/mobile-web/) relased today a new web site and in particular a new the mobile web experience.
In my opinion it is a development/execution **masterpiece** for what mobile web can allow today.

### However

I was opening the site on a LTE network and the page took a good deal to load.
Well they have a speed index of [15,000](http://www.webpagetest.org/result/150211_HM_58A/) and not even completely loaded.

**What?@?**

A good speed index should be 5,000. Over 7,500 is bad. 15,000 is terrible.

There are some rocky mistakes:

- 2.5Mb animated Gif;
- many images over 1Mb;
- 500Kb JavaScript (probably React and other bundled js) not gzipped.

They will fix it, I am sure.

### My point is

_Well I do not know_ but I think a service as Fliboard where the mission is to allow people to consume content easly should focus more on provide the content quickly and then make it look pretty.
Flipboard did an outstading work. Now I hope they will optimize it a little and not only the 60FPS.

### Fun fact

There are not StyleSheet requests. Amazing.
