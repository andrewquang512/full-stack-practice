import React from 'react';
import TicketList from './components/TicketList.component';
import TicketForm from './components/TicketForm.component';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TicketList/>,
  },
  {
    path: "/create",
    element: <TicketForm/>,
  },
]);

const App: React.FC = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;