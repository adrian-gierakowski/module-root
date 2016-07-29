'use strict';
let fs = require('fs');
let path = require('path');
let _ = require('lodash');

// Truncate node_modules from paths
let paths = _.map(module.parent.paths, (mPath) => {
    return path.join(mPath, '..');
});

// Get the path of the calling module's project root (Marked with the nearest package.json)
let rootPath = _.find(paths, (mPath) => {
    try {
        return !!fs.statSync(path.join(mPath, 'package.json'))
    } catch (e) {
        return false;
    }
});

// Throw if no project root exists (no package.json in parent paths)
if (!rootPath) throw new Error(`Could not locate a package.json in paths: ${paths}`);

// Get module cache id
let id = path.basename(rootPath);

if (require.cache[id]) { // Export from cache
    module.exports = require.cache[id].exports;

} else { // Set exports
    exports.path = rootPath;
    exports.require = function(p) {
        return require(`${rootPath}/${p}`);
    }

    // Rename module cache id
    require.cache[id] = require.cache[require.resolve('./')];
    delete require.cache[require.resolve('./')];
}
