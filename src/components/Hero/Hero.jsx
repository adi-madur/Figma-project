import "./Hero.css";
import HeroLeft from './Hero Left/HeroLeft';
import HeroRight from './Hero Right/HeroRight';

const Hero = () => {
  return (
    <div className="hero flex justify-center">
      <HeroLeft/>
      <HeroRight />
    </div>
  )
}

export default Hero;