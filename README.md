# navigation

A series of [Polymer](https://www.polymer-project.org/1.0/)-based web components for top level navigation use on D2L pages.

![screenshot of sample usage](/screenshots/navigation.png?raw=true)

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
* `--d2l-navigation-shadow-drop-border-display`: The default value is `block`, but this property can be used to hide the shadow by setting it to `none`.

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

Optionally, the max-width can be configured to match the max-width used by the LE by setting `widthType` to `normal`.

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

The `d2l-navigation-band` also includes a `slot` with a custom scrollbar and fading effects, but this has only been designed for the `d2l-organization-consortium-tabs` and should not be used for anything else right now.

***Relevant CSS class name:***
* `--d2l-branding-primary-color`: Used to customize the colour of the top navigation band.
* `--d2l-navigation-band-slot-height`: When using the slot, this is needed to setup the proper scrollbar and fading effects.

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

---

### d2l-navigation-iterator

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-navigation-iterator.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-navigation/d2l-navigation-iterator/d2l-navigation-iterator.html">
</head>
```

Then add the `d2l-navigation-iterator`.

![screenshot of default navigation iterator](/screenshots/d2l-navigation-iterator.png?raw=true)

```html
<d2l-navigation-iterator></d2l-navigation-iterator>
```

There is only one slot, and the default button text can be hidden with `hide-text`.

![screenshot of navigation iterator with hidden iterator button text and custom content](/screenshots/d2l-navigation-iterator-hide-text-custom.png?raw=true)

```html
<d2l-navigation-iterator hide-text>
	<span>User 1 of 17</span>
</d2l-navigation-iterator>
```

The iterator button labels can be customized with `previous-text` and `next-text`.

![screenshot of navigation iterator with hidden iterator button text and custom content](/screenshots/d2l-navigation-iterator-custom-buttons.png?raw=true)

```html
<d2l-navigation-iterator previous-text="Back" next-text="Forward"></d2l-navigation-iterator>
```

The iterator buttons can be hidden completely with `no-next` or `no-previous`.

![screenshot of navigation iterator with no next button](/screenshots/d2l-navigation-iterator-no-next.png?raw=true)
![screenshot of navigation iterator with no previous button](/screenshots/d2l-navigation-iterator-no-prev.png?raw=true)

```html
<d2l-navigation-iterator no-next></d2l-navigation-iterator>
<d2l-navigation-iterator no-previous></d2l-navigation-iterator>
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

### Visual Diff Testing

This repo uses the [@brightspace-ui/visual-diff utility](https://github.com/BrightspaceUI/visual-diff/) to compare current snapshots against a set of golden snapshots stored in source control.

The golden snapshots in source control must be updated by Github Actions.  If your PR's code changes result in visual differences, a PR with the new goldens will be automatically opened for you against your branch.

If you'd like to run the tests locally to help troubleshoot or develop new tests, you can use these commands:

```shell
# Install dependencies locally
npm i mocha -g
npm i @brightspace-ui/visual-diff puppeteer --no-save

# run visual-diff tests
mocha './test/**/*.visual-diff.js' -t 10000

# subset of visual-diff tests:
mocha './test/**/*.visual-diff.js' -t 10000 -g some-pattern

# update visual-diff goldens
mocha './test/**/*.visual-diff.js' -t 10000 --golden
```

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `master`. Read on for more details...

The [sematic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/master/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
