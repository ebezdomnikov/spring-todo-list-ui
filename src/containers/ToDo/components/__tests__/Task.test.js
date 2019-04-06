import React from "react";
import ReactDOM from "react-dom";
import Task from "../Task";

it("renders task component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Task id={"1"} text={"text"} favorite={false} done={false} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
