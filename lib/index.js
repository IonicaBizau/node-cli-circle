// Dependencies
var CliGraph = require("cli-graph");

// Configurations
CliGraph.defaults.marks = {
    hAxis: " "
  , vAxis: " "
  , center: " "
  , point: "."
  , rightArrow: " "
  , topArrow: " "
  , background: " "
};

/**
 * CliCircle
 * Creates a new instance of `CliCircle`.
 *
 * @name CliCircle
 * @function
 * @param {Number} radius The radius value.
 * @param {String} chr The character used for drawing the circle (default: `"."`).
 * @return {CliCircle} The `CliCircle` instance containing:
 *
 *  - `radius` (Number): The circle radius.
 *  - `diameter` (Number): The circle diameter.
 *  - `chr` (String): The point character.
 *  - `graph` (CliGraph): The graph instance.
 *
 */
function CliCircle(radius, chr) {
    if (this.constructor !== CliCircle) {
        return new CliCircle(radius);
    }

    // r ^ 2 = x ^ 2 + y ^ 2
    // y ^ 2 = r ^ 2 - x ^ 2
    // y = sqrt( r ^ 2 - x ^ 2)
    this.radius = radius;
    var diameter = this.diameter = radius * 2;
    this.chr = chr || CliGraph.defaults.marks.point;
    this.graph = new CliGraph({
        height: radius * 2
      , width: radius * 2
      , marks: {
            point: this.chr
        }
    }).setFunctionX(function (x) {
        return Math.sqrt(radius * radius - x * x)
    }).setFunctionX(function (x) {
        return - Math.sqrt(radius * radius - x * x)
    }).setFunctionY(function (y) {
        return Math.sqrt(radius * radius - y * y)
    }).setFunctionY(function (y) {
        return - Math.sqrt(radius * radius - y * y)
    });
}

/**
 * toString
 * Stringifies a circle.
 *
 * @name toString
 * @function
 * @return {String} The stringified circle.
 */
CliCircle.prototype.toString = function () {
    return this.graph.toString();
};

module.exports = CliCircle;
