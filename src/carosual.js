import React from "react";
import styled, { keyframes, css } from "styled-components";
import ad1 from "./assets/1aa.svg";
import ad2 from "./assets/2aa.svg";
import Ad3 from "./assets/3aa.svg";
import ad4 from "./assets/4aa.svg";

const Carousel = () => {
  const row1 = [ad1, ad2, Ad3, ad4];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((e) => (
              <ImageGroup>
                <Image src={e} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((e) => (
              <ImageGroup>
                <Image src={e} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default Carousel;

const AppContainer = styled.div`
  z-index: -2;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #000000;

  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// const Text = styled.div`
//   font-size: 35px;
//   font-weight: 500;
//   margin-bottom: 10px;
//   color: #02203c;
// `;

const Marquee = styled.div`
  display: flex;
  width: 1200px;

  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* white-space: nowrap; */
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: sticky; /* border: 1px solid black; */
  border-radius: 0.5rem;
  /* aspect-ratio: 16/9; */
  /* padding: 5px 20px; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
