var rdflib = require('rdflib');

SWRLError = {
    EmptyOrNullRuleAxiomMember: function() {
        return new ReferenceError('Rule axiom cannot include empty/null antecedent nor empty/null consequent');
    },
    AnnotationWithoutURIRef: function(ann) {
        return new ReferenceError('Annotation '+ann+' of the rule axiom must refer to an URIRef');
    },
    IllegalURI: function(uri) {
        return new TypeError('Supplied URIReference is not valid: '+uri.constructor.name);
    },
    SWRLAtomTypeExpected: function(ant, cons) {
        return new TypeError('Supplied: '+ant.constructor.name+','+cons.constructor.name+'; expected: SWRLAtom,SWRLAtom');
    }    
};

SWRLRule = function(ant, cons, uriRef, annotation) {
    if (!ant || !cons) {
        throw SWRLError.EmptyOrNullRuleAxiomMember();
    }
    if (!(ant instanceof SWRLAtom) || !(cons instanceof SWRLAtom)) {
        throw SWRLError.SWRLAtomTypeExpected(ant, cons);
    } 
    if (annotation && !uriRef) {
        throw SWRLError.AnnotationWithoutURIRef(annotation);
    }
    if (uriRef == ant || uriRef == cons) {
        throw SWRLError.IllegalURI(uriRef);
    }

    this.Implies = {
        antecedent: ant,
        consequent: cons
    };

    if (uriRef) {
        this.Implies[uriRef] = {};
        if (annotation) {
            this.Implies[uriRef] = annotation;
        }        
    }
};

SWRLAtom = function() {
};

IObject = function() {

};

module.exports = {
    SWRLRule: SWRLRule,
    SWRLAtom: SWRLAtom
};