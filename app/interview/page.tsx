import React from "react";

function page() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="/webrtc/vcall/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}

export default page;
