import "../styles/global.css";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="py-24 px-12 lg:px-48 font-latoBold">
      <Navbar />
      <AnimatePresence initial={true}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
