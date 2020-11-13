import * as d3 from 'd3'

const margin = { top: 30, right: 10, bottom: 40, left: 40 }
const width = 500
const height = 240


const cData = `name,A,B
AL,123,343
AK,190,450
`

const data = d3.csvParse(cData)
const series = d3.stack()
  .keys(data.columns.slice(1))
  (data)
  .map(d => (d.forEach(v => v.key = d.key), d))

const color = d3.scaleOrdinal()
  .domain(series.map(d => d.key))
  .range(d3.quantize(t => d3.interpolateGreens(t * 0.8 + 0.1), series.length).reverse())
  .unknown("#ccc")


const yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(null, "s"))
  .call(g => g.selectAll(".domain").remove())

const xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickSizeOuter(0).tickSizeInner(0))
// .call(g => g.selectAll(".domain").remove())

const x = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([margin.left, width - margin.right])
  .padding(0.1)

const y = d3.scaleLinear()
  .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
  .rangeRound([height - margin.bottom, margin.top])

export default () => {
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
    .selectAll("g")
    .data(series)
    .join("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("x", (d, i) => x(d.data.name))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .append("title")
    .text(d => `${d.data.name} ${d.key}
${d.data[d.key]}`);

  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);
  const rectWidth = 20
  svg.append("g")
    .selectAll("rect")
    .data(series)
    .join("rect")
    .attr("fill", d => color(d.key))
    .attr("x", (d, i) => (rectWidth + 20) * i + 20)
    .attr("y", d => y(d[1]))
    .attr("height", rectWidth)
    .attr("width", rectWidth)
  return svg.node()
}
// export default svg.node();