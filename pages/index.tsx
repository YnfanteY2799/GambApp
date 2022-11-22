import { ReactElement, useRef } from "react";
import { PageWrapper } from "../components";
import { useDetectOutsideClick } from "../utils/useIsOutSide";
import {default  as NHome }from './Home';


export default function Home(){


  return (
    <PageWrapper active={0}>
      <NHome></NHome>
    </PageWrapper>
  );
}

