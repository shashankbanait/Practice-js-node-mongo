/* 






*/
const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "I am an h1 tag"),
                React.createElement("h2", {}, "I am an H2 tag"),
                React.createElement("h3", {}, "I am an H3 tag")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I am an h1 tag"),
                React.createElement("h2", {}, "I am an H2 tag"),
                React.createElement("h3", {}, "I am an H3 tag")
            ]
        )
    ]
)




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);