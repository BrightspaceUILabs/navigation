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

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation.html`:

### Primary Components

#### d2l-navigation

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation.html">
</head>
```

Wrapper components that packages up all other navigation components for ease of use.

![screenshot of navigation](/screenshots/navigation.png?raw=true)

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
	<slot></slot>
</d2l-navigation>
```

### Secondary components

#### d2l-navigation-band

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-band.html">
</head>
```

Solid colour band that runs along the top of the navigational header.

![screenshot of navigation band](/screenshots/navigation-band.png?raw=true)

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

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-header.html">
</head>
```

Upper container of the standard navigation bar used in the LMS.

![screenshot of navigation main header](/screenshots/navigation-main-header.png?raw=true)

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
	<slot name="left"></slot>
	<slot name="right"></slot>
</d2l-navigation-main-header>
```

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
