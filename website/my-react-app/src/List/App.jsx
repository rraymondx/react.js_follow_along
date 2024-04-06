import List from './List.jsx'


function App() {

    const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana", calories: 105}, 
                    {id: 4, name:"pineapple", calories: 37}];

    const vegs =    [{id: 6, name:"potato", calories: 110}, 
                    {id: 7, name:"calories", calories: 15}, 
                    {id: 8, name:"carrot", calories: 25}, 
                    {id: 9, name:"corn", calories: 63}];


    return(
        <>
            {/* short circuiting */}
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegs.length > 0 && <List items={vegs} category="Vegatbles"/>}
            
        </>
    );
}

export default App