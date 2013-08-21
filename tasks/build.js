/*
 * bashpack
 * https://github.com/patrick/grunt-bashpack
 *
 * Copyright (c) 2013 Patrick Debois
 * Licensed under the MIT license.
 */

'use strict';

var BashPack = require('bashpack');

module.exports = function(grunt) {

  grunt.registerMultiTask('bashpack', 'Build a bashpack', function() {

    var done = this.async();

    // startScript is requirted
    grunt.config.requires('bashpack.startScript');

    var startScript = grunt.config.get('bashpack.startScript');

    var options = this.options({
      force: true,    // We allow the bashpack.run file to be overriden
      logMute: false  // And logs will be shown
    });

    var bashPack = new BashPack(options);

    // Now let's build the pack
    bashPack.build('.',  startScript, options, function(err, filename) {
      if (err) {
        grunt.fail.fatal(err);
        done(err);
      } else {
        grunt.log.writeln('Succesfully created bashpack ' +  filename);
        grunt.log.writeln('You can now try your bashpack:\n');
        grunt.log.writeln('./' + filename);
        done();
      }
    });

  });

};
