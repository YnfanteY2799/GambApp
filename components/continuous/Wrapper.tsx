import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export type PageWapperProps = {
  body?: ReactElement;
  active?: number;
  children?: ReactElement;
};

export default function PageWrapper({
  body,
  children,
  active,
}: PageWapperProps): ReactElement {
  return (
    <>
      <Navbar active={active}/>
      {body === undefined ? children : body}
      <Footer />
    </>
  );
}
