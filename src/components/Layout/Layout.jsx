import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <SC.Header>
        <nav>
          <SC.Ul>
            <li>
              <SC.Link to="/">Home</SC.Link>
            </li>
            <li>
              <SC.Link to="add">Add contact</SC.Link>
            </li>
          </SC.Ul>
        </nav>
      </SC.Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
