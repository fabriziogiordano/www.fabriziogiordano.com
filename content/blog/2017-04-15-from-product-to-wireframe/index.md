---
title: From Product to Wireframe
description: From Product to Wireframe
excerpt: From Product to Wireframe
date: "2017-04-15"
---

![Storyboards](/assets/images/posts/Storyboard.png)

Wireframe goal should be to focus on the “why” of the product. The design and UX should focus on the “how”.

Recently I was planning to clean up the UX and add some new features to an old mobile app of mine: **Bike Plus NYC** [iOS](https://itunes.apple.com/us/app/bike-plus-nyc/id881296492)
| [Android](https://play.google.com/store/apps/details?id=com.fabriziogiordano.bikeplusnyc&hl=en).

I started by taking some screenshots of the current app and then importing them in [Sketch](https://twitter.com/sketchapp).

![BikePlus App Screenshot](/assets/images/posts/bike_plus_app_screenshot.png)

After few iterations and new artboards and I realized I needed add phone frame around those to give a little bit more perspective.

I had 3 options:

- **Manually** edit each artboard. Tedious and boring activity. And not easy to switch from an iPhone case to an Android case. **No go**;
- **Write a Sketch plugin** that parses each artboard, add a new layer, apply the case and then skew all other layers to fit into the screen area. **Overkill**;
- **Write a simple script** that just combines 2 images. Computers are good at this tasks. **Yes go**;

I opted for a simple script.

The script had to combine the artboard and a phone case:

![Combine the phone case with an artboard](/assets/images/posts/wireframe_2_images.png)

I wrote a quick script which magically handled the work:

<script src="https://gist.github.com/fabriziogiordano/2409dc6decf700199054.js"></script>

I just had to export the artboards and run a script.
All artboards were stored in *./composite* folder and wrapped in a nice phone frame.

![Wireframe with Colors](/assets/images/posts/wireframe_colors.png)

The colors were distracting. So I applied a filter to the artboards to remove the colors.

_convert_ has a nice _grayscale_ filter out of the box. I just had to add these few lines:

<script src="https://gist.github.com/fabriziogiordano/faa07708099efbe678e3.js"></script>

Here the final result:
![Wireframe with Colors](/assets/images/posts/wireframe_gray.png)

I can keep working in Sketch and import these new images in a presentation or on storyboard like this one:

![Storyboards](/assets/images/posts/Storyboard.png)

See you next time.

> > I currently work at Zillow. “Opinions expressed are solely my own and do not express the views or opinions of my employer.”
