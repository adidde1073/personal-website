import profile from '../../assets/profile.jpg'
import './profile.css'
import Counter from '../../features/counter/counter';

function Profile() {
  return (
    <div className="profile-container">
      <img
        src={profile}
        alt="Profile"
        className="profile-picture"
      />
      <div className="dialogue-container">
        <p className="name">Albert Didde</p>
        <p className="dialogue">
          Hi, I'm Albert! I'm a full-stack engineer currently working at Bloomberg, building and creating innovative solutions. 
          Outside of work, I’m passionate about staying fit—whether it’s through weight training or exploring new fitness routines. 
          I also love photography, capturing moments and scenes that inspire me, and cooking up delicious meals in the kitchen. 
          Balancing both my professional and personal passions is something I really enjoy!
        </p>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default Profile;
