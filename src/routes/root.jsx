import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getTasks } from "../tasks";

import { getTask, createTask} from '../tasks'

export async function action() {
  const contact = await createTask();
  return { contact };
}

export async function loader() {
  const tasks = await getTasks();
  return { tasks };
}

const Root = () => {
  const { tasks } = useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Tasks</h1>
          <div>
          <label htmlFor="sortBy">Filtered by: </label>
              <select>
                  <option value="All">All</option>
                  <option value="Done">Done</option>
                  <option value="NotDone">Not done</option>
              </select>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {tasks.length ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <Link to={`task/${task.id}`}>
                    {task.name || task.details ? (
                      <>
                        {task.name} {task.details}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {task.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }

  export default Root;