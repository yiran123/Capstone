import * as d3 from 'd3'
const circle = {
    2: {
        r: 9,
        fill: '#202020',
        x: 150,
        y: 20
    },
    4: {
        r: 7,
        fill: '#B4BDC3',
        x: 180,
        y: 180
    },
    6: {
        r: 7,
        fill: '#B7EAFF',
        x: 300,
        y: 50
    },
    8: {
        r: 6,
        fill: '#72828E',
        x: 220,
        y: 100
    },
    16: {
        r: 4,
        fill: '#B0D2E0',
        x: 100,
        y: 100
    },
}
const data = [
    { name: "flare", title: "flare", group: 2, value: 0 },
    { name: "animate", title: "flare", group: 4, value: 0 },
    { name: "animate", title: "flare", group: 6, value: 0 },
    { name: "ArrayInterpolator", title: "flare", group: 8, value: 0 },
    { name: "ArrayInterpolator", title: "flare", group: 16, value: 0 },
]



const width = 416
const height = 304

const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");

const leaf = svg.selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(${circle[d.group].x},${circle[d.group].y})`);

leaf.append("circle")
    .attr("r", d => circle[d.group].r * d.group)
    .attr("fill-opacity", 0.7)
    .attr("fill", d => circle[d.group].fill);

leaf.append("text")
    .text(d => `${d.name}`);

leaf.append("text")
    .text(d => d.group)
    .attr('y', 15)

export default svg.node()