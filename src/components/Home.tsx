import { Box } from "@mui/material";
import { format } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { getMatrix } from "../utils/algo";
import { CYCLE_KEY, DAY_KEY, PERIODS, WEEK } from "../utils/constants";
import { Steps } from "../utils/enums";
import { getNavigatorLocation } from "../utils/getNavigatorLocation";
import jupiter from "./planets/jupiter.svg";
import mars from "./planets/mars.svg";
import mercury from "./planets/mercury.svg";
import moon from "./planets/moon.svg";
import neptune from "./planets/neptune.svg";
import saturn from "./planets/saturn.svg";
import venus from "./planets/venus.svg";

export const MAP_CYCLE_ICONS = new Map([
  [Steps.S, saturn],
  [Steps.T, jupiter],
  [Steps.M, mars],
  [Steps.H, mercury],
  [Steps.N, venus],
  [Steps.K, neptune],
  [Steps.L, moon],
]);

const styles = {
  wrapDay: {
    display: "inline-block",
  },
  wrapPlanet: {
    display: "inline-block",
  },
  planet: {
    width: 25,
    margin: 2,
  },
  rtl: {
    direction: "rtl",
  },
  rtlCell: {
    direction: "rtl",
    textAlign: "right", //https://stackoverflow.com/a/58347195
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  selectLang: {
    marginTop: 24,
    marginInlineStart: "auto",
  },
  button: {
    marginBottom: 0,
  },
};

export const Home = () => {
  const [sunTime, setSunTime] = useState();

  const matrix = useMemo(() => getMatrix(), []);

  const intl = useIntl();

  console.debug(matrix);

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
        <table>
          <thead>
            <tr>
              <th></th>
              {PERIODS.map((period) => (
                <th key={period}>{format(matrix[0][period].date, "HH:mm")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WEEK.map((day) => (
              <tr key={day}>
                <td>
                  <Box sx={styles.wrapDay}>
                    <FormattedMessage id={DAY_KEY[day]} />
                  </Box>
                </td>
                {PERIODS.map((period) => {
                  const step = matrix[day][period].step;
                  return (
                    <td key={period}>
                      <Box
                        sx={styles.wrapPlanet}
                        data-balloon-pos="up"
                        aria-label={intl.formatMessage({
                          id: CYCLE_KEY[step],
                        })}
                      >
                        <img
                          style={styles.planet}
                          src={MAP_CYCLE_ICONS.get(step)}
                          alt={"plt" + period}
                        />
                      </Box>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={clickLocation}>Location</button>
        {!!sunTime && <pre>{JSON.stringify(sunTime, null, 2)}</pre>}
      </main>
    </>
  );
};
