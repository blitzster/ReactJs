

function List() {
    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }];
    // fruits.sort();

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse sort
    // fruits.sort((a, b) => a.calories - b.calories); //Numeric
    // fruits.sort((a, b) => b.calories - a.calories); //Reverse Numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>)
    const listItems = fruits.map(Fruit => <li key={Fruit.id}>{Fruit.name}: &nbsp; <b>{Fruit.calories}</b></li>)
    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);  //<li key={fruit.name}> removes the warning in the web page.
    return (<ol>{listItems}</ol>);
}
export default List