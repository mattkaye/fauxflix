import fauxFlixLogo from "./assets/svgs/logo.svg";
import avatarOne from "./assets/images/avatar-1.png";
import avatarTwo from "./assets/images/avatar-2.png";
import avatarThree from "./assets/images/avatar-3.png";
import avatarFour from "./assets/images/avatar-4.png";
import Avatar from "./components/Avatar";
import "./App.css";

function App() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center mt-20 gap-16">
      <img src={fauxFlixLogo} alt="Fauxflix Logo" className="h-24" />
      <h1 className="fluid-4xl">Who's Watching?</h1>
      <ul className="flex flex-wrap md:flex-nowrap gap-6 justify-center md:w-2/3 w-1/3">
        <li>
          <Avatar userName="Don" thumbnail={avatarOne} />
        </li>
        <li>
          <Avatar userName="Artemis" thumbnail={avatarTwo} />
        </li>
        <li>
          <Avatar userName="Mom" thumbnail={avatarThree} />
        </li>
        <li>
          <Avatar userName="Matt" thumbnail={avatarFour} />
        </li>
      </ul>
    </main>
  );
}

export default App;
