import { motion } from "framer-motion"
import CloudNode from "./CloudNode"

export default function CloudArchitecture(){

 return(

 <section style={{textAlign:"center"}}>

 <h2 style={{
  fontSize:"clamp(32px,4vw,48px)",
  marginBottom:"80px"
 }}>
 Cloud Infrastructure Network
 </h2>


 <div style={{
  position:"relative",
  width:"650px",
  height:"350px",
  margin:"auto"
 }}>


 {/* nodes */}

 <div style={{position:"absolute",top:"0",left:"40px"}}>
 <CloudNode label="AWS"/>
 </div>

 <div style={{position:"absolute",top:"0",right:"40px"}}>
 <CloudNode label="Azure"/>
 </div>

 <div style={{position:"absolute",bottom:"40px",left:"40px"}}>
 <CloudNode label="Google Cloud"/>
 </div>

 <div style={{position:"absolute",bottom:"40px",right:"40px"}}>
 <CloudNode label="On-Prem"/>
 </div>


 {/* center */}

 <motion.div

 className="glass"

 animate={{
  boxShadow:[
   "0 0 0 rgba(47,91,255,0)",
   "0 0 40px rgba(47,91,255,0.4)",
   "0 0 0 rgba(47,91,255,0)"
  ]
 }}

 transition={{
  duration:3,
  repeat:Infinity
 }}

 style={{
  position:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  padding:"24px 40px",
  fontWeight:"700",
  background:"#2F5BFF",
  color:"white"
 }}

 >

 Atomity

 </motion.div>


 {/* svg network */}

 <svg width="650" height="350"
 style={{position:"absolute",top:0,left:0}}>

 <path id="aws" d="M80 20 L325 175"
 stroke="#2F5BFF" strokeWidth="2" fill="none"/>

 <path id="azure" d="M570 20 L325 175"
 stroke="#2F5BFF" strokeWidth="2" fill="none"/>

 <path id="google" d="M80 300 L325 175"
 stroke="#2F5BFF" strokeWidth="2" fill="none"/>

 <path id="onprem" d="M570 300 L325 175"
 stroke="#2F5BFF" strokeWidth="2" fill="none"/>


 {/* particles */}

 <circle r="4" fill="#2F5BFF">
 <animateMotion dur="2s" repeatCount="indefinite">
 <mpath href="#aws"/>
 </animateMotion>
 </circle>

 <circle r="4" fill="#2F5BFF">
 <animateMotion dur="2s" repeatCount="indefinite">
 <mpath href="#azure"/>
 </animateMotion>
 </circle>

 </svg>

 </div>

 </section>

 )

}