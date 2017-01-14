KeepReading
==========================

The project is under development, but feel free to use it!

This simple ECMAScript 6 jQuery plugin is inspired by [Medium](https://medium.com/ "Medium") and their estimated reading time calculator.

Keep Reading is a lightweight jQuery plugin that lets you display an estimated read time on your blog post, article etc. based on an average reading time per minute and text length.

* [See a demo](https://github.com/danielmalmros "Demo page!")

Instructions
==========================

To use the plugin you must include the latest jQuery and the plugin in the head or footer of your page.

Use 'keepreading.min.js' from dist folder.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script src="/path/keepreading.min.js"></script>
```

The plugin is pretty simple to use, all you have to do is to create an element with the following class of 'keepreading'. Now the plugin will calculate what the estimated reading time will be.

```
<article class="keepreading"></article>
```

To show the estimated read time and how many words the block of text contains use 'keepreading__time' for read time and 'keepreading__words' to display words.

```
<article class="keepreading">
    <h5 class="keepreading__time"></h5>
    <span class="keepreading__words"></span>
</article>
```

Lunch project
==========================

* First of all download or clone this repo ;P

You'll need to have Gulp installed. If you already have Gulp installed, you can skip the following line.
To install gulp simply run the following line in your terminal:
* `npm install -g gulp`

* Run `npm-install.cmd` to install dev dependencies. On mac fire up terminal and type `npm install` use sudo if needed.

During development mode, run the default task so you'll have watchers and browser sync.
* Run `start-beast.cmd` to set fire on this beast!

When project is ready to deploy, simply do the following:
* Run `deploy-beast.cmd`
* All of the files you need will be in /dist with your images optimized, css compressed and js compressed!

Update dependencies
==========================

In order to ensure that all dependencies are updated use:

https://www.npmjs.org/package/npm-check-updates

`$ npm install -g npm-check-updates`

`$ npm-check-updates -u`

`$ npm install`

This will automatically adjusts a package.json with the latest version of all dependencies!

Contributing
==========================

Contributions are welcome!
