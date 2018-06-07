'use strict';

const ominpresentObject = {};


const addGlobally = Object.freeze(
    
    params => {

        if( !!params.addGlobally ) {

            throw new Error(
                
                'omnipresent error: cannot add addGlobally globally'
            );
        }

        Object.assign( ominpresentObject, params );
    }
);

ominpresentObject.addGlobally = addGlobally;


module.exports = ominpresentObject;