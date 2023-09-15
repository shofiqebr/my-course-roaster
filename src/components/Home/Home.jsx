/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { BsBook } from 'react-icons/bs';
import { PiCurrencyDollar } from "react-icons/pi";
import Cart from './../Cart/Cart';
const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalHour, setTotalHour] = useState(0);
    const [totalRemainingHour, setTotalRemainingHour] = useState(0);
        useEffect(() => {
            fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
        },[]);

        const handleSelectCourse = (course) => {
            const isExist = selectedCourse.find((item) => item.id == course.id);

            let count = course.credit;
            if(isExist){
              return  alert("already included");
            }
            else{
                selectedCourse.forEach((item)=>{
                count = count + item.credit;
            });

            const totalRemaining = 20-count;

            if(count>20){
                return alert("no remaining credit") 
            }
            else{
                setTotalHour(count);
               setTotalRemainingHour(totalRemaining);
            }
           
                setSelectedCourse([...selectedCourse, course]);
            }
            // console.log(isExist);
           
        };
        console.log(selectedCourse)
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
    <h2 className="card-title font-bold text-[17px]">{course.title}
    </h2>
    <p className='text-sm py-3'>{course.description}</p>
    <div className='pb-3 flex justify-center items-center
     gap-3'>
      <div className="symbole"><PiCurrencyDollar></PiCurrencyDollar></div>
      <div>price : {course.price}</div>
      <div className="symbole"><BsBook></BsBook></div>
      <div>Credit : {course.credit}hr</div>
   </div>
    <div className="card-actions ">
      <button onClick={()=> handleSelectCourse(course)} className="btn btn-info w-72">Select</button>
    </div>
  </div>
</div>
        </div>
                 ))
            }
            </div>
          
        


            <div className="cart-container">
                <Cart selectedCourse={selectedCourse} totalHour={totalHour} totalRemainingHour={totalRemainingHour}></Cart>
            </div>



        </div>
    );
};

export default Home;