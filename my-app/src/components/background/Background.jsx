import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import'./BackGroundSTyles.scss';

export default function Background() {
  return (
    <Parallax  className='animation' pages={1} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={1}>
      <div className='animation-layer parallax' id="pastel1">dfdf</div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
      <div className='animation-layer parallax' id="pastel2">dfdf</div>
      </ParallaxLayer>
    </Parallax>
  )
}

