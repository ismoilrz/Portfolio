import { lazy } from "react";

const  HomePage = lazy(() => import("./home/home"));
const AboutPage = lazy(() => import("./about/about"));
const PortfolioPage = lazy(() => import("./portfolio/portfolio"));
const ContactPage = lazy(() => import("./contact/contact"));

export {HomePage, AboutPage, PortfolioPage, ContactPage}