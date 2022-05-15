import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Routes } from "../Constants/Routes";

export default function Header() {
  const path = useLocation().pathname;
  const history = useNavigate();
  const [index, setIndex] = useState(false);
  
  useEffect(() => {
    if (path !== Routes.INDEX) {
      setIndex(true);
    } else {
      setIndex(false);
    }
  }, [path])

  return (
    <header className="App-header">
      {index && <button onClick={() => history(Routes.INDEX)}>Back</button>}
      <h1>React Hooks Practical Implementations</h1>
    </header>
  )
}