// render class that generates predefined components

export class Render {

    public locations = {

        nav: document.getElementsByTagName("nav")[0],
        main: document.getElementsByTagName("main")[0],
        footer: document.getElementsByTagName("footer")[0]
    };

    // METHODS //

    public makeCircle = (dimensions: number = 100, z: number = 1, unit: string = "px", bgColor: string = "black", txtColor: string = "white") => {

        // create a div element
        let circle = document.createElement("div");

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