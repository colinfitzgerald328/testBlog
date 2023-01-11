import logo from './logo.svg';
import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll } from "framer-motion";
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />
  <h1>
    <code>welcome to</code> colin fitzgerald's <code>blog</code>
  </h1>
  <LoremIpsum />
</>
  );
}

export default App;


