import images from '../assets/images.png';
import { TextAlignJustify } from 'lucide-react';
import { User } from 'lucide-react';
import DashBoard1 from './DashBoard1';
import { Database } from 'lucide-react';
export default function DashBoard() {
   return(
    <>
    <div className="dashboard">
        <Database className='data-center'/>
        <h1>DataHub</h1>
        <TextAlignJustify className='tally'/>
        <User className='user'/>
        <p className='useP'>User</p>
     </div>
       
     <DashBoard1/>
     </>
  );
}
