import { Link } from "react-router-dom";
import { Routes } from "../Constants/Routes";

export default function Index() {
  return (
    <>
      <p>
        This is my practical way of learning and improving my knowledge of React hooks.
      </p>
      <nav>
        {Object.values(Routes).filter((r) => r !== "/").map((route: string) => (
          <Link to={route} >{route.toLocaleUpperCase().replaceAll(/[\W-]+/g, " ")}</Link>
        ))}
      </nav>
    </>
  )
}