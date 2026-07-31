// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     Tooltip,
//     ResponsiveContainer,
//     CartesianGrid
// } from "recharts";

// function MarketTrendChart({ data }) {

//     return (

//         <ResponsiveContainer width="100%" height={300}>

//             <LineChart data={data}>

//                 <CartesianGrid strokeDasharray="3 3"/>

//                 <XAxis dataKey="year"/>

//                 <YAxis/>

//                 <Tooltip/>

//                 <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#D4AF37"
//                     strokeWidth={3}
//                 />

//             </LineChart>

//         </ResponsiveContainer>

//     );

// }

// export default MarketTrendChart;



import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

function MarketTrendChart({ data }) {

    const chartData = {

        labels: data.map(item => item.year),

        datasets: [

            {

                label: "Market Trend",

                data: data.map(item => item.value),

                borderColor: "#FFD54A",

                backgroundColor: "rgba(255,213,74,.20)",

                fill: true,

                tension: 0.45,

                borderWidth: 4,

                pointRadius: 6,

                pointHoverRadius: 8,

                pointBackgroundColor: "#FFD54A",

                pointBorderColor: "#ffffff",

                pointBorderWidth: 2

            }

        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#bdbdbd"

                },

                grid: {

                    color: "rgba(255,255,255,.05)"

                }

            },

            y: {

                ticks: {

                    color: "#bdbdbd"

                },

                grid: {

                    color: "rgba(255,255,255,.05)"

                }

            }

        }

    };

    return <Line data={chartData} options={options} />;

}

export default MarketTrendChart;