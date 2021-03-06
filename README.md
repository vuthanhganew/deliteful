# deliteful [![Build Status](https://travis-ci.org/ibm-js/deliteful.png?branch=master)](https://travis-ci.org/ibm-js/deliteful)

This project provides a predefined set of components working on both desktop and mobile platforms.

One goal of the project is to
[converge the dijit and dojox/mobile widgets](https://docs.google.com/document/d/1_kgrX25ylxuhtZCRrqAoABMaSdgxjAQgpyd0Ap4xvZU/edit#)
into a single set of components.

Another goal is to
[build on emerging web standards](https://docs.google.com/document/d/1kqe3Oq7W6lg-JY_iqMl5G7SxGTD0uQ6FFIoP4KPAkUw/edit#heading=h.ct7kwnepj0cc).

The project only supports modern browsers/platforms: FF24+, Chrome latest, IE9/10+, Safari 7+,  Android 4.1+, iOS6+, WindowsPhone8+ (BB10+?)

## Status

No official release yet.

## Migration

This is a merge of the former dijit & dojox/mobile projects.

Migration requires manual steps listed [here](docs/migration.md).

## Issues

Bugs and open issues are tracked in the
[github issues tracker](https://github.com/ibm-js/deliteful/issues).

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

## Dependencies

This project requires the following other projects to run:
 * dojo
 * decor
 * delite
 * dpointer
 * ecma402
 * dcl (git clone https://github.com/uhop/dcl.git)
 * requirejs (git clone https://github.com/jrburke/requirejs.git)
 * requirejs-dplugins
 * requirejs-domready (git clone https://github.com/requirejs/domready)
 * dstore (git clone https://github.com/SitePen/dstore.git)

## Installation

_Bower_ release installation:

    $ bower install deliteful

_Manual_ master installation:

    $ git clone git://github.com/ibm-js/deliteful.git

Then install dependencies with bower (or manually from github if you prefer to):

	$ cd deliteful
	$ bower install

## Documentation

See the [docs directory](./docs) or, preferably, the
[documentation site](http://ibm-js.github.io/deliteful/docs/master/index.html).

