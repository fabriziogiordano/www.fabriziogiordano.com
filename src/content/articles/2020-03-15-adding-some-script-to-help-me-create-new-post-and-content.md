---
layout: "../../layouts/Layout.astro"
title: Added a node script to generate post template
slug: added-a-node-script-to-generate-post-template
description: I simply run `npm run new` to create a new post
heroImage: ""
pubDate: 2020-03-15 01:00:00
---

Simply:

```bash
npm run new
```

And some JS magic:

```js
const fs = require("fs");
const inquirer = require("inquirer");

(async () => {
  try {
    // Request a title, descriptionm, date (by default today date)
    const post = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Post Title: ",
      },
      {
        type: "input",
        name: "description",
        message: "Post Short Description: ",
      },
      {
        type: "input",
        name: "date",
        message: "Post Date",
        default: () => new Date().toISOString().split("T")[0],
      },
    ]);

    // Create a new folder
    const slug = slugify(`${post.date} ${post.title}`);
    const dirpath = `./content/blog/${slug}`;
    await fs.promises.mkdir(dirpath, { recursive: true });

    // Save a md base file
    await fs.promises.writeFile(
      `${dirpath}/index.md`,
      `---
title: ${post.title}
description: ${post.description}
date: "${post.date}"
---

<content>

`
    );
  } catch (e) {
    console.log("Error".bold.red);
    console.log(" 😱 " + e.message);
    //console.log(e);
  }
})();

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  let from = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ь",
    "ю",
    "я",
  ];
  let to = [
    "a",
    "b",
    "v",
    "g",
    "d",
    "e",
    "zh",
    "z",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "f",
    "h",
    "c",
    "ch",
    "sh",
    "sht",
    "y",
    "",
    "iu",
    "ia",
  ];
  for (let key in from) {
    str = str.replace(new RegExp(from[key], "g"), to[key]);
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}
```
