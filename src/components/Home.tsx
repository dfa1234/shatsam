import { useCallback, useState } from "react";
import { getNavigatorLocation } from "../utils/getNavigatorLocation";
import { Clock } from "./Clock";
import { MatrixTable } from "./MatrixTable";

export const Home = () => {
  const [sunTime, setSunTime] = useState();
  const clickLocation = useCallback(() => {
    getNavigatorLocation()
      .then((result: any) => {
        setSunTime(result);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Shatsam</h1>
      </header>

      <main>
        <Clock />

        <button onClick={clickLocation}>Location</button>
        {!!sunTime && <pre>{JSON.stringify(sunTime, null, 2)}</pre>}

        <MatrixTable />
      </main>
    </>
  );
};
