import * as d3 from 'd3'
import _ from 'lodash'

const appData = [
  { fill: 'rgba(133, 92, 248, 0.1)', data: [20, 30, 25, 12, 43, 25, 18, 12, 10], stoke: '#855CF8' },
  { fill: 'rgba(29, 209, 161, 0.1)', data: [10, 30, 25, 12, 43, 25, 18, 36, 20, 30], stoke: '#1DD1A1' },
]
const min = 10
const max = 50

let width = 798
let height = 234
let padding = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}
// 初始化svg画布
// 处理数据更新做的判断
let svg = d3.create("svg")
  .attr('width', width + 'px')
  .attr('height', height + 'px')

//   let min = d3.min(lineData) - 5
//   let max = d3.max(lineData) + 5
// 比例尺
let xScale = d3.scaleBand().domain(['1月', '2月', '3月', '4月', '5月', '6月']).range([0, width - padding.left - padding.right])
let yScale = d3.scaleLinear().domain([min, max]).range([height - padding.top - padding.bottom, 0]) // 值域取反
let xAxis = d3.axisBottom().scale(xScale)
let yAxis = d3.axisLeft(yScale)
// 添加x轴
svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
  .call(xAxis)
// 添加y轴
svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + -1 + ',' + padding.top + ')')
  .call(yAxis)
// 设置折线
let line = d3.line()
  .x(function (d, i) {
    return padding.left + (width - padding.left - padding.right) / 10 * (i + 0.5)
  })
  .y(function (d, i) {
    return yScale(d)
  })
  .curve(d3.curveBasis)


let area = d3.area()
  .x(function (d, i) { return padding.left + (width - padding.left - padding.right) / 10 * (i + 0.5) })
  .y(function (d, i) { return height - padding.bottom })
  .y1(function (d, i) { return yScale(d) })
  .curve(d3.curveBasis)

appData.forEach((chartData) => {
  // 绘制折现路径
  svg.append('path')
    .attr('d', line(chartData.data))
    .attr('stroke', chartData.stoke)
    .attr('stroke-width', '1px')
    .attr('fill', 'none')

  svg.append('path')
    .attr('d', area(chartData.data))
    .attr('stroke-width', '1px')
    .attr('fill', chartData.fill)
})

export default svg.node()