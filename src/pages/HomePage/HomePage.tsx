import profile from '../../assets/profile.jpg'
import './HomePage.css'
import { CContainer, CHeader, CImage } from '@coreui/react'

export default function HomePage() {
  return (
    <div className="home">
      <CHeader className='header'>
        <h2>
          Albert Didde
        </h2>
        <h4>
          Full Stack Engineer
        </h4>
      </CHeader>
      <CContainer className='imageContainer' fluid>
        <CImage
          fluid
          align='center'
          src={profile}
        ></CImage>
      </CContainer>
      <CContainer className="introContainer" fluid>
        <p className="dialogue">
          Hello! My name is Albert, and I'm a full stack engineer currently working at Bloomberg, 
          creating powerful web applications using the latest technologies. 
          Things that interest me the most in the industry are cloud infrastructure, CI/CD and build tools, and backend architecture.
          If I had to sum up my best strength as an engineer, it would be seeing the bigger picture— 
          undestanding how separate components work together to build the whole.
          <br></br>
          <br></br>
          Outside of work, my biggest interests are photography and fitness. 
          As with all things in life, I find that these two practices have valuable insights that are applicable to other aspects of life.
          <br></br>
          <br></br>
          I grew up taking photos since I was a boy. What I find inspires me to create my best artwork is capturing things that I love. 
          Without a doubt, my favorite shots are definitely those of my family and home state, California— as they are the subjects that have shaped me the most.
          The biggest life lesson I've learned is to <b>always focus on the main subject; </b>
          understanding your subject and what makes it intirguing helps you to compose an image that is interesting to look at. 
          In the same way, in order to properly design a product, it is always important to understand <b>your customer is your subject</b>, so to speak.
          Although designing secure, resilient, and high performing applications matter, none of that matters if your focus is not on your customer.
          <br></br>
          <br></br>
          I discovered the joy of fitness during the pandemic. 
          Being a recent graduate, I used my newfound free time to invest in myself, and to improve my health and physique.
          I found strength and fitness training not only to have physical benefits, but also mental benefits. 
          It teaches you patience, the importance of repitiion, and resilience to setbacks.
          <br></br>
          <br></br>
          Above all this, what defines me, and how I interact with the world, is my faith in Jesus Christ. 
          Withouth Him, my life would look immensely different.
          In all that I do, I feel compelled to honor Him.
        </p>
      </CContainer>
    </div>
  );
}
