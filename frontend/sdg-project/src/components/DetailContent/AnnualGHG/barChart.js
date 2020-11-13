import * as d3 from 'd3'

const margin = { top: 0, right: 10, bottom: 0, left: 0 }
const width = 700
const height = 100

const color = ["#87C5E4", "#1589EE"]

const cData = `name,value,desc
A,123,hello world A
B,190,hejljsflBBB
`

const data = d3.csvParse(cData)

const yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(null, data.format))
// .call(g => g.select(".domain").remove())
// .call(g => g.append("text")
// .attr("x", -margin.left)
// .attr("y", 10)
// .attr("fill", "currentColor")
// .attr("text-anchor", "start")
// .text(data.y))

const xAxis = g => g
  .attr("transform", `translate(0,${margin.top})`)
  .call(d3.axisTop(x).ticks(width / 80, data.format))
  .call(g => g.selectAll('.domain').remove())

const x = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([margin.left, width - margin.right])

const y = d3.scaleBand()
  .domain(d3.range(data.length))
  .rangeRound([margin.top, height - margin.bottom])
  .padding(0.1)

const svg = d3.create("svg")
  .attr("viewBox", [0, 0, width, height]);

svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("fill", (d, i) => color[i])
  .attr("x", x(0))
  .attr("y", (d, i) => y(i))
  .attr("width", d => x(d.value) - x(0))
  .attr("height", y.bandwidth());

svg.append("g")
  .attr("transform", `translate(10,${y.bandwidth() / 2 - 5})`)
  .attr("fill", "white")
  .attr("text-anchor", "end")
  .attr("font-family", "sans-serif")
  .attr("font-size", 13)
  .selectAll("text")
  .data(data)
  .join("text")
  .attr("x", x(0))
  .attr("y", (d, i) => y(i))
  .text(d => d.desc)
  .attr('height', y.bandwidth())
  .attr("text-anchor", "start");

svg.append("g")
  .attr("transform", `translate(10,${y.bandwidth() / 2 + 15})`)
  // .attr("fill", "white")
  .attr("text-anchor", "end")
  .attr("font-family", "sans-serif")
  .attr("font-size", 13)
  .selectAll("text")
  .data(data)
  .join("text")
  .attr("x", x(0))
  .attr("y", (d, i) => y(i))
  .text(d => d.value)
  .attr('height', y.bandwidth())
  .attr("text-anchor", "start");

// svg.append("g")
//   .call(xAxis);

// svg.append("g")
//   .call(yAxis);

export default svg.node();
