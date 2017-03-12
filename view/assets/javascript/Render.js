// render class that generates predefined components
"use strict";
var Render = (function () {
    function Render() {
        this.locations = {
            nav: document.getElementsByTagName("nav")[0],
            main: document.getElementsByTagName("main")[0],
            footer: document.getElementsByTagName("footer")[0]
        };
        // METHODS //
        this.makeCircle = function (dimensions, z, unit, bgColor, txtColor) {
            if (dimensions === void 0) { dimensions = 100; }
            if (z === void 0) { z = 1; }
            if (unit === void 0) { unit = "px"; }
            if (bgColor === void 0) { bgColor = "black"; }
            if (txtColor === void 0) { txtColor = "white"; }
            // create a div element
            var circle = document.createElement("div");
            // style the HTML element dimensions
            circle.style.width = dimensions + unit;
            circle.style.height = dimensions + unit;
            circle.style.borderRadius = (dimensions / 2) + unit;
            // style the HTML element display
            circle.style.display = "flex";
            circle.style.justifyContent = "center";
            circle.style.alignItems = "center";
            // style the HTML element colors
            circle.style.backgroundColor = bgColor;
            // style the HTML text
            circle.style.color = txtColor;
            circle.style.fontSize = "2em";
            // style the box-shadow
            // add class circle
            circle.setAttribute("class", "circle");
            return circle;
        };
    }
    return Render;
}());
exports.Render = Render;
//# sourceMappingURL=Render.js.map