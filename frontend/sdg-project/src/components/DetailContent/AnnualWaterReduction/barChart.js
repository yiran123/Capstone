import * as d3 from 'd3'

const margin = { top: 10, right: 10, bottom: 20, left: 40 }
const width = 700
const height = 100

const color = "#855CF8"


const cData = `name,value
A,123
B,190
C,200
D,140
E,140
F,180`

const data = d3.csvParse(cData)
console.log('data', data)
const yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(null, data.format))
  .call(g => g.select(".domain").remove())
  .call(g => g.append("text")
    .attr("x", -margin.left)
    .attr("y", 10)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text(data.y))

const xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0).tickSizeInner(0))
  .call(g => g.selectAll('.domain').remove())

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top])

const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1)


const svg = d3.create("svg")
  .attr("viewBox", [0, 0, width, height]);

svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("fill", (d, i) => i === data.length - 1 ? color : '#ddd')
  .attr("x", (d, i) => x(i))
  .attr("y", d => y(d.value))
  .attr("height", d => y(0) - y(d.value))
  .attr("width", x.bandwidth());

svg.append("g")
  .call(xAxis);

// svg.append("g")
//   .call(yAxis);

svg.append("g")
  .attr("transform", `translate(${x.bandwidth() / 2},${height - margin.bottom})`)
  .selectAll("text")
  .data(data)
  .join("text")
  .attr("x", (d, i) => x(i))
  .attr('text-anchor', 'middle')
  .text(d => d.value)
export default svg.node();
