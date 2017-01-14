KeepReading
==========================

This simple ECMAScript 6 jQuery plugin is inspired by [Medium](https://medium.com/ "Medium"). Keep Reading lets you display an estimated read time on your blog post, article etc. based on an average reading time per minute and text length.

* [See a demo](https://github.com/danielmalmros "Demo page!")

Instructions
==========================

Include jQuery and the plugin in the head or footer of your page.

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

$ `npm install -g npm-check-updates`

$ `npm-check-updates -u`

$ `npm install`

This will automatically adjusts a package.json with the latest version of all dependencies!

Contributing
==========================

Contributions are welcome!
