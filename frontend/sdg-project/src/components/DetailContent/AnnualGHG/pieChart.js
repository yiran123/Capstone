import * as d3 from 'd3'

const cData = `name,value,desc
A,123,hello world A
B,190,hejljsflBBB
`

const data = d3.csvParse(cData)
const width = 100
const height = Math.min(width, 100)
const pie = d3.pie()
  .sort(null)
  .value(d => d.value)

const arcLabel = () => {
  const radius = Math.min(width, height) / 2 * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
}

const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(Math.min(width, height) / 5 - 1)

// const color = d3.scaleOrdinal()
//   .domain(data.map(d => d.name))
//   .range(d3.quantize(t => d3.interpolateBlues(t * 0.8 + 0.1), data.length).reverse())
const color = ["#87C5E4", "#1589EE"]
const arcs = pie(data);

const svg = d3.create("svg")
  .attr('width', width)
  .attr('height', height)
  .attr("viewBox", [-width / 5, -height / 5, width / 2, height / 2]);

svg.append("g")
  .attr("stroke", "white")
  .selectAll("path")
  .data(arcs)
  .join("path")
  .attr("fill", (d, i) => color[i])
  .attr("d", arc)
  .append("title")
  .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);


export default svg.node();