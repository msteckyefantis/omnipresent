# Omnipresent🧞‍♀️

### The npm module that lets you access your common logic everywhere


#### Example:

##### Setup your global logic in any file.

```.js
'use strict';

const { addGlobally } = require( 'omnipresent' );


addGlobally({

    usefulFunction: x => (2 * x),

    utils: require( './utils' ),
});
```

##### Now in any file you can access your global logic by doing the following:
```.js
'use strict';

const { usefulFunction } = require( 'omnipresent' );


console.log( usefulFunction( 2 ) ); // logs 4
```