function Tweet ({name, username, date, message}) {
    return (
    <div>
        <p><b>{name}</b></p>
        <p>{username}</p>
        <p>{date}</p>
        <p>{message}</p>
    </div>
    );
}