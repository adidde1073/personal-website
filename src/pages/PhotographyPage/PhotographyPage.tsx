import './PhotographyPage.css'

import { ImageBox } from '../../components/ImageBox/ImageBox'

/**
 * Images
 */
import DallasCapital from '../../photos/Dallas_Capital.jpg'
import CoffeLogo from '../../photos/Coffee_Logo.jpeg'
import CafeShot from '../../photos/Rare_Bird_Cafe.png'
import Dad from '../../photos/Dad.png'
import GoldenGate from '../../photos/Golden_Gate.png'

export default function PhotographyPage() {
  return (
    <div className="phtoContainer">
      <h1 className='phtoHeader'>My Photo Portfolio</h1>
      <ImageBox 
        camera="iPhone 15 Pro" 
        lens="24mm" 
        image={Dad}
         orientation='vertical' />
      <ImageBox 
        camera="iPhone 15 Pro" 
        lens="24mm" 
        image={GoldenGate}
         orientation='horizontal' />
      <ImageBox 
        camera="Sony a77" 
        lens="Sony DT 16-50mm f2.8" 
        image={DallasCapital} 
        orientation='vertical' />
      <ImageBox 
        camera="Fujifilm X-T30ii" 
        lens="Fujinon 35mm f2" 
        image={CoffeLogo}
         orientation='horizontal' />
      <ImageBox 
        camera="Fujifilm X-T30ii" 
        lens="Fujinon 35mm f2" 
        image={CafeShot}
         orientation='vertical' />
    </div>
  )
}