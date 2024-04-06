import styles from './List.module.css'
import PropTypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(<>
        <h3 className={styles.listCategory}>{category}</h3>
        <ol className={styles.listItems}>{listItems}</ol>
    </>);

    // const fruits = [{id: 1, name:"apple", calories: 95}, 
    //                 {id: 2, name:"orange", calories: 45}, 
    //                 {id: 3, name:"banana", calories: 105}, 
    //                 {id: 4, name:"pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); (Alphabetical)
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); (Reverse)
    // fruits.sort((a, b) => a.calories - b.calories) (lowest to highest)
    // fruits.sort((a, b) => b.calories - a.calories) (highest to lowest)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);

    // return (<ol>{listItems}</ol>);
}

List.propTypes = {
    catergory: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List