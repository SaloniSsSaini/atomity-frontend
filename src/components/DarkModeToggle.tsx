import { useState,useEffect } from "react"

export default function DarkModeToggle(){

 const [theme,setTheme]=useState("light")

 useEffect(()=>{

  document.documentElement.setAttribute("data-theme",theme)

 },[theme])

 function toggleTheme(){

  setTheme(prev =>
   prev==="light" ? "dark" : "light"
  )

 }

 return(

 <button

  onClick={toggleTheme}

  style={{

   position:"fixed",
   top:"16px",
   right:"16px",

   padding:"8px 14px",

   borderRadius:"8px",

   border:"1px solid #ddd",

   background:"white"

  }}

 >

 {theme==="light" ? "🌙 Dark" : "☀️ Light"}

 </button>

 )

}