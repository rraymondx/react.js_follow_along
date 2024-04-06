
function Food(){

    const food1 = "Sushi";
    const food2 = "Udon"

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food