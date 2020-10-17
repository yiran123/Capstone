import * as d3 from 'd3'

const data = [
    { name: "PG & E", value: 0.07507 },
    { name: "Big Valley", value: 0.06966 },
    { name: "Cal State", value: 0.06749 },
    { name: "Boyer", value: 0.06327 },
    { name: "Basin", value: 0.06094 },
    { name: "Mixers", value: 0.05987 },
    { name: "Water", value: 0.04253 },
    { name: "Oak", value: 0.04025 },
]
const width = 541;
const height = 362;
const margin = { top: 0, right: 0, bottom: 30, left: 0 }
const color = "#3290ED"

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor"))

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
        .tickFormat(i => data[i].name)
        .tickSizeOuter(0))

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);

svg.append("g")
    .attr("fill", color)
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth());

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

export default svg.node()

