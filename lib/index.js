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
    this.radius = radius;
    var diameter = this.diameter = radius * 2;
    this.chr = chr || CliGraph.defaults.marks.point;
    this.graph = new CliGraph({
        height: diameter
      , width: diameter
      , marks: {
            point: this.chr
        }
    }).setFunctionX(function (x) {
        return Math.sqrt(diameter - x * x)
    }).setFunctionX(function (x) {
        return - Math.sqrt(diameter - x * x)
    }).setFunctionY(function (y) {
        return Math.sqrt(diameter - y * y)
    }).setFunctionY(function (y) {
        return - Math.sqrt(diameter - y * y)
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

    var graph = this.graph
      , lines = graph.toString().split("\n").filter(function (c) {
            return c.trim();
        })
      , strIndex = lines[0].length
      , cIndex = -1
      ;

    lines.forEach(function (c) {
        cIndex = c.indexOf(graph.options.marks.point);
        if (cIndex < strIndex) {
            strIndex = cIndex;
        }
    });

    return lines.map(function (c) {
        return c.substr(strIndex).trimRight();
    }).join("\n");
};

module.exports = CliCircle;
