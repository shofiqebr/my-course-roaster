Project Features:

* Course Selection: Users can select courses by clicking the "Select" button on each course card. The selected courses are stored in the selectedCourse state.

* Toast Notifications: Toast notifications are used to provide feedback to users. When a user tries to select a course that has already been selected or exceeds the credit limit, toast notifications are displayed to inform the user of the issue.

* Total Credit Hours: The component displays the total credit hours selected by the user and the remaining credit hours. It prevents users from selecting courses that would exceed the credit limit.


State Management:

State management in this project is handled using React's built-in useState hook. Here's how it works:

selectedCourse: This state variable is an array that stores the selected courses. When a user selects a course, it is added to this array using setSelectedCourse([...selectedCourse, course]).

totalHour: This state variable keeps track of the total credit hours selected by the user. It is updated whenever a new course is selected and reflects the cumulative credit hours of all selected courses.

totalRemainingHour: This state variable calculates and stores the remaining credit hours. It ensures that users do not exceed the maximum credit limit (20 hours). If the limit is exceeded, the user is notified through a toast notification.

useEffect: The useEffect hook is used to fetch course data from a JSON file when the component mounts. It populates the allCourses state variable with the course data.

handleSelectCourse: This function handles the selection of courses. It checks if the selected course already exists in the selectedCourse array and calculates the total credit hours. If the credit limit is exceeded or a course is already selected, it displays an appropriate toast notification.