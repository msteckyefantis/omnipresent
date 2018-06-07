'use strict';

const globalObject = {};


const addGlobally = Object.freeze(
    
    params => {

        if( !!params.addGlobally ) {

            throw new Error(
                
                'globally error: cannot add addGlobally globally'
            );
        }

        Object.assign( globalObject, params );
    }
);

globalObject.addGlobally = addGlobally;


module.exports = globalObject;