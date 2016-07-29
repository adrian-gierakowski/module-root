# How to contribute

The workflow of the this project uses [GitHub Flow](https://guides.github.com/introduction/flow/). Essentially this means all development is branched off of `master` and that what is in `master` is production ready.

The general workflow is:

* Create a feature branch off of `master` with a descriptive name
* Commit your changes
* Merge the the latest changes from from `master`
* Open a pull request (PR)
* Discuss and review your code
* Merge changes to `master`

## Squash commits

When accepting a PR please use the `Squash and merge` option.

## Proper commit messages

The first line of your commit message should begin with a tag followed by a summary statement of the work done. The tag could be the corresponding GitHub issue `(#123)`for tracking. If there isn't a tracking ID associated with your work, use
`(dev)`, `(doc)`, `(test)`.

Below your summary statement, skip one line and provide a detailed description or bulleted list of what is being delivered. For trivial changes, the tag and summary statement are all that's required.

An example commit message:

```
(#123) Added support for XYZ

- Implemented XYZ
- Documented XYZ in doc/xyz.md
- Updated feature list and linked to XYZ documentation
- Created green path and negative FVT in test/xyz.test.js
```

## Versioning & Publishing
This module follows [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html):

>Given a version number `MAJOR.MINOR.PATCH`, increment the:</br>
></br>
>`MAJOR` version when you make incompatible API changes,</br>
>`MINOR` version when you add functionality in a</br> backwards-compatible manner, and</br>
>`PATCH` version when you make backwards-compatible bug fixes.</br>
>Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

To change the version number, use the `npm version` command. This will run the test suite, create a commit for versioning the module, create a Git tag based on the version number, and push both the commit and tag to the remote server.

### Pre-release versioning

Pre-release versioning should be done from the `feature` branch, appropriately following [Semver](http://semver.org/spec/v2.0.0.html).

To bump the module's [ MAJOR | MINOR | PATCH ] number run:

    $ npm version [ premajor | preminor | prepatch ]

This will bump the corresponding number and append pre-release number 0. For example, given version 1.0.0:

	$ npm version premajor
	// 1.0.0 -> 2.0.0-0

To include your changes in the same pre-released version, just increment the pre-release number:

	$ npm version prerelease
	// 2.0.1-0 -> 2.0.1-1

### Normal versioning

Normal Versioning should be done **ONLY** from the `master` branch. To bump the module's [ MAJOR | MINOR | PATCH ] number run:

    $ npm version [ major | minor | patch ]

This will bump the corresponding version number or clear the pre-release version number:

	$ npm version patch
	// 1.2.3 -> 1.2.4
	// 1.2.3-12 -> 1.2.3

### Publishing
To publish a version to the private npm registry run:

    $ npm publish

To publish a pre-release version run:

    $ npm publish --tag beta

**IMPORTANT:** Once a package is published with a given name and version, that specific name and version combination can never be used again, even if it is removed with `npm unpublish`. Take care when publishing pre-released versions. The `beta` tag will overwrite the default `latest` tag and keep it from being used in production apps.

# Resources
* [Git Book Chapter 6.4: Git Tools - Squashing Commits](http://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits)
* [GitHub pull request documentation](https://help.github.com/send-pull-requests/)
* [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html)
* [npm-version](https://docs.npmjs.com/cli/version)
