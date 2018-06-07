# Globally🌍🌎🌏

### Access your common logic globally


#### Example:

##### Setup your global logic in any file.

```.js
'use strict';

const { addGlobally } = require( 'globally' );


addGlobally({

    usefulFunction: x => (2 * x),

    utils: require( './utils' ),
});
```

##### Now in any file you can access your global logic by doing the following:
```.js
'use strict';

const { usefulFunction } = require( 'globally' );


console.log( usefulFunction( 2 ) ); // logs 4
```