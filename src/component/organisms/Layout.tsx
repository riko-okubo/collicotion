import React, { VFC, ReactNode, useEffect } from "react";
import { Footer } from "../molecules/Footer";
import { Header } from '../molecules/Header';

type Props = {
    children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>  
            <Header />
                <div>{children}</div>
            <Footer />
        </>
    )
}