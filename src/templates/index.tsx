import * as React from "react";

export const getPath = () => {
    return "index.html";
}

const Index = () => {
  return (
    <div>
      {["blue", "brown", "gray", "green", "orange", "purple", "red", "yellow"]
        .toSorted()
        .map((e) => (
          <a key={e} href={`/${e}`}></a>
        ))}
    </div>
  );
};

export default Index;