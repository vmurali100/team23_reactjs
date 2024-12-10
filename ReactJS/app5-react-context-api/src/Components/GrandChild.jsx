import React from "react";
import { UserInfoContext, UserInfoContextConsumer } from "./UserContext";

const GrandChild = ({ myDetails }) => {
  return (
    <div id="GrandChild">
      <UserInfoContextConsumer>
        {(val) => {
          
          return <ul>
            <li>{val.salary}</li>
            <li>{val.role}</li>
          </ul>;
        }}
      </UserInfoContextConsumer>
    </div>
  );
};

export default GrandChild;
