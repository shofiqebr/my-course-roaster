/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({selectedCourse, totalHour, totalRemainingHour }) => {
    console.log(selectedCourse);
    return(
         <div className="w-72 p-5 text-start">
            <h2 className="text-lg font-semibold text-blue-500 py-3">   Credit Hour Remaining {totalRemainingHour} hr</h2>
            <hr />
            {
                <ul className="py-3">
                {selectedCourse.map((course, index) => (
                    <li key={course.id}>
                        {index + 1}. {course.title}
                    </li>
                ))}
            </ul>
                
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            }
            <hr />
            <h2 className="text-lg font-medium">Total Credit Hour : {totalHour}</h2>
         </div>
     );
};

export default Cart;