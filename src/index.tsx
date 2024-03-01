import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Root, { loader as rootLoader,   action as rootAction, } from "./routes/root";
import Task, {loader as taskLoader} from './routes/Task';
import TaskEdit from './routes/TaskEdit';

const rootContainer = document.querySelector('#root');

if(rootContainer === null) throw new Error('Can\'t find root container');


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    children: [
        {
          path: "/task/:taskId", 
          element: <Task />,
          loader: taskLoader,
        },
        {
          path: "/task/:taskId/edit",
          element: <TaskEdit />,
          loader: taskLoader,
        },
    ],
  },
]);


const root = createRoot(rootContainer);

root.render(
<StrictMode>
    <RouterProvider router={router} />
</StrictMode>
);

