
import './App.css'
import { BsBook } from 'react-icons/Bs';
import { PiCurrencyDollar } from "react-icons/pi";


function App() {
  
 

  return (
    <>
      <div className="card w-96 px-0 bg-base-100 shadow-xl">
  <figure className="px-0 pt-1">
    <img src="https://i.ibb.co/m8VVH3p/Rectangle-2-2.png" alt="Shoes" className="rounded-xl h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Introduction to C Programming</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <div className='flex justify-center items-center
     gap-3'>
      <div className="symbole"><PiCurrencyDollar></PiCurrencyDollar></div>
      <div>Price : 15000</div>
      <div className="symbole"><BsBook></BsBook></div>
      <div>Credit : 1hr</div>
   </div>
    <div className="card-actions ">
      <button className="btn btn-primary w-72">Select</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
