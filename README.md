# module-root

`module-root` will always resolve to your project's root directory making it easy to reference & require files from the calling module's root project directory. This module is intended for **production** use.

## Install

``` sh
$ npm install --save module-root
```

## Usage

e.g. - test/lib/utils/foo.test.js
``` js
// Annoying
let foo = require('../../../src/lib/utils/foo');

// Better :)
let root = require('module-root');
let foo = root.require('src/lib/utils/foo');
```

e.g. - src/server/app.js
``` js
// Annoying
app.use(express.static(path.join(__dirname, '../../dist'));

// Better :)
let root = require('module-root');
app.use(express.static(root.path + '/dist'));
```
