import { NavLink } from "react-router-dom";
import "./Menu.scss";

export const Menu = () => {
  return (
    <aside className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink className="book-type__item-wrap" to="/posts">
            Posts
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="book-type__item-wrap" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
