import { useState, useEffect } from 'react';
import './popup.css'
import { useRef } from 'react';

import { eventlist, roadToPramana } from '../../../../constants/index'

const Popup = ({onClose, code}) => {
    const [screenWdt,setScreenwdt] = useState(window.innerWidth)
    const handleResize = () => {
        setScreenwdt(window.innerWidth)
    }
    useEffect(() => {
        setScreenwdt(window.innerWidth);
        window.addEventListener('resize',handleResize)
      })
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current===e.target){
            onClose();
        }
    }
    const events = eventlist.concat(roadToPramana);
    console.log(events)
    return(
        <div ref={modalRef} onClick={closeModal} id='main' className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='popupbox mt-10 flex flex-col text-white'>
                <button onClick={onClose} className='place-self-end'><ion-icon name="close-outline"></ion-icon></button>
                {screenWdt<=800?
                <div className='bg-purple-900 rounded-xl px-4 py-4 flex flex-col gap-6 items-center mx-3 popup'>
                    <img className="poster rounded-xl" src={"/assets/Events/"+events[code].image}></img>
                    <div className='grid-cols-2'>
                    <div className='col-span-2'>
                    <h1 className='text-xl font-extrabold max-w-md'>{events[code].title}</h1><br/>
                    <h4 className='text-l font-extrabold max-w-md'>{events[code].date}</h4><br/>
                    {/* <div>
                    <h4 className='text-l font-extrabold max-w-md'>{events[code].venue}</h4><br/>
                    </div> */}
                    <p className='text-sm font-bold max-w-lg'>{events[code].description}</p>
                    </div>
                    {events[code].link!=="" &&
                    <div className='col-span-2'>
                    <button id="buy" className='bg-white mt-4 max-w-md py-2 font-extrabold rounded-md flex items-center justify-center'><a className='text-purple-900' href="https://linktr.ee/pramanahyd">Register</a></button>
                    </div>}
                    </div>
                </div>:
                <div className='bg-purple-900 rounded-xl px-4 py-4 flex grid-cols-2 gap-14 items-center mx-3'>
                    <img className="poster rounded-xl col-span-1" src={"/assets/Events/"+events[code].image}></img>
                    <div className='col-span-1'>
                    <h1 className='text-xl font-extrabold max-w-md'>{events[code].title}</h1><br/>
                    <h4 className='text-l font-extrabold max-w-md'>{events[code].date}</h4><br/>
                    <h4 className='text-l font-extrabold max-w-md'>{events[code].time}</h4><br/>
                    <p className='text-l font-bold max-w-lg'>{events[code].description}</p><br/>
                    {events[code].link!=="" && 
                    <button id="buy" className='bg-white mt-4 max-w-md py-2 font-extrabold rounded-md flex items-center justify-center'><a className='text-purple-900' href={events[code].link}>Register</a></button>
                    }
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Popup