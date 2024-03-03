import "./Card.css";

const Card = ({title, subtitle, text, info, location, buttonColor, buttonText, image}) => {
  return (
    <div className="card">
        <img src={image} className="card-img-top" alt=""/>
        <div className="card-body">
            <div className="flex justify-between">
                <h5 className="card-title text-2xl"> <span className="text-3xl">{title}</span><br />{subtitle}  </h5>
                <svg xmlns="http://www.w3.org/2000/svg"  height="50" fill="currentColor" className="bi bi-three-dots-vertical cursor-pointer" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
            </div>
            <p className="card-text">{text}</p>
            <div className="flex justify-between" >
                <div>
                    {info}
                </div>
                <div>
                    {location}
                </div> 
            </div>
            {buttonColor&& (
                <button className={`card-btn w-full mt-3 p-2 font-bold text-${buttonColor}-400 rounded-xl`} >{buttonText}</button>
            )}
        </div>


        <div className="flex justify-between items-center container">
            <div className="flex items-center gap-2 justify-between my-2">
                <img className="rounded-circle" src="https://dont-copy.netlify.app/assets/user1-COSOQoOX.jpg" alt="Profile" width="48" height="48" />
                <div className="flex flex-col">
                    <div className="text-wrap" >Siddharth Goyal</div>
                </div>
            </div>
            <div className="justify-between items-center">
                
                <span>1.4k views</span>
            </div>
        </div>
    </div>
  )
}

export default Card