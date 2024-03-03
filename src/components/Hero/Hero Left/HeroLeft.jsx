import Card from './Card';
import "./HeroLeft.css";

const HeroLeft = () => {

  return (
        <div className="heroleft">
            <Card image={"https://dont-copy.netlify.app/assets/nature-rDsfVg8l.jpg"} title={"✍️ Article"} subtitle={"What if famous brands had regular fonts? Meet RegulaBrands!"} text={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}/>
            <Card image={"https://dont-copy.netlify.app/assets/wood-SIbopgrg.jpg"} title={"🔬️ Education"} subtitle={"Tax Benefits for Investment under National Pension Scheme launched by Government"} text={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}/>
            <Card image={"https://dont-copy.netlify.app/assets/car-kZ9O3U5Q.jpg"} title={"🗓️ Meetup"} subtitle={"Finance & Investment Elite Social Mixer @Lujiazui"} text={""} info={"Fri, 12 Oct, 2018"} location={"Ahmedabad, India"} buttonColor={"red"} buttonText={"Visit Website"} />
            <Card  title={"💼️ Job"} subtitle={"Software Developer"} text={""} info={"Innovaccer Analytics Private Ltd."} location={"Noida, India"} buttonColor="green" buttonText={"Apply on TimeJobs"} />
        </div>
    
  )
}

export default HeroLeft
