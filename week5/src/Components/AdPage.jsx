import React, { useState } from "react";
import Ad from "./Ad";

export default function Adpage() {
  const [showAd, setShowAd] = useState(true);
  // showAd는 Ad에서 사용한 변수, setShowAd는 아래서 사용할 함수 정의

  function ToggleClick() {
    setShowAd(!showAd);
  }

  return (
    <div>
      <Ad showAd={showAd} />
      <button onClick={ToggleClick}>
        {showAd ? "광고 안 보기" : "광고 보기"}
      </button>
    </div>
  );
}
