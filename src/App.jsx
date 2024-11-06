import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Accommodation from "./routes/Accommodation";
import ErrorPage from "./routes/ErrorPage";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/accommodation/:id",
		element: <Accommodation />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
