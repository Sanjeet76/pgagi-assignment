// Filename - App.js

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route

} from "react-router-dom";

import "./App.css";
import "./index.css";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import WorkflowVisualization from "./component/Workflow/WorkflowVisualization";
import ChatInterface from "./component/Chat/ChatInterface";
import ProfileForm from "./component/Profile/ProfileForm";
import SideMenu from "./component/Navigation/SideMenu";
import Home from "./component/Home/Home";

function App() {
	return (
		<Router>
			<SideMenu />
			<Routes>
				
				<Route path="/companies" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<ProfileForm />} />
				<Route exact path="/chat" element={<ChatInterface />} />
				<Route exact path="/workflow" element={<WorkflowVisualization />} />

			</Routes>
		</Router>
	);
}

export default App;
