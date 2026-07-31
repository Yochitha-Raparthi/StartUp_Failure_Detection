import {
    Pie
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function CompetitorPieChart({ competitors }) {

    const data = {

        labels: competitors.map(c => c.name),

        datasets: [

            {

                data: competitors.map(c => c.market_share),

                backgroundColor: [

                    "#FFD54A",
                    "#4FC3F7",
                    "#66BB6A",
                    "#FF8A65",
                    "#BA68C8"

                ],

                borderWidth: 0

            }

        ]

    };

    return (

        <Pie

            data={data}

            options={{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{

                        position:"bottom",

                        labels:{

                            color:"white"

                        }

                    }

                }

            }}

        />

    );

}

export default CompetitorPieChart;