import * as d3 from 'd3'

const margin = { top: 10, right: 10, bottom: 20, left: 40 }
const width = 700
const height = 405

const series = [
    [
        {
            0: 0,
            1: 1650,
            data: {
                name: '2020'
            }
        },
        {
            0: 0,
            1: 2000,
            data: {
                name: '2021'
            }
        },
        {
            0: 0,
            1: 2500,
            data: {
                name: '2022'
            }
        },
        {
            0: 0,
            1: 3000,
            data: {
                name: '2023'
            }
        },
        {
            0: 0,
            1: 2100,
            data: {
                name: '2024'
            }
        },
        {
            0: 0,
            1: 1500,
            data: {
                name: '2025'
            }
        },
        {
            0: 0,
            1: 1600,
            data: {
                name: '2026'
            }
        },
        {
            0: 0,
            1: 1500,
            data: {
                name: '2027'
            }
        },
        {
            0: 0,
            1: 1800,
            data: {
                name: '2028'
            }
        }
    ],
    [
        {
            0: 1650,
            1: 2500,
            data: {
                name: '2020'
            }
        },
        {
            0: 2000,
            1: 2700,
            data: {
                name: '2021'
            }
        },
        {
            0: 2500,
            1: 3300,
            data: {
                name: '2022'
            }
        },
        {
            0: 3000,
            1: 3900,
            data: {
                name: '2023'
            }
        },
        {
            0: 2100,
            1: 2800,
            data: {
                name: '2024'
            }
        },
        {
            0: 1500,
            1: 2200,
            data: {
                name: '2025'
            }
        },
        {
            0: 1600,
            1: 2500,
            data: {
                name: '2026'
            }
        },
        {
            0: 1500,
            1: 2200,
            data: {
                name: '2027'
            }
        },
        {
            0: 1800,
            1: 2400,
            data: {
                name: '2028'
            }
        }
    ],
    [
        {
            0: 2500,
            1: 2600,
            data: {
                name: '2020'
            }
        },
        {
            0: 2700,
            1: 2800,
            data: {
                name: '2021'
            }
        },
        {
            0: 3300,
            1: 3500,
            data: {
                name: '2022'
            }
        },
        {
            0: 3900,
            1: 4000,
            data: {
                name: '2023'
            }
        },
        {
            0: 2800,
            1: 2900,
            data: {
                name: '2024'
            }
        },
        {
            0: 2200,
            1: 2300,
            data: {
                name: '2025'
            }
        },
        {
            0: 2500,
            1: 2600,
            data: {
                name: '2026'
            }
        },
        {
            0: 2200,
            1: 2300,
            data: {
                name: '2027'
            }
        },
        {
            0: 2400,
            1: 2500,
            data: {
                name: '2028'
            }
        }
    ],
    [
        {
            0: 2600,
            1: 3100,
            data: {
                name: '2020'
            }
        },
        {
            0: 2800,
            1: 3400,
            data: {
                name: '2021'
            }
        },
        {
            0: 3500,
            1: 4100,
            data: {
                name: '2022'
            }
        },
        {
            0: 4000,
            1: 4200,
            data: {
                name: '2023'
            }
        },
        {
            0: 2900,
            1: 3600,
            data: {
                name: '2024'
            }
        },
        {
            0: 2300,
            1: 2800,
            data: {
                name: '2025'
            }
        },
        {
            0: 2600,
            1: 3200,
            data: {
                name: '2026'
            }
        },
        {
            0: 2300,
            1: 2700,
            data: {
                name: '2027'
            }
        },
        {
            0: 2500,
            1: 2600,
            data: {
                name: '2028'
            }
        }
    ],

]

const data = [
    {
        name: "2020"
    },
    {
        name: "2021"
    },
    {
        name: "2022"
    },
    {
        name: "2023"
    },
    {
        name: "2024"
    },
    {
        name: "2025"
    },
    {
        name: "2026"
    },
    {
        name: "2027"
    },
    {
        name: "2028"
    },
]

const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en")

const y = d3.scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
    .rangeRound([height - margin.bottom, margin.top])

const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call(g => g.selectAll(".domain").remove())

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call(g => g.selectAll(".domain").remove())


const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);

const color = {
    '0': 'rgb(118,203,209)',
    '1': 'rgb(247,212,127)',
    '2': 'rgb(249,166,130)',
    '3': 'rgb(224,184,243)',
}

svg.append("g")
    .selectAll("g")
    .data(series)
    .join("g")
    .attr("fill", (d, index) => color[index])
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("x", (d, i) => x(d.data.name))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

export default svg.node()