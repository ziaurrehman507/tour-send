// import React, { useState, useEffect } from 'react'
// import Loading from './Loading'
// import Tours from './Tours'
// // import { Button, Modal } from 'antd';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Checkout from './Checkout';

// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// // const url = 'https://course-api.com/react-tours-project'

// function App() {
//   let getData = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];

//   let [name, setName] = useState()
//   let [totalPeople, setTotalPeople] = useState()
//   let [country, setCountry] = useState()
//   let [days, setDays] = useState()
//   let [arr, setArr] = useState(getData)
//   let [img, setImg] = useState()

//   let NameInp = (e) => {
//     setName(e.target.value)
//   }

//   let PeopleInp = (e) => {
//     setTotalPeople(e.target.value)
//   }


//   let countrySelect = (e) => {
//     setCountry(e.target.value)
//   }

//   let daysInp = (e) => {
//     setDays(e.target.value)

//   }

//   let addDetails = (e) => {
//     setArr([...arr, { imgs: img, names: name, totalPeoples: totalPeople, countires: country, dayss: days, }])
//     console.log(arr);


//     setName('')
//     setTotalPeople('')
//     setDays('')
//   }

//   useEffect(() => {

//     localStorage.setItem('Data', JSON.stringify(arr))

//   })

//   const [loading, setLoading] = useState(true)
//   const [tours, setTours] = useState(null)

//   const removeTour = (id) => {
//     setTours(
//       tours.filter((tour) => {
//         return tour.id !== id;
//       })
//     )
//   }

//   const fetchTours = () => {
//     setLoading(true)
//     // try {
//     //   const response = await fetch("/src/Data.json")
//     //   const tours = await response.json()

//     //   console.log(tours);
//     //   setLoading(false)
//     //   setTours(tours)

//     // } catch (error) {
//     //   setLoading(false)
//     //   console.log(error)

//     fetch("/src/Data.json").then((response) => {
//       response.json()
//     })
//       .then((data) => {

//         setTours(data)
//         setLoading(false)

//       }).catch(error => {

//         console.log("Error during fetching: ", error)
//         setLoading(false)
//       }
//       )

//   }
// }
// useEffect(() => {
//   fetchTours()
// }, [])

// if (loading) {
//   return (
//     <main>
//       <Loading />
//     </main>
//   )
// }
// if (tours.length === 0) {
//   return (
//     <main>
//       <div className='title'>
//         <h2>no tours left</h2>
//         <button className='btn' onClick={() => fetchTours()}>
//           refresh
//         </button>
//       </div>
//     </main>
//   )
// }



// return (
//   <main>
//     <BrowserRouter>
//       <Routes>
//         <Route path={'/'} element={<Tours tours={tours} totalPeopled={totalPeople} named={name} addDetails={addDetails} daysInp={daysInp} countrySelect={countrySelect} NameInp={NameInp} PeopleInp={PeopleInp} removeTour={removeTour} />} />
//         <Route path='/checkout' element={<Checkout />} />
//       </Routes>
//     </BrowserRouter>
//   </main>
// )
// }

// export default App


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// import { Button, Modal } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';



// import { Data } from "./Data"


let data = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    price: "1,995"
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    price: "3,895"
  },
  {
    id: "recJLWcHScdUtI3ny",
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    image: "https://www.course-api.com/images/tours/tour-3.jpeg",
    price: "2,695"
  },
  {
    id: "recK2AOoVhIHPLUwn",
    name: "Best of Rome in 7 Days Tour",
    info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    price: "2,095"
  },
  {
    id: "receAEzz86KzW2gvH",
    name: "Best of Poland in 10 Days Tour",
    info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
    image: "https://www.course-api.com/images/tours/tour-5.jpeg",
    price: "2,595"
  }
]


function App() {
  let getData = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];

  let [name, setName] = useState()
  let [totalPeople, setTotalPeople] = useState()
  let [country, setCountry] = useState()
  let [days, setDays] = useState()
  let [arr, setArr] = useState(getData)
  let [img, setImg] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])


  let NameInp = (e) => {
    setName(e.target.value)
  }

  let PeopleInp = (e) => {
    setTotalPeople(e.target.value)
  }


  let countrySelect = (e) => {
    setCountry(e.target.value)
  }

  let daysInp = (e) => {
    setDays(e.target.value)
  }

  let addDetails = (e) => {
    if (Object.values(tours).some(value => value === "")) {
      alert('Please fill all fields');
    } else {
      setArr([...arr, { imgs: img, names: name, totalPeoples: totalPeople, countires: country, dayss: days }]);
      console.log(arr);
      setIsModalOpen(false);
      setName('');
      setTotalPeople('');
      setDays('');
    }
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  const showModal = (e) => {
    setIsModalOpen(true);
    console.log(e.target.parentElement.parentElement.parentElement.firstElementChild);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(arr))
  })



  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    )
  }

  const fetchTours = () => {

    let timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    // setLoading(true)

    
    if (data) {
      setTours(data)
      // setLoading(false)
    }
    else {
      console.log("Error during fetching:")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  if (!tours || tours.length === 0) {
    return (
      <main className=' flex  h-[100vh] items-center  justify-center ' >
        <div className='title'>
          <h2 className=' text-[25px] font-sans ' >no tours left</h2>
          <button className=' w-[120px] h-[40px] rounded-[5px] bg-[blue] text-[#ffffff] mt-[20px]  '  onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className=' flex justify-center  bg-black   ' >
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={
              <Tours
                tours={tours}
                totalPeopled={totalPeople}
                named={name}
                addDetails={addDetails}
                daysInp={daysInp}
                countrySelect={countrySelect}
                NameInp={NameInp}
                PeopleInp={PeopleInp}
                removeTour={removeTour}
                isModalOpen={isModalOpen}
                showModal={showModal}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            }
          />
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

