import { useState } from "react";
import "../styleComponents/Textbox.css";
import TipsBox from "./TipsBox";

export default function Textbox(props) {
  const [showTips, setShowTips] = useState(false);
  const korostettuFraasi = "tarjoaa aikuisille konkreettisia vinkkejä";

  const isString = typeof props.teksti === "string";
  const splitText = isString ? props.teksti.split(korostettuFraasi) : [];

  return (
    <div className={`textbox fade-in ${showTips ? "textbox-expanded" : ""}`}>
      <div className="textbox_text">
        {isString && splitText.length === 2 ? (
          <>
            <span className="textbox_inline">
              {splitText[0]}
              <span
                className="korostettu-linkki"
                onClick={() => setShowTips(!showTips)}
              >
                {korostettuFraasi}
              </span>
              {splitText[1]}
            </span>
          </>
        ) : (
          props.teksti
        )}
      </div>

      {showTips && isString && splitText.length === 2 && <TipsBox />}
    </div>
  );
}