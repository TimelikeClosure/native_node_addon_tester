"use strict";
const path = require('path');

function run(addon){
    return addon();
}

function runScript(){
    return run(
        require(
            path.join(__dirname, 'script', 'index')
        ).hello
    );
}

function runNative(){
    return run(
        require(
            path.join(__dirname, 'native', 'build', 'Release', 'index')
        ).hello
    );
}

module.exports = module = {
    script: runScript,
    native: runNative
};