var CliGraph = require("cli-graph");

// Configurations
CliGraph.defaults.marks = {
    hAxis: " "
  , vAxis: " "
  , center: " "
  , point: " "
  , rightArrow: " "
  , topArrow: " "
  , background: " "
};

function CliCircle(radius) {
    this.radius = radius;
}

CliCircle.prototype.toString = function () {
    var graph = new CliGraph({
        height: this.radius / 2
      , width: this.radius / 2
    }).setFunction(function (x) {

    });
};
