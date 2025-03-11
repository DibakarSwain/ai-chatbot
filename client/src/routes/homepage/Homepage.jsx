import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/download.jpeg" alt="" className="orbital"/>
      <div className="left">
        <h1>SARBA GYAN</h1>
        <h2>Talk. Learn. Automate. Beyond just chat—experience intelligence.

</h2>
        <h3>
        AI that Understands You | ⚡ Instant & Smart Replies | 🛡️ 100% Private & Secure
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot1.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/ai.png"
                  : typingStatus === "human2"
                  ? "/bot2.png"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:Are you really that smart?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:Smarter than you think! Ask me anything.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:What is the key to wisdom?"
,
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:Listening, learning… and a great chatbot by your side.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo1.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
