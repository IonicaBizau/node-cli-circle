![CLI Circle](http://i.imgur.com/MzPIRPD.png)

# `cli-circle`
Generate ASCII circles with NodeJS.

## Installation
Run the following commands to download and install the application:

```sh
$ npm install cli-circle
```

## Example
```js
var Circle = require("cli-circle");

console.log(Circle(100).toString());
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
