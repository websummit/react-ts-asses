import styled from "styled-components";

export const TileContainer = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => props.theme?.surface || "#FAFAFA"};

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${(props) => props.theme?.hoverLight || "#E0E0E0"};
  }

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  font-family: "Inter", system-ui;
  font-size: 14px;
`;

export const LogoContainer = styled.div<{ primaryColor: string }>`
  width: 100%;
  background-color: ${(props) => props.primaryColor || "#000000"};
  border-bottom: 1px dashed #664cea;
  border-radius: 4px 4px 0 0;
  min-height: 100px;
  color: ${(props) =>
    props.theme?.colors?.custom.foreground.white.value || "white"};
  font-weight: bold;
  font-size: 24px;
`;

export const EventLogo = styled.div`
  padding: 16px;
  display: flex;
  min-height: 100px;
  height: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 80px;
  }
`;

export const TileContent = styled.div`
  padding: 12px;
  height: 128px;
`;

export const TileContentContainer = styled.div`
  padding-top: 5px;
`;

export const TileLabel = styled.div`
  position: static;
  left: 0;
  top: 0;
  font-style: normal;
  font-weight: 600;

  line-height: 21px;
  letter-spacing: -0.02em;
  margin: 0 8px;
  display: inline;
  color: ${(props) =>
    props.theme?.colors?.custom.foreground.primary || "#0D173D"};
`;

export const TileValue = styled.div`
  position: static;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin: 0 8px;
  display: inline;
  color: ${(props) =>
    props.theme?.colors?.custom.foreground.primary || "#0D173D"};
`;

export const EventDaysToGo = styled.div`
  position: static;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.02em;
  margin: 0 8px;
  padding-top: 10px;
  color: ${(props) =>
    props.theme?.colors?.custom.foreground.primary || "#0D173D"};
`;
