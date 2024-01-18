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
                    <h1 className='text-2xl font-extrabold'>Early bird passes are out!</h1><br/>
                    <p className='text-2xl font-bold max-w-md text-center'>Limited to 1000 passes</p>
                    <p className='text-l max-w-md text-center'>Note: Use GITAM mail</p>
                    <button id="buy" className='bg-white mt-4 font-extrabold rounded-md flex items-center justify-center'><a className='text-purple-900' href="https://forms.gle/w6Tden2dQCxq3u8x7">Buy now</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal