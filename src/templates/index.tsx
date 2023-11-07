import * as React from "react";

export const getPath = () => {
    return "index.html";
}

const knownColors = ["blue", "brown", "gray", "green", "orange", "purple", "red", "yellow"].sort()

const Index = () => {
  return (
    <div className="">
      {knownColors.map((e) => (
        <>
          <a key={e} href={`/${e}`}>
            {e}
          </a>
          <br />
        </>
      ))}
    </div>
  );
};

export default Index