// function ScoreProgress({ title,value,color }) {

// return(

// <div style={{marginBottom:"20px"}}>

// <h4>{title}</h4>

// <div
// style={{

// background:"#30363D",

// height:"12px",

// borderRadius:"10px"

// }}
// >

// <div

// style={{

// width:`${value}%`,

// height:"100%",

// background:color,

// borderRadius:"10px"

// }}

// >

// </div>

// </div>

// <p>{value}%</p>

// </div>

// );

// }

// export default ScoreProgress;


function ScoreProgress({

title,

value,

color

}){

return(

<div style={{marginBottom:"30px"}}>

<div style={{

display:"flex",

justifyContent:"space-between",

marginBottom:"8px"

}}>

<h4>{title}</h4>

<b>{value}%</b>

</div>

<div style={{

height:"14px",

background:"#30363d",

borderRadius:"30px",

overflow:"hidden"

}}>

<div

style={{

width:`${value}%`,

height:"100%",

background:color,

borderRadius:"30px",

transition:"1.2s"

}}

>

</div>

</div>

</div>

);

}

export default ScoreProgress;