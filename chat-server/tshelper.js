module.exports = {
    watchDirs: {
        model: {
            directory: 'app/io/controller', // files directory.
            // pattern: '**/*.(ts|js)', // glob pattern, default is **/*.(ts|js). it doesn't need to configure normally.
            // ignore: '', // ignore glob pattern, default to empty.
            generator: 'auto', // generator name, eg: class、auto、function、object
            interface: 'CustomController',  // interface name
            //declareTo: 'Context.model', // declare to this interface
            // watch: true, // whether need to watch files
            caseStyle: 'lower', // caseStyle for loader
            // interfaceHandle: val => `ReturnType<typeof ${val}>`, // interfaceHandle
            // trigger: ['add', 'unlink'], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
        }
    }
}

