import './ImageBox.css'
import { CImage } from '@coreui/react';

export function ImageBox(props: { 
  /**
   * The image (.jpg, .png) to display
   */
  image: any, 
  /**
   * Sets the styling based on images orientation
   */
  orientation: 'horizontal' | 'vertical'; 
  /**
   * The name of the camera photo was shot with
   */
  camera: string;
  /**
   * The lens used to shoot the photo
   */
  lens: string
}) {
  return (
    <div className={`${props.orientation} imageBox`}>
      <CImage fluid src={props.image}></CImage>
      <p>{props.camera} | {props.lens}</p>
    </div>
  )
}