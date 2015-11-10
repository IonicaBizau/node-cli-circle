[![cli-circle](http://i.imgur.com/MzPIRPD.png)](#)

# cli-circle [![Support this project][donate-now]][paypal-donations]

Generate ASCII circles with NodeJS.

## Installation

```sh
$ npm i cli-circle
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`cli-pie`](https://github.com/IonicaBizau/node-cli-pie)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md