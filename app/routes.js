// FRONT-END: React Routes
// Establishing our Component hierarchy for passing down states/props
// Setting route paths for link navigation

// DEPENDENCIES================================================================
import React from "react";
import { Route, IndexRoute, browserHistory } from "react-router";

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "./components/Application";
// Children
import Home from "./components/Home";
import Find from "./components/Find";
import Post from "./components/Post";

// COMPONENT ROUTES============================================================
export default (
  	<Route component={Application}>
    	<Route path="/" component={Home} />
    	<Route path="/find" component={Find} />
    	<Route path="/post" component={Post} />
    </Route>
);