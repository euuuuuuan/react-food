import FoodList from './FoodList';
import items from '../mock.json';
import {useState} from "react";

function App() {
    const [order, setOrder] = useState('createAt');
    const sortedItems = [...items].sort((a, b) => b[order] - a[order]);  // 내림차순
    // 스프레드 연산자로 original array 변경을 방지
    const handleNewestClick = () => setOrder('createAt');
    const handleCalorieClick = () => setOrder('calorie');

    return (
        <div>
            <div>
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleCalorieClick}>칼로리순</button>
            </div>
            <FoodList items={sortedItems}/>
        </div>
    );
}

export default App;
