import { CardButton, Card, CardHead } from "../../styled";
import { SplitData } from "./split-data";

export const Today = () => (
  <Card>
    <CardHead>Today's Forecast for Kyiv, Kiev, Ukraine</CardHead>
    <SplitData
      variant="gray"
      items={[
        { title: "Morning", temperature: 33 },
        { title: "Afternoon", temperature: 32 },
        {
          title: "Evening",
          temperature: 25,
          percent: 70,
          bold: true,
          temperatureColor: "blue",
        },
        { title: "Overnight", temperature: 21, percent: 37 },
      ]}
    />
    <CardButton>Next Hours</CardButton>
  </Card>
);
