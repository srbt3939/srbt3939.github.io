document.addEventListener("DOMContentLoaded", function () {
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", 300)
        .attr("height", 200);

    svg.append("circle")
        .attr("cx", 150)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "steelblue");   
});