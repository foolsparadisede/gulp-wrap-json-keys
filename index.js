const wrap = require("./wrap");
const through = require("through2");
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-json-wrap-keys';

module.exports = () => {
    return through.obj(function (file, enc, callback) {
        var isBuffer = false,
            inputString = null,
            result = null,
            outBuffer=null;
        //Empty file and directory not supported
        if (file === null || file.isDirectory()) {
            this.push(file);
            return callback();
        }
        isBuffer = file.isBuffer();
        if(isBuffer){
            inputString = new String(file.contents);
            result = JSON.stringify(wrap(JSON.parse(inputString)))
            outBuffer = Buffer.from(result);
            var aFile = new gutil.File();
            aFile.path = file.path;
            aFile.contents = outBuffer;
            callback(null,aFile);
        }else{
            this.emit('error',
                new PluginError(PLUGIN_NAME,
                'Only Buffer format is supported'));
            callback();
        }
    });
}
