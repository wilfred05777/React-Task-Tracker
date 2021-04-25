import Task from "./Task";
// import { useState } from "react";

// const tasks = [
//   {
//     id: 1,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting at School",
//     day: "Feb 6th at 1:30pm",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Food Shopping",
//     day: "Feb 5th at 2:30pm",
//     reminder: false,
//   },
// ];

// export const Tasks = (props) => {
export const Tasks = ({ tasks, onDelete }) => {
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Doctors Appointment",
  //       day: "Feb 5th at 2:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Meeting at School",
  //       day: "Feb 6th at 1:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 3,
  //       text: "Food Shopping",
  //       day: "Feb 5th at 2:30pm",
  //       reminder: false,
  //     },
  //   ]);

  return (
    <>
      {tasks.map((tasks) => (
        // <h3 key={tasks.id}>{tasks.text}</h3>
        <Task key={tasks.id} task={tasks} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
