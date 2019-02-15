# navigation
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/navigation)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A series of [Polymer](https://www.polymer-project.org/1.0/)-based web components for top level navigation use on D2L pages.

![screenshot of sample usage](/screenshots/navigation.png?raw=true)

## Installation

`d2l-navigation` can be installed from [Bower][bower-url]:
```shell
bower install d2l-navigation
```

## Usage: Primary Components

> These are the components that should be used in the **VAST MAJORITY** of use cases

### d2l-navigation

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the following:

* `d2l-navigation.html`
* `d2l-navigation-main-header.html`
* `d2l-navigation-main-footer.html`

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation.html">
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-header.html">
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-footer.html">
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

***Relevant CSS class name:***
* `--d2l-navigation-shadow-gradient-display`: The default value is `block`, but this property can be used to hide the gradient by setting it to `none`.  Instead of doing this, **PLEASE STRONGLY CONSIDER** fixing the issues with the z-index elements on your page.  This was added to address an issue we've seen with a few pages that use tables with sticky headers.

### d2l-navigation-immersive

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the following:

* `d2l-navigation-immersive.html`

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-immersive.html">
</head>
```

Then add the `d2l-navigation-immersive`, providing values for the `backLinkHref` & `backLinkText`. Additionally, you may override any of the 3 slots (`left`, `middle`, `right`).
Please note that overridding the `left` slot will prevent the Back link from displaying. This should only be done in very specialized cases.

`d2l-navigation-immersive` can optionally have a max width set to match your content.  Simply set the `--d2l-navigation-immersive-content-max-width` css variable to your desired width.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
	<link rel="import" href="../d2l-colors/d2l-colors.html">
    <link rel="import" href="d2l-navigation-immersive.html">
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
<d2l-navigation-immersive back-link-href="https://www.d2l.com" back-link-text="Back to D2L">
	<div class="d2l-typography d2l-body-standard" slot="middle">
		<p>Economics 101</p>
	</div>
	<div slot="right">
		<d2l-navigation-button text="A button">One Button</d2l-navigation-button>
		<d2l-navigation-button-close></d2l-navigation-button-close>
		<d2l-navigation-button text="Another button">Two Button</d2l-navigation-button>
	</div>
</d2l-navigation-immersive>
```

## Secondary Components

> These are the components that make up the Primary Components. There might be an edge case or two where it makes sense to use one of these in isolation,
> but **PLEASE STRONGLY CONSIDER** using a Primary Component instead.

### d2l-navigation-band

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-band.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-band.html">
</head>
```

Then add the `d2l-navigation-band`.

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

***Relevant CSS class name:***
* `--d2l-branding-primary-color`: Used to customize the colour of the top navigation band.

---

### d2l-navigation-main-header

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-main-header.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-header.html">
</head>
```

Then add the `d2l-navigation-main-header`, and provide elements for the `left` and `right` slots.

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
	<div slot="left"></div>
	<div slot="right"></div>
</d2l-navigation-main-header>
```

***Slots:***

* `left` (required): Secondary content (that will shrink with page size) oriented on the left side of the centre gutter (whitespace)
* `right` (required): Primary content (that will not shrink with page size) oriented on the right side of the centre gutter (whitespace)

---

### d2l-navigation-main-footer

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-main-footer.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-main-footer.html">
</head>
```

Then add the `d2l-navigation-main-footer`, and provide elements for the `main` slot.

![screenshot of navigation main footer](/screenshots/navigation-main-footer.png?raw=true)

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

* `main` (required): Primary content of the footer. The footer will change in size to accommodate its contents

---

### d2l-navigation-button & d2l-navigation-link

(Placeholder for now)

***Relevant CSS class name:***
* `--d2l-navigation-primary-color`: Used to customize the hover colour of the highlight links and buttons

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
