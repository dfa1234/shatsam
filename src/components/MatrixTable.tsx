import { Box } from "@mui/material";
import { format } from "date-fns";
import { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { getMatrix } from "../utils/algo";
import { CYCLE_KEY, DAY_KEY, PERIODS, WEEK } from "../utils/constants";
import { Steps } from "../utils/enums";
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
};

export const MatrixTable = () => {
  const matrix = useMemo(() => getMatrix(), []);

  const intl = useIntl();

  console.debug(matrix);

  return (
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
  );
};
