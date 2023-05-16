import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings";

function Header() {

  const setting = useContext(SettingsContext);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: {setting.incomplete} items pending</h1>
    </header>
  )
}

export default Header;