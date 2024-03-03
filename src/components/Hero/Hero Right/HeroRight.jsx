import People from './People';
import "./HeroRight.css"

const HeroRight = () => {
  return (
    <div className="right-hero">
        <div className="location">
            <input className="text-center" type="text" placeholder="Enter your Location" />
            <hr className="my-2 border border-black"/>
            <p style={{"color":"#7e7e7e"}} >Your location will help us serve better and extend a personalised experience.</p>
            <br /> <br />
        </div>
        <div>
          Recommended Groups
          <People className="my-2" icon="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg" name="Leisure"/>
          <People className="my-2" icon="https://dont-copy.netlify.app/assets/15d7211204149d93adda6dfafb5d81f2-08Q1wamp.jpg" name="Activism"/>
          <People className="my-2" icon="https://dont-copy.netlify.app/assets/c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg" name="MBA"/>
          <People className="my-2" icon="https://dont-copy.netlify.app/assets/siddrath-t0piMZRc.jpg" name="Philosophy"/>
          <a  className="flex justify-end my-10" style={{"color": "blue", "cursor": "pointer"}}>See More...</a>
        </div>
    </div>
  )
}

export default HeroRight
