import { motion } from "framer-motion"

export default function CloudNode({label}){

 return(

 <motion.div

 className="glass"

 animate={{
  y:[0,-8,0]
 }}

 transition={{
  duration:3,
  repeat:Infinity,
  ease:"easeInOut"
 }}

 whileHover={{
  scale:1.08
 }}

 style={{
  padding:"14px 22px",
  fontWeight:"600"
 }}

 >

 {label}

 </motion.div>

 )

}