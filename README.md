
[![cli-circle](http://i.imgur.com/MzPIRPD.png)](#)

# cli-circle

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-cli-circle.svg)](https://travis-ci.org/IonicaBizau/node-cli-circle/) [![Version](https://img.shields.io/npm/v/cli-circle.svg)](https://www.npmjs.com/package/cli-circle) [![Downloads](https://img.shields.io/npm/dt/cli-circle.svg)](https://www.npmjs.com/package/cli-circle)

> Generate ASCII circles with NodeJS.

## :cloud: Installation

```sh
$ npm i --save cli-circle
```


## :clipboard: Example



```js
const circle = require("cli-circle");

// Output the circle
console.log(circle(5).toString());
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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`cli-pie`](https://github.com/IonicaBizau/node-cli-pie)—Generate pie charts in terminal and text mode.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
