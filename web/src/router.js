import React from "react";
import { BrowserRouter as Router, Route } from "react-router";

import Join from "./pages/Join";
import Chat from "./pages/Chat";
// import { Container } from './styles';

const router = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default router;
