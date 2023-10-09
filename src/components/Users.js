import React from "react";
import {
  Link,
  Outlet,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleActiveUser = () => {
    navigate({
      pathname: "/userList",
      search: createSearchParams({
        filter: "active",
      }).toString(),
    });
  };
  return (
    <div>
      <ul>
        <li>
          <Link to={`userDetails/${1}`}>User Details 1</Link>
        </li>
        <li>
          <Link to={`userDetails/${2}`}>User Details 2</Link>
        </li>
        <li>
          <Link to={`userDetails/${3}`}>User Details 3</Link>
        </li>
      </ul>
      <button onClick={handleActiveUser}>Active User</button>
      <button>All User</button>
      <Outlet />
    </div>
  );
}
