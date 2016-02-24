Task to publish *GitHub Pages*.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-gh-pages
```

Dependencies:

- We must have installed the `git` command.

## Task

To publish *GitHub Pages*, we must invoke the task as follows:

```
ghpages(opts, config)
```

The `config` options:

- `type` (string). The *GitHub Pages* type: `project`.
- `src` (string). The directory to publish into the `gh-pages` branch when `type` is `project`.

Example:

```
const ghpages = require("justo-plugin-gh-pages");

ghpages("Publish GitHub Pages", {
  type: "project",
  src: "dist/"
});
```
