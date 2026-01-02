
import { User as Users } from 'lucide-react';
 import  '../../../Styles/Analysis.css'
 import  '../../../Styles/UserAnalysis.css'
export default function UserAnalysis() {
  return (
    <div className="user-container">
      <div className="sub-user-container">
        <div className="user-container1">
          <div className="sub-userCon">
            <p className="all-user">Total User</p>
            <div className="info-container">
            <Users/>
            <p className="n1">325,588</p>
            </div>
          </div>
        </div>
        <div className="user-container2">
          <div className="sub-userCon">
            <p className="asia">Asia</p>
            <div className="info-container">
            <Users/>
            <p className="n2">125,678</p>
            </div>
          </div>
        </div>
        <div className="user-container3">
          <div className="sub-userCon">
            <p className="euro">Europe</p>
            <div className="info-container">
            <Users/>
            <p className="n3">100,111</p>
            </div>
          </div>
        </div>
        <div className="user-container4">
          <div className="sub-userCon">
            <p className="all-region">Other Region</p>
            <div className="info-container">
            <Users/>
            <p className="n4">125,384</p></div>
          </div>
        </div>
      </div>
      <p className="para">Sell from 2020-25 : </p>
    </div>
  );
}
