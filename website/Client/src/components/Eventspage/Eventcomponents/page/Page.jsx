import './page.css'
const Page = ({flag}) => {
    
    const handleTogglePramana =()=> {
        flag(true)
    }
    const handleToggle =()=> {
        flag(false)
    }
  return (
    <div className="evehero_container">
        <div className='logo_events hidden  ml-[-7%] md:block '>
            <img src="assets/new logo.png" alt="" />
        </div>
        <div className='evehero_text'>
            <h1 className='text-white'>Events of Pramana</h1>
        </div>
        <div className='evehero_buttons'>
            <button onClick={handleToggle} className='evehero_btn'>Road to pramana</button>
            <button onClick={handleTogglePramana} className='evehero_btn'>Pramana</button>
        </div>
    </div>
  )
}

export default Page