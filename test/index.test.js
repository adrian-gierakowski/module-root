'use strict';

let pkgJSON = require('../package.json');
let assert = require('assert');
let path = require('path');

describe('module-root', function () {

    it('should return root of this module', function () {
        let root = require('../');
        assert(root);
        assert.equal(root.path, path.join(__dirname, '..'))
        assert(root.require);
    });

    it('should return the root of dummy-module-1', function () {
        // dummy-module-1 exports its project path
        assert.equal(require('./dummy-module-1'), path.join(__dirname, './dummy-module-1'));
    });

    it('should return the root of dummy-module-1 by requiring dummy-module-2', function () {
        // dummy-module-2 exports internal module src/lib/foo which exports dummy-module-1
        // which exports its project path. All dummy-module-2 require statments use root.require
        assert.equal(require('./dummy-module-2'), path.join(__dirname, './dummy-module-1'));
    });
});
