import { useState } from "react";
import "./App.css";
import fauxFlixLogo from "./assets/svgs/logo.svg";
import Avatar from "./components/Avatar";
import LoginLoader from "./components/LoginLoader";

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState(false);

  const handleClick = (e) => {
    e.currentTarget.classList.add("active", "z-10", "pointer-events-none");
    setSelectedAvatar(e.currentTarget);
  };

  const getImgUrl = (fileName) => {
    const imgUrl = new URL(
      `./assets/images/avatars/${fileName}.png`,
      import.meta.url
    ).href;
    return imgUrl;
  };

  const allAvatars = [
    {
      name: "Dan",
      thumbnailUrl: getImgUrl("avatar-1"),
    },
    {
      name: "Amber",
      thumbnailUrl: getImgUrl("avatar-2"),
    },
    {
      name: "Debbie",
      thumbnailUrl: getImgUrl("avatar-3"),
    },
    {
      name: "Artemis",
      thumbnailUrl: getImgUrl("avatar-4"),
    },
  ];
  const showLoader = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return <LoginLoader />;
  };
  return (
    <main className="container mx-auto flex flex-col items-center justify-center mt-20 gap-16">
      <img src={fauxFlixLogo} alt="Fauxflix Logo" className="h-24" />
      <div className={`loading-wrapper ${selectedAvatar ? "active" : ""}`}>
        {selectedAvatar ? showLoader() : null}
      </div>
      <h1 className="fluid-5xl">Who's Watching?</h1>
      <ul className="flex flex-wrap md:flex-nowrap gap-6 justify-center md:w-2/3 w-1/3">
        {allAvatars.map((avatar) => (
          <li onClick={handleClick} key={avatar.name}>
            <Avatar userName={avatar.name} thumbnail={avatar.thumbnailUrl} />
          </li>
        ))}
      </ul>
      <div></div>
      <div
        className={`login-overlay ${selectedAvatar !== false ? "active" : ""}`}
      ></div>
    </main>
  );
}

export default App;
