'use strict';
/* jshint expr: true */

const { expect } = require( 'chai' );

const globally = require( '../' );


describe( 'index.js', function() {

    it( '.addGlobally - normal operation', function() {

        globally.addGlobally({

            usefulFunction: x => 2 * x
        });

        expect( globally.usefulFunction( 2 ) ).to.equal( 4 );
    });

    it( 'error: .addGlobally - trying to add addGlobally to globally', function() {

        let erroredAsExpected = false;

        try {
            
            globally.addGlobally({

                addGlobally: x => 2 * x
            });

        } catch( err ) {
            
            if(
                err.message ===
                'globally error: cannot add addGlobally globally'
            ) {

                erroredAsExpected = true;
            }
        }

        expect( erroredAsExpected ).to.be.true;
    });
});