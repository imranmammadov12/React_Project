import { Form, useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}

const Task = () => {
  // const { task } = useLoaderData();
  
    const task = {
        name: "Task1",
        details: "Details"
    }

    return(
        <div id="task">
            <h1>
                {task.name}
            </h1>
            <p>
                {task.details}
            </p>
        </div>
    )
}

export default Task;