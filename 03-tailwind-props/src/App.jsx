import "./App.css";
import { Card } from "./components/Card";
let myobj = {
  name: "shreyash",
  age: 21,
};

let newarr = [1, 2, 4, 5];

const objectInfo = {
  username: "shreyash",
  imgsrc: "https://picsum.photos/200/300",
  role: "frontend developer",
  summary:
    "frontend developer with skills react , next , tailwind css , rest apis integration ",
  posts: 12,
  followers: 1.5,
  following: 450,
};

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded -xl">tailwind css</h1>
      <Card info={objectInfo} />
    </>
  );
}

export default App;
