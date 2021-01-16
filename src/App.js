import React from "react";
import Tabs from "./Components/Tabs";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: "Tab 1 content showing here",
    },
    {
      label: "Tab 2",
      content: "Tab 2 content showing here",
    },
    {
      label: "Tab 3",
      content: "Tab 3 content showing here",
    },
  ];
  return (
    <div className="App-header">
      <Tabs items={tabs} />
    </div>
  );
}

export default App;
