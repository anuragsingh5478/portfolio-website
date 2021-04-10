import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./homepage.css";
export default function Homepage() {
  return (
    <div className="homepage">
      {/* name */}
      <div className="homepage-container">
        <div className="name">
          <ReactTypingEffect
            text={["Hi! my name is Anurag Singh"]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            eraseDelay="100000"
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={i >= 15 && i <= 26 ? { color: "#f05945" } : {}}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
