import React from 'react';
import SettingProvider from '../src/Context/Settings';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <Todo />
      </SettingProvider>
    );
  }
}
