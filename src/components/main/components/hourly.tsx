import { Card, CardHead } from "../../styled";

import { SplitData } from "./split-data";

export const Hourly = () => (
  <Card>
    <CardHead>Hourly Forecast</CardHead>
    <SplitData
      items={[
        {
          title: "Now",
          temperature: 28,
          temperatureColor: "blue",
          bold: true,
          percent: 47,
        },
        {
          title: "8 pm",
          temperature: 27,
          temperatureColor: "blue",
          percent: 47,
        },
        {
          title: "9 pm",
          temperature: 26,
          temperatureColor: "blue",
          percent: 49,
        },
        {
          title: "10 pm",
          temperature: 25,
          temperatureColor: "blue",
          percent: 70,
        },
        {
          title: "11 pm",
          temperature: 23,
          temperatureColor: "blue",
          percent: 71,
        },
      ]}
    />
  </Card>
);
