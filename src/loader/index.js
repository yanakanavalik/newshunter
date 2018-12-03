// to improve and complete!

let loaderUtils = require('loader-utils');
let RefParser = require('json-schema-ref-parser');

module.exports = function(source) {
    let parsedQuery = loaderUtils.parseQuery(this.query);
    let callback = this.async();
    let parser = new RefParser();

    this.cacheable && this.cacheable();

    parser.dereference(parsedQuery.useSource ? JSON.parse(source) : this.resourcePath)
        .then(handleResolveSuccess.bind(this))
        .catch(callback);

    function handleResolveSuccess(schema) {
        let json = JSON.stringify(schema, null, 2);
        parser.$refs.paths().map( () => {
            this.addDependency()
        });
        callback(null, 'module.exports = ' + json + ';', schema);
    }
};