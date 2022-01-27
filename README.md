# Laravel Blade support for Prettier

> ⚠️ This plugin is still a work-in-progress. If you're trying it out, please keep this in mind.

This package includes a Prettier plugin that adds support for Laravel's Blade template engine. Much like Prettier, it is highly-opinionated and aims for consistency rather than configurability.

## Installation

This package can be installed via `npm`:

```bash
npm install https://github.com/ryangjchandler/prettier-plugin-blade
```

> This plugin is not currently available on NPM. The only way to install it currently is via the GitHub repository or a local symlink.

## Missing features?

If this plugin is currently missing features, please open an [issue](/issues). We would like to cover as many edge-cases as possible so all reports help.

Alternatively, you can contribute to the project by providing a failing test that we'll come back to fix at a later date.

## Contributing

All pull requests are welcome. We ask that you open your pull-request as soon as possible, even if it is a draft, so that we can avoid conflicting changes.

Our test suite is incredibly straight-forward too. Here's how to write a test for the plugin:

1. Create a new file inside of `tests/__fixtures__`. The file **should** be inside of a folder - if none of the existing folders make sense, create a new one.
2. Write your raw Blade source code inside of a new `.blade.php` file. The file name should loosely describe the test case.
3. After your raw Blade code, add a new line along with 4 `-` tokens (`----`).
4. On a new line, write your expectation. This should match the post-formatted Blade code.
5. Ensure the post-formatted Blade code has a trailing new line too (this is a common error and hard to spot in the console).
6. Run the test suite using `npm run test`!
