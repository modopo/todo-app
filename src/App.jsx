import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Todo />} />
          <Route path="/settings" element={<Todo />} />
        </Routes>
      </BrowserRouter >
    );
  }
}
