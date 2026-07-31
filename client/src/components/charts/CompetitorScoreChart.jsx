import {

Bar

} from "react-chartjs-2";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

} from "chart.js";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

);

function CompetitorScoreChart({ competitors }) {

const data={

labels:competitors.map(c=>c.name),

datasets:[{

label:"AI Score",

data:competitors.map(c=>c.ai_score),

backgroundColor:"#FFD54A",

borderRadius:10

}]

};

return(

<Bar

data={data}

options={

{

indexAxis:"y",

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:false

}

}

}

}

/>

);

}

export default CompetitorScoreChart;