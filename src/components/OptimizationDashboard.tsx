import { useApiData } from "../hooks/useApiData"
import MetricCard from "./MetricCard"

export default function OptimizationDashboard(){

 const {data,isLoading,error}=useApiData()

 if(isLoading){
  return <p style={{textAlign:"center"}}>Loading metrics...</p>
 }

 if(error){
  return <p>Error loading metrics</p>
 }

 const items=data.products.slice(0,3)

 return(

 <section>

 <h2 style={{
  textAlign:"center",
  fontSize:"clamp(28px,4vw,42px)",
  marginBottom:"60px"
 }}>

 Cloud Optimization Metrics

 </h2>


 <div style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
  gap:"24px",
  maxWidth:"900px",
  margin:"auto"
 }}>

 {items.map((item:any)=>(
 <MetricCard
  key={item.id}
  title={item.title}
  value={item.price}
 />
 ))}

 </div>

 </section>

 )

}