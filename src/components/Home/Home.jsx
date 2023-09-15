/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { BsBook } from 'react-icons/Bs';
import { PiCurrencyDollar } from "react-icons/pi";
import Cart from './../Cart/Cart';
const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
        useEffect(() => {
            fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
        },[]);
    return (
        <div className="flex pt-3">
            <div className='grid grid-cols-3 gap-3 '>
            {
                allCourses.map((course) => (
                    <div>
                <div className="card w-80 px-0 bg-base-100 shadow-xl">
  <figure className="px-0 pt-1">
    <img src={course.cover} alt="Shoes" className="rounded-xl mt-3 h-44 w-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{course.title}
    </h2>
    <p>{course.description}</p>
    <div className='flex justify-center items-center
     gap-3'>
      <div className="symbole"><PiCurrencyDollar></PiCurrencyDollar></div>
      <div>price : {course.price}</div>
      <div className="symbole"><BsBook></BsBook></div>
      <div>Credit : {course.credit}</div>
   </div>
    <div className="card-actions ">
      <button className="btn btn-info w-72">Select</button>
    </div>
  </div>
</div>
        </div>
                 ))
            }
            </div>
          
        


            <div className="cart-container">
                <Cart></Cart>
            </div>



        </div>
    );
};

export default Home;