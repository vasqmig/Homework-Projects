const App () =>(
    <div>
    <FirstComponent />
    <NamedComponent name="Jill"/>
    </div>
);

React.DOM.render(<App />, document.getElementById("root"));