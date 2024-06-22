import React from "react";

export const SignIn: React.FC<any> = () => {
  const signInInfo = {
    logoUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fli-logo&psig=AOvVaw3gR-_d8sST9o229MH5LNZT&ust=1719127867302000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLi2ncDY7oYDFQAAAAAdAAAAABAE",
    callback: (response: any) => {
      if (response.error) {
        console.error("Signing Error:", response.error);
        alert("Signing Error: " + response.error);
      } else {
        console.log("Signing Success:", response);
        alert("Signing Success: " + JSON.stringify(response));
      }
    },
  };
  var signingUrl = "https://aeroc-dev.aerem.co/";
  var leegality = new Leegality(signInInfo);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <button
        style={{ height: 30 }}
        onClick={async () => {
          await leegality.init();
          await leegality.esign(signingUrl);
        }}
      >
        Initialize SignIn
      </button>
      <button
        style={{ height: 30 }}
        onClick={async () => {
          await leegality.cancel();
        }}
      >
        Terminate SignIn
      </button>
    </div>
  );
};
