ember-browser-update
==============================================================================

Ember addon providing [browser-update.org](http://browser-update.org/) in your application.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-browser-update
```


Usage
------------------------------------------------------------------------------

By installing the addon the browser update notification will automatically be shown in outdated browsers.

You can configure browser update in your `config/environment.js` as follows:

```javascript
module.exports = function(environment) {
  let ENV = {
    browserUpdate: {
      vs: {i:11,f:-3,o:-3,s:-3,c:-3},
      style: 'corner',
      l: 'nl',
      shift_page_down: false,
      test: true
    }
  }
}
```

All configuration options are listed [here](http://browser-update.org/customize.html).


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
