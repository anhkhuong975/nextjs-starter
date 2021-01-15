import '../styles/global.css';
import "../styles/main-layout.scss";
import "../styles/info.scss";
import React from "react";
import '../styles/home.scss'
import {wrapper} from "../store/root-reducer";

const WrappedApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

