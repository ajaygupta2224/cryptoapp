import Image from "next/image";
import Header from "./components/navbar/header";
import Dashboard from "./components/main/dashboard";
import Info from "./components/content/info";

export default function Home() {
  return (
    
    <div className="h-full">
      <Header/>
      {/* <Dashboard/> */}
      <Info/>
    </div>
  );
}
