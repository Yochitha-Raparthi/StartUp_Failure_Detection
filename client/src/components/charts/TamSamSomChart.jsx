// import {

// BarChart,

// Bar,

// XAxis,

// YAxis,

// Tooltip,

// ResponsiveContainer

// } from "recharts";

// function TamSamSomChart({ market }) {

// const data = [

// {

// name:"TAM",

// value:market.tam

// },

// {

// name:"SAM",

// value:market.sam

// },

// {

// name:"SOM",

// value:market.som

// }

// ];

// return(

// <ResponsiveContainer width="100%" height={300}>

// <BarChart data={data}>

// <XAxis dataKey="name"/>

// <YAxis/>

// <Tooltip/>

// <Bar
// dataKey="value"
// fill="#D4AF37"
// radius={[8,8,0,0]}
// />

// </BarChart>

// </ResponsiveContainer>

// );

// }

// export default TamSamSomChart;


import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

);

function TamSamSomChart({ market }) {

const data = {

labels:["TAM","SAM","SOM"],

datasets:[

{

data:[

market.tam,

market.sam,

market.som

],

backgroundColor:[

"#FFD54A",

"#35B5FF",

"#34D399"

],

borderRadius:12,

borderSkipped:false,

barThickness:50

}

]

};

const options={

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:false

}

},

scales:{

x:{

ticks:{

color:"#bdbdbd"

},

grid:{

display:false

}

},

y:{

ticks:{

color:"#bdbdbd"

},

grid:{

color:"rgba(255,255,255,.05)"

}

}

}

};

return <Bar data={data} options={options}/>;

}

export default TamSamSomChart;