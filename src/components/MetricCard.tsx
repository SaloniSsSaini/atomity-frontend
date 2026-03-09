import CountUp from "react-countup"

export default function MetricCard({title,value}){

 return(

 <div className="glass" style={{
  padding:"24px",
  textAlign:"center"
 }}>

 <h3>{title}</h3>

 <p style={{
  fontSize:"28px",
  fontWeight:"700"
 }}>

 <CountUp end={value} duration={1.5} prefix="$"/>

 </p>

 </div>

 )

}