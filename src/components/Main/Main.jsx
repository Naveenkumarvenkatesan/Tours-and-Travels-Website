import React, {useEffect} from 'react'
import './main.css'
import './main.scss'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img from'../../Assets/pexels-jess-loiterton-5006545 (1).jpg'
import img2 from'../../Assets/slope.webp'
import img3 from'../../Assets//Manali.webp'
import img4 from'../../Assets/Coorg.webp'
import img5 from'../../Assets/Leh-Ladakh.webp'
import img6 from'../../Assets/Varanasi.webp'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [

  {
    id: 1,
    imgSrc: img,
    destTitle:'Rose Island',
    Location: 'Andman Nicobar Island',
    Grade: 'CULTURAL RELAX',
    Fees:'$800',
    Description: 'Ross Island, located in the Andaman and Nicobar Islands of India, is a place steeped in history and natural beauty. Once the administrative headquarters of the British Raj, it holds significant importance as a colonial settlement and a witness to the tumultuous events of the past.'

  },
  {
    id: 2,
    imgSrc: img2,
    destTitle:'Lush-green Landscape',
    Location: 'Kashmir',
    Grade: 'CULTURAL RELAX',
    Fees:'$500',
    Description: 'One of the main tourist places in India is Kashmir which lies in the northernmost region of the country and is blessed with surreal natural beauty and myriad adventures. Kashmir offers two different experiences, one during the summers when the whole valley looks enthralling with its lush-green landscape and snow-capped mountains in the backdrop and other during the winter season when it is all covered with white snow. No matter when you plan a visit to this place, it will always offer you a blissful experience. It is known as the heaven on the Earth for a reason as it is a postcard-card perfect scenery drawn by nature.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle:'Snow-capped slopes',
    Location: 'Manali',
    Grade: 'CULTURAL RELAX',
    Fees:'$1000',
    Description: 'Manali is one of the most ideal hill stations situated between Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges. It has some of the most breathtaking views, lush green forests, meadows with carpeted flowers, and gushing blue streams, a perpetual fairy-tale. It is blessed with the most extraordinary scenic beauties.'

  },
  {
    id: 4,
    imgSrc: img4,
    destTitle:'Coorge',
    Location: 'Karnataka',
    Grade: 'Honeymoon Place',
    Fees:'$2000',
    Description: 'Coorg is known as Kodagu, the rich hill station in Karnataka, known for its gorgeous scenery and lush greenery. The landscapes stand out because of the forest covered hills, spice and coffee plantations. Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet are some of the towns to visit in Coorg. One should make their trip a memorable one as it is a once in a life time experience that should never be forgotten. It is worth a visit and so, should be on the list of things to do in India.'
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle:'Ladakh',
    Location: 'Ladakh',
    Grade: 'Explore the DESTIN',
    Fees:'$3000',
    Description: 'Ladakh is known for its stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, murals, and red-robed monks. It is one of the worlds cold deserts and it is said that only a man sitting in the sun with his feet can suffer from sunstroke and frostbite at the same time.  It is one of the best tourist places in Kashmir as it is known for its culture that is similar to Tibet.  Ladakh is a land like no other as it has the Siachen Glacier and Great Himalayas. It is often called the adventure playground as people can enjoy climbing, jeep tours, rafting, and high-altitude trekking.'
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle:'SpirItual place',
    Location: 'Varanasi',
    Grade: 'SPIRITUAL',
    Fees:'$800',
    Description: 'Adorned by the beautiful ghats and a spiritual vibe, Varanasi is one of the most vibrant and charismatic places to visit in India. It is often mistaken that spiritual places are meant to be explored after a certain age, but when it comes to beauty and peace, Varanasi is a destination, listed on top of every traveler’s bucket list. The calm and tranquil ghats that are illuminated by thousands of Diya during the evening and morning Arti is a divine visual to admire.'
  },

]

const Main = () => {

  //lets create a react hooks to add a scroll animation....
  useEffect(()=>{
    Aos.init({duration: 2000})

  }, [])
  
  return (
   <section className='main container section'>
    <div className="secTitle">
      <h3  data-aos="fade-right"className='title'>
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
      {
        Data.map(({id, imgSrc, destTitle, Location, Grade, Fees, Description}) =>{
          return (
            <div key={id}  data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt='{destTitle}'/>
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <sapn className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <sapn className="name">{Location}</sapn>
                  </sapn>

                  <div className="Fees flex">
                    <div className="Grade">
                      <span>{Grade}<small>+1</small></span>
                    </div>
                    <h5>{Fees}</h5>
                  </div>
                </div>
                <div className="Description">
                  <p>{Description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <LuClipboardCheck className="icon"/>
                </button>
            </div>
          )

        })
      }

    </div>
   </section>
  )
}

export default Main