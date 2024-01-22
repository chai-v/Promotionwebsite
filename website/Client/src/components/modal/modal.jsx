import './modal.css'
import { useRef } from 'react';

const Modal = ({onClose}) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current===e.target){
            onClose();
        }
    }
    return(
        <div ref={modalRef} onClick={closeModal} id='main' className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='mt-10 flex flex-col text-white'>
                <button onClick={onClose} className='place-self-end'><ion-icon name="close-outline"></ion-icon></button>
                <div className='bg-purple-900 rounded-xl px-4 py-4 flex-col gap-5 items-center mx-3'>
                    <h1 className='text-2xl font-extrabold'>Passes are out!</h1><br/>
                    <p className='text-2xl font-bold max-w-md text-center'>Passes for Gitamites and outsiders are now available</p><br/>
                    <p className='text-l max-w-md text-center'>Note: Use GITAM mail</p>
                    <button id="buy" className='bg-white mt-4 font-extrabold rounded-md flex items-center justify-center'><a className='text-purple-900' href="https://linktr.ee/pramanahyd">Buy now</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal