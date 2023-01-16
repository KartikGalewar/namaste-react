import { useState } from "react";

const Title = () => {
  return <h1>Title of Namaste react</h1>;
};

const Header = () => {
  const [loginAuth, setLoginAuth] = useState(false);
  return (
    <>
      <Title />

      <div className="cls-nav-bar">
        <img
          src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="food villa logo"
        />
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Contact us</li>
          {loginAuth ? (
            <button
              onClick={() => {
                setLoginAuth(false);
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setLoginAuth(true);
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
