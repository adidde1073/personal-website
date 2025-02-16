import profile from '../../assets/profile.jpg'
import './profile.css'
import { CImage } from '@coreui/react'

function Profile() {
  return (
    <div className="profile-container">
      <CImage
        fluid
        src={profile}
        className="profile-picture"
      ></CImage>
      <div className="dialogue-container">
        <p className="name">Albert Didde</p>
        <p className="dialogue">
          Hi, I'm Albert! I'm a full-stack engineer currently working at Bloomberg, building and creating innovative solutions. 
          Outside of work, I’m passionate about staying fit—whether it’s through weight training or exploring new fitness routines. 
          I also love photography, capturing moments and scenes that inspire me, and cooking up delicious meals in the kitchen. 
          Balancing both my professional and personal passions is something I really enjoy!
        </p>
      </div>
    </div>
  );
}

export default Profile;
