const App = () => (
    <div>
        <Person
        name="Mark"
        age={13}
        hobbies={[video games, watching TV, running]}
        />
           <Person
        name="Julia"
        age={27}
        hobbies={[reading,video games, cooking]}
        />
           <Person
        name="Sam"
        age={7}
        hobbies={[Playing kick ball, drawing, eating]}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))