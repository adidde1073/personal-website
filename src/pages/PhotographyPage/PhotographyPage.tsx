import './PhotographyPage.css'

import { ImageBox } from '../../components/ImageBox/ImageBox'

/**
 * Images
 */
import DallasCapital from '../../photos/Dallas_Capital.jpg'
import CoffeLogo from '../../photos/Coffee_Logo.jpeg'

export default function PhotographyPage() {
  return (
    <div className="phtoContainer">
      <h1 className='phtoHeader'>My Photo Portfolio</h1>
      <ImageBox camera="Sony a77" lens="Sony DT 16-50mm f2.8" image={DallasCapital} orientation='vertical'></ImageBox>
      <ImageBox camera="Fujifilm X-T30ii" lens="Fujinon 35mm f2" image={CoffeLogo} orientation='horizontal'></ImageBox>
    </div>
  )
}