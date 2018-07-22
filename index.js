'use strict';

const omnipresentObject = {};


const addGlobally = Object.freeze(
    
    params => {

        if( params.hasOwnProperty( 'addGlobally' ) ) {

            throw new Error(
                
                'omnipresent error: cannot add addGlobally globally'
            );
        }

        Object.assign( omnipresentObject, params );
    }
);

omnipresentObject.addGlobally = addGlobally;


module.exports = omnipresentObject;