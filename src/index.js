import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Trabzonspor"
                cardText="Card Desc Text 1"
                updatedTime="2 min ago updated."
                imageId="1"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Bursaspor"
                cardText="Card Desc Text 2"
                updatedTime="4 min ago updated."
                imageId="10"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Samsunspor"
                cardText="Card Desc Text 3"
                updatedTime="5 min ago updated."
                imageId="100"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

root.render(<App />);
