function App () {
   return ( <div>
        <Tweet 
        name="John"
        username="J2Cool4School"
        date={new Date().toDateString()}
        message="School is sooo boring!"
        />
         <Tweet 
        name="Roberto"
        username="Rob1234"
        date={new Date().toDateString()}
        message="Why do test have to be so hard :("
        /> <Tweet 
        name="Maria"
        username="Maria2point0"
        date={new Date().toDateString()}
        message="School is sooooo much fun!"
        />
    </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"))