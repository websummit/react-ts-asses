import moment from "moment";
import React from "react";

import {
  EventDaysToGo,
  EventLogo,
  LogoContainer,
  TileContainer,
  TileContent,
  TileContentContainer,
  TileLabel,
  TileValue,
} from "./Tile.styles";
// import { IEventTile } from "./Tile.types";

export interface EventTileProps {
  onClick?: (conference: EventTileProps) => void;
  primaryColor?: string;
}

const EventTile: React.FC<EventTileProps> = ({
  endDate,
  image,
  location,
  name,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  primaryColor,
  slug,
  startDate,
}: EventTileProps) => {
  const dateNow = moment();
  const daysToGo = (): number => {
    const eventDate = moment(startDate);

    return Math.abs(dateNow.diff(eventDate, "days"));
  };

  const colors = ["#F8BA26", "#F15A2C", "#CB1977", "#654DA0"];

  return (
    <TileContainer
      onClick={() =>
        onClick({
          endDate,
          image,
          location,
          name,
          primaryColor,
          slug,
          startDate,
        })
      }
    >
      <LogoContainer
        primaryColor={
          primaryColor || colors[Math.floor(Math.random() * colors.length)]
        }
      >
        <EventLogo>
          {image ? <img src={image} alt={name} /> : <span>{name}</span>}
        </EventLogo>
      </LogoContainer>
      <TileContent>
        {slug && (
          <TileContentContainer>
            <TileLabel>Slug:</TileLabel>
            <TileValue>{slug}</TileValue>
          </TileContentContainer>
        )}
        {location && (
          <TileContentContainer>
            <TileLabel>Location:</TileLabel>
            <TileValue>{location}</TileValue>
          </TileContentContainer>
        )}
        {startDate && endDate && (
          <TileContentContainer>
            <TileLabel>Dates:</TileLabel>
            <TileValue>
              {moment(startDate).format("LL")} - {moment(endDate).format("LL")}
            </TileValue>
          </TileContentContainer>
        )}
        <EventDaysToGo>{daysToGo()} days to go</EventDaysToGo>
      </TileContent>
    </TileContainer>
  );
};

export default EventTile;
