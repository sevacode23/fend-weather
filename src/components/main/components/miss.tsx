import styled from "styled-components";

import { CardButton, Card, CardHead } from "../../styled";
import { SplitPhoto } from "./split-photo";

const SeeMoreButton = styled(CardButton)`
  margin-top: 12px;
`;

export const Miss = () => (
  <Card>
    <CardHead>Don't Miss</CardHead>
    <SplitPhoto
      items={[
        {
          img: "https://s.w-x.co/promo_jan_Mar_1215_0.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60",
          description: "January-March Outlook: How Will the Year Start?",
        },
        {
          img: "https://s.w-x.co/staticmaps/DCT_SPECIAL105_1280x720.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60",
          description:
            "Do You Need to Rethink Your Travel Plans? Here's What to Expect This Week",
        },
        {
          img: "https://s.w-x.co/WarmChristmas122021AM.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60",
          description: "Warm Holiday Week Ahead for Many",
        },
        {
          img: "https://s.w-x.co/MarsWater.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60",
          description: "Huge Discovery on Mars Announced",
        },
      ]}
    />
    <SeeMoreButton>See More</SeeMoreButton>
  </Card>
);
