KeepReading
==========================

The project is under development, but feel free to use it!

This simple ECMAScript 6 jQuery plugin is inspired by [Medium](https://medium.com/ "Medium") and their estimated reading time calculator.

KeepReading is a lightweight jQuery plugin that lets you display an estimated read time on your blog post, article etc. based on an average reading time per minute and text length.

* [See a demo](https://keepreading-6a1d7.firebaseapp.com "Demo page!")

Instructions
==========================

###### Basic use

To use the plugin you must include the latest jQuery and the plugin in the head or footer of your page.

Use 'keepreading.min.js' from dist folder.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script src="/path/keepreading.min.js"></script>
```

The plugin is pretty simple to use, all you have to do is to create an element with the following class of 'keepreading' and set the options. Now the plugin will calculate what the estimated reading time will be.

```
<article class="keepreading"></article>
```

To show the estimated read time and how many words the block of text contains use 'keepreading__time' for read time and 'keepreading__words' to display words. *(Note: You can allways changes the class names!)*

```
<article class="keepreading">
    <h5 class="keepreading__time"></h5>
    <span class="keepreading__words"></span>
</article>
```

With the above markup and the options below, you will be able to estimate the reading time and how many words the text contains. Please see the [demo](https://keepreading-6a1d7.firebaseapp.com "Demo page!"). *(Note: AverageReadingTime option is based on an average reader)*

```
$().keepReading({
    keepReading: '.keepreading',
    keepReadingWordsClass: '.keepreading__words',
    keepReadingWords: 'words',
    keepReadingTimeClass: '.keepreading__time',
    lessThanAMinuteMessage: 'Read time is less than a minute!',
    averageReadingTime: 240,
});
```

###### Remote/multiple remote files use

You have the ability to use remote files and show a preview of the text with an estimated reading time and how many words the remote file contains along with a read more button that wil be appended.

A remote file markup could look like this.

```
<article class="keepreading keepreading-remote">
    <h2 class="keepreading__heading">NASA Confirms 15 Days of Darkness in June 2017?</h2>
    <h5 class="keepreading__time"></h5>
    <span class="keepreading__words"></span>
    <p></p>
</article>
```

A remote file preview markup could look like this where you would iterate through each text block on your page and use data attributes to declare the file and target for each text block.

```
<div class="article-remote">
    <article class="keepreading-preview" data-file="/remote-a.html" data-target="article">
        <h5 class="keepreading__time-remote"></h5>
        <span class="keepreading__words-remote"></span>
    </article>

    <article class="keepreading-preview" data-file="/remote-b.html" data-target="article">
        <h5 class="keepreading__time-remote"></h5>
        <span class="keepreading__words-remote"></span>
    </article>

    <article class="keepreading-preview" data-file="/remote-c.html" data-target="article">
        <h5 class="keepreading__time-remote"></h5>
        <span class="keepreading__words-remote"></span>
    </article>

    <article class="keepreading-preview" data-file="/remote-d.html" data-target="article">
        <h5 class="keepreading__time-remote"></h5>
        <span class="keepreading__words-remote"></span>
    </article>
</div>
```

The markup for the remote files are followed by various options that are target different classes.

```
$().keepReading({
    keepReadingPreview: '.keepreading-preview',
    keepReadingHeading: '.keepreading__heading',
    keepReadingRemote: '.keepreading p',
    keepReadingWordsClass: '.keepreading__words',
    keepReadingRemoteWordsClass: '.keepreading__words-remote',
    keepReadingWords: 'words',
    keepReadingTimeClass: '.keepreading__time',
    keepReadingTimeRemoteClass: '.keepreading__time-remote',
    lessThanAMinuteMessage: 'Read time is less than a minute!',
    averageReadingTime: 240,
    keepReadingWordCount: true
});
```

Lunch project
==========================

* First of all download or clone this repo ;P

You'll need to have Gulp installed. If you already have Gulp installed, you can skip the following line.
To install gulp simply run the following line in your terminal:
* `npm install -g gulp`

* Run `npm-install` to install dev dependencies.

During development mode, run the default task so you'll have watchers and browser sync.
* Run `gulp` to start project.

When project is ready to deploy, simply do the following:
* Run `gulp deploy`
* All of the files you need will be in /dist with your css compressed and js compressed!

Update dependencies
==========================

In order to ensure that all dependencies are updated use:

https://www.npmjs.org/package/npm-check-updates

`$ npm install -g npm-check-updates`

`$ npm-check-updates -u`

`$ npm install`

This will automatically adjusts a package.json with the latest version of all dependencies!

TODO
==========================

- [ ] Replace all static markup text to be dynamic in options!
- [ ] Add lix calculator to measure readability by indicating the difficulty of reading the text!
- [ ] Make it possible to add custom class name on the appended read more btn!

Contributing
==========================

Contributions are welcome!
