
[![cli-circle](http://i.imgur.com/MzPIRPD.png)](#)

# cli-circle

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-cli-circle.svg)](https://travis-ci.org/IonicaBizau/node-cli-circle/) [![Version](https://img.shields.io/npm/v/cli-circle.svg)](https://www.npmjs.com/package/cli-circle) [![Downloads](https://img.shields.io/npm/dt/cli-circle.svg)](https://www.npmjs.com/package/cli-circle) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate ASCII circles with NodeJS.

## :cloud: Installation

```sh
$ npm i --save cli-circle
```


## :clipboard: Example



```js
// Dependencies
var Circle = require("cli-circle");

// Output the circle
console.log(Circle(5).toString());
// =>       • • • • •
//        •           •
//      •               •
//    •                   •
//    •                   •
//    •                   •
//    •                   •
//    •                   •
//      •               •
//        •           •
//          • • • • •
//
```

## :memo: Documentation


### `CliCircle(radius, chr, opts)`
Creates a new instance of `CliCircle`.

#### Params
- **Number** `radius`: The radius value.
- **String** `chr`: The character used for drawing the circle (default: `"."`).
- **Object** `opts`: Options passed to the `CliGraph` constructor.

#### Return
- **CliCircle** The `CliCircle` instance containing:
 - `radius` (Number): The circle radius.
 - `diameter` (Number): The circle diameter.
 - `chr` (String): The point character.
 - `graph` (CliGraph): The graph instance.

### `toString()`
Stringifies a circle.

#### Return
- **String** The stringified circle.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`cli-pie`](https://github.com/IonicaBizau/node-cli-pie)—Generate pie charts in terminal and text mode.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
