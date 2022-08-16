# navigation

> Note: this is a ["labs" component](https://daylight.d2l.dev/developing/getting-started/component-tiers/). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://daylight.d2l.dev/developing/creating-component/before-building/#working-with-design)
> - [ ] [Architectural sign-off](https://daylight.d2l.dev/developing/creating-component/before-building/#web-component-architecture)
> - [x] [Continuous integration](https://daylight.d2l.dev/developing/testing/tools/#continuous-integration)
> - [x] [Cross-browser testing](https://daylight.d2l.dev/developing/testing/cross-browser/)
> - [x] [Unit tests](https://daylight.d2l.dev/developing/testing/tools/) (if applicable)
> - [x] [Accessibility tests](https://daylight.d2l.dev/developing/testing/accessibility/)
> - [x] [Visual diff tests](https://daylight.d2l.dev/developing/testing/visual-difference/)
> - [ ] Localization with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

A series of web components for top level navigation use in D2L applications.

![screenshot of sample usage](/screenshots/navigation.png?raw=true)

## Usage: Primary Components

> These are the components that should be used in the **VAST MAJORITY** of use cases

### d2l-navigation

Add the `d2l-navigation` component, and provide sub elements `d2l-navigation-main-header` & `d2l-navigation-main-footer` (along with their respective slot contents).

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation.js';
  import '@brightspace-ui-labs/navigation/d2l-navigation-main-header.js';
  import '@brightspace-ui-labs/navigation/d2l-navigation-main-footer.js';
</script>

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

Add the `d2l-navigation-immersive` component, providing values for the `backLinkHref` & `backLinkText`. Additionally, you may override any of the 3 slots (`left`, `middle`, `right`).
Please note that overridding the `left` slot will prevent the Back link from displaying. This should only be done in very specialized cases.

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation-immersive.js';
</script>

<d2l-navigation-immersive back-link-href="https://www.d2l.com" back-link-text="Back to D2L">
	<div class="d2l-typography d2l-body-standard" slot="middle">
		<p>Economics 101</p>
	</div>
	<div slot="right">
		...
	</div>
</d2l-navigation-immersive>
```

Optionally, the max-width can be configured to match the max-width used by the LE by setting `widthType` to `normal`.

## Secondary Components

> These are the components that make up the Primary Components. There might be an edge case or two where it makes sense to use one of these in isolation,
> but **PLEASE STRONGLY CONSIDER** using a Primary Component instead.

### d2l-navigation-band

![screenshot of navigation band](/screenshots/navigation-band.png?raw=true)

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation-band.js';
</script>

<d2l-navigation-band></d2l-navigation-band>
```

The `d2l-navigation-band` also includes a `slot` with a custom scrollbar and fading effects, but this has only been designed for the `d2l-organization-consortium-tabs` and should not be used for anything else right now.

***Relevant CSS class name:***
* `--d2l-branding-primary-color`: Used to customize the colour of the top navigation band.
* `--d2l-navigation-band-slot-height`: When using the slot, this is needed to setup the proper scrollbar and fading effects.

---

### d2l-navigation-main-header

Add the `d2l-navigation-main-header` component, and provide elements for the `left` and `right` slots.

![screenshot of navigation main header](/screenshots/navigation-main-header.png?raw=true)

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation-main-header.js';
</script>

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

Add the `d2l-navigation-main-footer` component, and provide elements for the `main` slot.

![screenshot of navigation main footer](/screenshots/navigation-main-footer.png?raw=true)

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation-main-footer.js';
</script>

<d2l-navigation-main-footer>
	<div slot="main"></div>
</d2l-navigation-main-footer>
```

***Slots:***

* `main` (required): Primary content of the footer. The footer will change in size to accommodate its contents

---

### d2l-navigation-link

(Placeholder for now)

***Relevant CSS class name:***
* `--d2l-navigation-primary-color`: Used to customize the hover colour of the highlight links and buttons

---

### d2l-navigation-button-icon

`<d2l-navigation-button-icon>` provides a button with an icon and optional text.

### Properties

| Property | Type | Description |
|--|--|--|
| `disabled` | Boolean | Disables the button |
| `text` | String, required | Text for the button |
| `icon` | String | Preset icon key (e.g. `tier1:gear`) |
| `no-highlight-border` | Boolean | Visually hides the highlight border when hovered/focused |
| `text-hidden` | Boolean | Visually hides the text |

---

### d2l-navigation-link-icon

Similar to `<d2l-navigation-button-icon>`, a link that comes with an icon and optional text.

![screenshot of navigation link icon](/screenshots/navigation-link-button-icon.png?raw=true)

### Properties

| Property | Type | Description |
|--|--|--|
| `href` | String, required | URL or URL fragment of the link |
| `text` | String, required | Text for the button |
| `icon` | String | Preset icon key (e.g. `tier1:gear`) |
| `text-hidden` | Boolean | Visually hides the text |

---

### d2l-navigation-iterator

![screenshot of default navigation iterator](/screenshots/d2l-navigation-iterator.png?raw=true)

```html
<script type="module">
  import '@brightspace-ui-labs/navigation/d2l-navigation-iterator.js';
</script>

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

### Linting

```shell
# eslint and lit-analyzer
npm run lint

# eslint only
npm run lint:eslint
```

### Testing

```shell
# lint & run headless unit tests
npm test

# unit tests only
npm run test:headless

# debug or run a subset of local unit tests
npm run test:headless:watch
```

### Visual Diff Testing

This repo uses the [@brightspace-ui/visual-diff utility](https://github.com/BrightspaceUI/visual-diff/) to compare current snapshots against a set of golden snapshots stored in source control.

The golden snapshots in source control must be updated by the [visual-diff GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/visual-diff).  If a pull request results in visual differences, a draft pull request with the new goldens will automatically be opened against its branch.

To run the tests locally to help troubleshoot or develop new tests, first install these dependencies:

```shell
npm install @brightspace-ui/visual-diff@X mocha@Y puppeteer@Z  --no-save
```

Replace `X`, `Y` and `Z` with [the current versions](https://github.com/BrightspaceUI/actions/tree/main/visual-diff#current-dependency-versions) the action is using.

Then run the tests:

```shell
# run visual-diff tests
npx mocha './test/**/*.visual-diff.js' -t 10000
# subset of visual-diff tests:
npx mocha './test/**/*.visual-diff.js' -t 10000 -g some-pattern
# update visual-diff goldens
npx mocha './test/**/*.visual-diff.js' -t 10000 --golden
```

### Running the demos

To start a [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) that hosts the demo page and tests:

```shell
npm start
```

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`. Read on for more details...

The [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

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
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
