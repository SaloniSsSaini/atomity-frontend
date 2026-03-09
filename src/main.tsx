import React from "react"
import ReactDOM from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Hero from "./components/Hero"
import CloudArchitecture from "./components/CloudArchitecture"
import OptimizationDashboard from "./components/OptimizationDashboard"
import CTA from "./components/CTA"

import ScrollProgress from "./components/ScrollProgress"
import DarkModeToggle from "./components/DarkModeToggle"

import "./styles/globals.css"

const queryClient = new QueryClient()

function App(){

 return(

 <QueryClientProvider client={queryClient}>

 <ScrollProgress/>

 <DarkModeToggle/>

 <Hero/>

 <CloudArchitecture/>

 <OptimizationDashboard/>

 <CTA/>

 </QueryClientProvider>

 )

}

ReactDOM.createRoot(document.getElementById("root")!).render(

 <React.StrictMode>

 <App/>

 </React.StrictMode>

)