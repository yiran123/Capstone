import * as d3 from 'd3'
import legend from 'd3-color-legend'
import * as topojson from "topojson-client";
import us from './usmap.json'
import data from './mapData'

const states = new Map(us.objects.states.geometries.map(d => [d.id, d.properties]))
const format = d => `${d}%`
const path = d3.geoPath()

const color = d3.scaleQuantize([1, 7], d3.schemeBlues[6])
const width = 416
const height = 304
const svg = d3.create("svg")
  .attr("width", width)
  .attr("fill", '#eee')
  .attr("height", height)
  .attr("viewBox", [0, 0, 975, 610]);
console.log('svg', svg)
svg.append("g")
  .attr("transform", "translate(610,20)")

svg.append("g")
  .selectAll("path")
  .data(topojson.feature(us, us.objects.states).features)
  .join("path")
  .attr("fill", d => color(data[d.properties.name]))
  .attr("d", path)
  .append("title")
  .text(d => `${d.properties.name}
${format(data[d.properties.name])}`);

svg.append("path")
  .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
  .attr("fill", "none")
  .attr("stroke", "white")
  .attr("stroke-linejoin", "round")
  .attr("d", path);

export default svg.node()