import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetSm.css";

export default function WidgetSm() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        // console.log(res);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  // console.log(users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <>
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||
                  "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
