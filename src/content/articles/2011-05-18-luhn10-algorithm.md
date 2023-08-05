---
layout: "../../layouts/Layout.astro"
title: Luhn10 algorithm
slug: luhn10-algorithm
heroImage: ""
description: Luhn10 algorithm
pubDate: 2011-05-18 01:00:00
---

I just discovered today an intersting Gist from [Thomas Fuchs](https://gist.github.com/madrobby "Thomas Fuchs").
This is an implementation of the [Luhn 10 algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm "Luhn 10 algorithm")
also known as **"modulus 10"** algorithm.

In this Gist I also learned a new way to convert a string in an integer:

```
d = ~~a[b];
```

nice eh.

Here the gist:

<script src="https://gist.github.com/976805.js"></script>
