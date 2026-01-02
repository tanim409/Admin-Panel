import { Bell } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-container">
      <p className="inner1"> Welcome Back, Home!</p>
      <div className='bell-container'>
      <Bell className='bell'/>
      <p className="inner2">Hi buddy, Hope you are Well</p>
      </div>
    </div>
  );
}
