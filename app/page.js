// import Image from "next/image";
import OrgCharts from "@/components/OrgCharts";
// import { orgChartData } from "@/data/data";
import { PrimeReactProvider } from 'primereact/api';
export default function Home() {
  

  return (
   <>
   <PrimeReactProvider>
       <OrgCharts />
   </PrimeReactProvider>
    
   </>
  );
}
