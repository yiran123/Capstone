import * as d3 from 'd3'

const cData = `name,value,desc
A,123,hello world A
B,190,hejljsflBBB
`

const data = d3.csvParse(cData)
const width = 100
const height = Math.min(width, 100)
const pie = d3.pie()
  .padAngle(0.005)
  .sort(null)
  .value(d => d.value)

const arcLabel = () => {
  const radius = Math.min(width, height) / 2 * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
}

const arc = () => {
  const radius = Math.min(width, height) / 2;
  return d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);
}

// const color = d3.scaleOrdinal()
//   .domain(data.map(d => d.name))
//   .range(d3.quantize(t => d3.interpolateBlues(t * 0.8 + 0.1), data.length).reverse())
const color = ["#87C5E4", "#1589EE"]
const arcs = pie(data);

const svg = d3.create("svg")
  .attr("viewBox", [-width / 2, -height / 2, width, height]);

svg.selectAll("path")
  .data(arcs)
  .join("path")
  .attr("fill", (d, i) => color[i])
  .attr("d", arc())
  .append("title")
  .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

// svg.append("g")
//   .attr("font-family", "sans-serif")
//   .attr("font-size", 12)
//   .attr("text-anchor", "middle")
//   .selectAll("text")
//   .data(arcs)
//   .join("text")
//   .attr("transform", d => `translate(${arc().centroid(d)})`)
//   .call(text => text.append("tspan")
//     .attr("y", "-0.4em")
//     .attr("font-weight", "bold")
//     .text(d => d.data.name))
//   .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
//     .attr("x", 0)
//     .attr("y", "0.7em")
//     .attr("fill-opacity", 0.7)
//     .text(d => d.data.value.toLocaleString()));


export default svg.node();