import { motion } from "framer-motion"

export default function Hero(){

 return(

 <section style={{
  textAlign:"center",
  maxWidth:"900px",
  margin:"auto"
 }}>

 <motion.h1

 initial={{opacity:0,y:40}}
 animate={{opacity:1,y:0}}

 transition={{duration:0.6}}

 className="gradient-title"

 >

 Optimize Your Multi-Cloud Infrastructure

 </motion.h1>


 <p style={{
  marginTop:"20px",
  fontSize:"18px",
  color:"var(--color-text)",
  opacity:0.7
 }}>

 Monitor and reduce cloud costs across AWS, Azure and Google Cloud.

 </p>


 <div style={{
  marginTop:"40px",
  display:"flex",
  justifyContent:"center",
  gap:"12px",
  flexWrap:"wrap"
 }}>

 <button style={{
  padding:"14px 28px",
  borderRadius:"10px",
  border:"none",
  background:"var(--color-primary)",
  color:"white",
  fontWeight:"600"
 }}>

 Start Optimizing

 </button>


 <button style={{
  padding:"14px 28px",
  borderRadius:"10px",
  border:"1px solid rgba(0,0,0,0.1)",
  background:"var(--color-bg)",
  color:"var(--color-text)",
  fontWeight:"600"
 }}>

 View Metrics

 </button>

 </div>

 </section>

 )

}