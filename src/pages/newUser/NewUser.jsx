import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New user</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"></input>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john Smith"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johnSmith@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="email" placeholder="+1 23 456 78"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="email" placeholder="New York | USA"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
          </div>
        <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
