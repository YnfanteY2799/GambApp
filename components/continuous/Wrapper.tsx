import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export type PageWapperProps = {
  body: ReactElement;
  active?: number;

};

export default function PageWrapper({ body }: PageWapperProps): ReactElement {
  return (
    <>
      <Navbar />
      {body}
      <Footer />
    </>
  );
}
