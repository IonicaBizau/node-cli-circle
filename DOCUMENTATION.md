## Documentation

You can see below the API reference of this module.

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

