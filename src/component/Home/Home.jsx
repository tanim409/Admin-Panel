import { Bell } from "lucide-react";
import "./Home.css";
import HomeCard from "./HomeCard";
import DashBoard from "../DashBoard";
export default function Home() {
  return (
    <>
      <div className="home-container-wrapper">
       {/* <div>
        <DashBoard/>
       </div> */}

        <div className="second-section">
        <div className="home-container">
          <p className="inner1"> Welcome Back!</p>
          <div className="bell-container">
            <Bell className="bell" />
            <p className="inner2">Hi buddy, Hope you are Well</p>
          </div>
        </div>
        <div>
          <HomeCard />
        </div>
        </div>

      </div>
    </>
  );
}
