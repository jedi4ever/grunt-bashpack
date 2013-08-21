# Grunt-bashpack

> Create a bash executable (bashpack) from your node project

This makes is easy to create single-file executables for your projects

## Getting Started
This plugin requires Grunt `~0.4.1`

```shell
npm install grunt-bashpack --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('bashpack');
```

## The "bashpack" task

### Overview
In your project's Gruntfile, add a section named `bashpack` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bashpack: {
    startFile: './bin/yourstartfile',
    options: {
      // Task-specific options go here.
    },
  },
})
```

### Options

For the options see the documentation of bashpack <http://github.com/jedi4ever/bashpack>

### Usage Examples

```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  'bashpack': {
    startScript: 'bin/hello.js',
    darwin: {
      options: {
        outputFile: 'darwin.run',
        node: {
          version: 'latest',
          arch: 'x86'
        }
      },
    },
    linux: {
      options: {
        outputFile: 'linux.run',
        node: {
          version: '0.10.4',
          platform: 'linux',
          arch: 'x86'
        }
      },
    }
  }
});
```

