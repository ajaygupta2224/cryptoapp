import Image from "next/image";
import Header from "./components/navbar/header";
import Dashboard from "./components/main/dashboard";

export default function Home() {
  return (
    
    <div className="h-full">
      <Header/>
      <Dashboard/>
    </div>
  );
}
