# navigation
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/navigation)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A series of [Polymer](https://www.polymer-project.org/1.0/)-based web components for top level navigation use on D2L pages.

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-navigation` can be installed from [Bower][bower-url]:
```shell
bower install d2l-navigation
```

## Usage


![screenshot of sample usage](/screenshots/navigation-band.png?raw=true)

### Primary Components

#### d2l-navigation

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation.html">
</head>
```

Then add the `d2l-navigation`, and provide sub elements `d2l-navigation-main-header` & `d2l-navigation-main-footer` (along with their respective slot contents).

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
	<link rel="import" href="../d2l-colors/d2l-colors.html">
    <link rel="import" href="d2l-navigation.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-navigation>
	<d2l-navigation-main-header>
		<div slot="left" class="d2l-navigation-header-left">This should be on the left.  As the width changes it shrinks as needed.</div>

		<div slot="right" class="d2l-navigation-header-right">This should be on the right.  It doesn't shrink.</div>
	</d2l-navigation-main-header>
	<d2l-navigation-main-footer>
		<div slot="main" class="d2l-navigation-s-main-wrapper">Stuff goes in here (small border above and below)</div>
	</d2l-navigation-main-footer>
</d2l-navigation>
```

### Secondary components

#### d2l-navigation-band

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-band.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-band.html">
</head>
```

Solid colour band that runs along the top of the navigational header.



<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-typography/d2l-typography.html">
	<link rel="import" href="../d2l-colors/d2l-colors.html">
	<link rel="import" href="d2l-navigation-band.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-navigation-band></d2l-navigation-band>
```

#### d2l-navigation-main-header

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-main-header.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-header.html">
</head>
```

Then add the `d2l-navigation-main-header`, and provide elements for the `left` and `right` slots.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-typography/d2l-typography.html">
	<link rel="import" href="../d2l-colors/d2l-colors.html">
	<link rel="import" href="d2l-navigation-main-header.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-navigation-main-header>
	<div slot="left"></div>
	<div slot="right"></div>
</d2l-navigation-main-header>
```

***Slots:***

* `left` (required):
* `right` (required):

#### d2l-navigation-main-footer

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-main-footer.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-footer.html">
</head>
```

Then add the `d2l-navigation-main-footer`, and provide elements for the `main` slot.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-typography/d2l-typography.html">
	<link rel="import" href="../d2l-colors/d2l-colors.html">
	<link rel="import" href="d2l-navigation-main-footer.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-navigation-main-footer>
	<div slot="main"></div>
</d2l-navigation-main-footer>
```

***Slots:***

* `main` (required):

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-navigation
[bower-image]: https://badge.fury.io/bo/d2l-navigation.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/navigation
[ci-image]: https://travis-ci.org/BrightspaceUI/navigation.svg?branch=master
