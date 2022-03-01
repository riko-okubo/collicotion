import React, { VFC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from './Header';

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