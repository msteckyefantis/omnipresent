'use strict';
/* jshint expr: true */

const { expect } = require( 'chai' );

const omnipresent = require( '../' );


describe( 'index.js', function() {

    it( '.addGlobally - normal operation', function() {

        omnipresent.addGlobally({

            usefulFunction: x => 2 * x
        });

        expect( omnipresent.usefulFunction( 2 ) ).to.equal( 4 );
    });

    it( 'error: .addGlobally - trying to add addGlobally to globally', function() {

        let erroredAsExpected = false;

        try {
            
            omnipresent.addGlobally({

                addGlobally: x => 2 * x
            });

        } catch( err ) {
            
            if(
                err.message ===
                'omnipresent error: cannot add addGlobally globally'
            ) {

                erroredAsExpected = true;
            }
        }

        expect( erroredAsExpected ).to.be.true;
    });
});