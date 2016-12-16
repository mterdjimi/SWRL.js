var should = require('should');
var rdflib = require("rdflib");

var SWRL = require('../SWRL.js');

describe('Instantiate SWRL Rule manually', function () {
    it('should correctly instantiate the following rule', function () {
        var atom = new SWRL.SWRLAtom(),
            uriRef = 'http://example.com';
            rule = new SWRL.SWRLRule(atom, atom, uriRef, 'This is an example.');
    });
}); 
