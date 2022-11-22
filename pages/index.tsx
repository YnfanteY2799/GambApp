import { ReactElement, useRef } from "react";
import { PageWrapper } from "../components";
import { useDetectOutsideClick } from "../utils/useIsOutSide";
import Home from './Home';
export default function Home(){
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive( (_)=> !isActive);

  return (
    <PageWrapper active={0}>
    <Home/>
    </PageWrapper>
  );
}

