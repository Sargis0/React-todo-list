import {TodoHeader} from "./components/todoHeader/TodoHeader";
import AddTodo from "./components/addTodo/AddTodo";
import VisibleTodoList from "./containers/visibleTodoList/VisibleTodoList";
import Footer from "./components/footer/Footer";
import {createContext, useState} from "react";
import {todoItemsLength} from "./store/todoReducer";

export const TotalTodoContext = createContext();

export const App = () => {
  const [totalTodo, setTotalTodo] = useState(todoItemsLength || 0);
  return (
    <div id='main'>
      <TodoHeader/>
      <TotalTodoContext.Provider value={[totalTodo, setTotalTodo]}>
        <AddTodo/>
      </TotalTodoContext.Provider>
      <VisibleTodoList totalTodo={totalTodo}/>
      <Footer totalTodo={totalTodo}/>
    </div>
  )
}

export default App;
