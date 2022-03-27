import React, { VFC, ReactNode } from "react";
import { Footer } from "../molecules/Footer";
import { Header } from '../molecules/Header';

type Props = {
    children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
    return (
        <>  
            <Header />
                <div>{children}</div>
            <Footer />
        </>
    )
}