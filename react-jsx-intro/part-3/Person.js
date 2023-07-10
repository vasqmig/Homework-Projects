const Person = (name,hobbies,age) => {
    const voteText = age >= 18
    ? "Go vote!"
    : "Go study!";
    return (
        <div>
            <p>Lern some information about this person:</p>
            <ul>
            <li>Name: {name}</li>
            <li>age: {age}</li>
            <li>Hobiies: <li>{hobbies}</li></li>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}