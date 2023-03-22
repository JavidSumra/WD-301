import "./TaskCard.css";

const card = (props) => {
  // let DateObj = new Date(),
  //   dueDate,
  //   monthName,
  //   month,
  //   Year,
  //   providedDate;
  // let monthArr = {
  //   JANUARY: 0,
  //   FEBRUARY: 1,
  //   MARCH: 2,
  //   APRIL: 3,
  //   MAY: 4,
  //   JUNE: 5,
  //   JULY: 6,
  //   AUGUST: 7,
  //   SEPTEMBER: 8,
  //   OCTOBER: 9,
  //   NOVEMBER: 10,
  //   DECEMBER: 11,
  // };

  // if (props.dueDate) {
  //   monthName = props.dueDate.split(" ")[1].toUpperCase();
  //   dueDate = props.dueDate.split(" ")[0].split(/[A-Z]/i)[0];
  // } else {
  //   monthName = props.completedAtDate.split(" ")[1].toUpperCase();
  //   dueDate = props.completedAtDate.split(" ")[0].split(/[A-Z]/i)[0];
  // }

  // month = monthArr[monthName] + 1;
  // Year = DateObj.getFullYear();

  // providedDate = month + "/" + dueDate + "/" + Year;
  // console.log(`${props.title}:${providedDate}`);
  return (
    <div className="my-7 border p-4 border-black rounded w-full">
      <h2 className="my-2 text-lg">{props.title}</h2>

      {props.dueDate ? (
        <h3 className="text-sm">Due on: {props.dueDate}</h3>
      ) : (
        <h3 className="text-sm">Completed: {props.completedAtDate}</h3>
      )}
      <h3 className="text-sm">Assignee: {props.assigneeName}</h3>
    </div>
  );
};

export default card;
