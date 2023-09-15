/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({selectedCourse, totalHour, totalRemainingHour }) => {
    console.log(selectedCourse);
    return(
         <div className="w-72 p-5">
            <h2>   Credit Hour Remaining {totalRemainingHour} hr</h2>
            <hr />
            {
                selectedCourse.map((course) => (
                 <li key={course.id}>
                    {course.title}
                    </li>
                ))
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            }
            <hr />
            Total Credit Hour : {totalHour}
         </div>
     );
};

export default Cart;