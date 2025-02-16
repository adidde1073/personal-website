import profile from '../../assets/profile.jpg'
import './HomePage.css'
import { CContainer, CHeader, CImage } from '@coreui/react'

export default function HomePage() {
  return (
    <div className="home">
      <CContainer className='imageContainer' fluid>
        <CImage
          fluid
          align='center'
          src={profile}
        ></CImage>
      </CContainer>
      <CHeader className='header'>Welcome to my portfolio page!</CHeader>
      <CContainer className="introContainer" fluid>
        <p className="dialogue">
          Hi, I'm Albert! I'm a full-stack engineer currently working at Bloomberg, building and creating innovative solutions. 
          Outside of work, I’m passionate about staying fit—whether it’s through weight training or exploring new fitness routines. 
          I also love photography, capturing moments and scenes that inspire me, and cooking up delicious meals in the kitchen. 
          Balancing both my professional and personal passions is something I really enjoy!
        </p>
      </CContainer>
    </div>
  );
}
