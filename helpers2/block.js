var util = require("util");
var dataHelpers = require("./data");
var marked = require("marked");

exports.link = link;
exports.identifiers = identifiers;
exports.md = md;

/**
Returns a markdown link to the 
*/
function link(options){
    return util.format(
        "[%s](#%s)", 
        options.fn(this), 
        dataHelpers.anchorName.call(this, options)
    );
}

function identifiers(options){
    var identifiers = dataHelpers.identifiers(options);
    return identifiers.reduce(function(prev, curr){
        return prev + options.fn(curr);
    }, "");
}

function md(options){
    return marked(options.fn(this).toString());
}