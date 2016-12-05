[![Build Status](https://travis-ci.org/WideEyesTech/we-vision-library.svg?branch=master)](https://travis-ci.org/WideEyesTech/we-vision-library)

#We Vision Library

Front end library to perform HTTP calls to the we vision 2 api.

## Instalation
`npm i --save we-vision-library`


##Usage

ES6:

```
  import {searchByImage, searchById, showProducts, getCategoryData} from 'we-vision-library'
```

ES5:

```
  'use strict';

  var _weVisionLibrary = require('we-vision-library');
```

All endPoints accept two arguments as literal Objects and return a Promise that will be resolved with the response body, or will be rejected if an unexpected error occurs:

```
// All endpoints have the same signature, this is just an example
searchById(body: Object, headers: Object)
	.then(body => console.log(body))
	.catch(err => console.error(err.message))
```

:)
