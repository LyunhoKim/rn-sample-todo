import createStore from 'react-waterfall';
import { devTool } from './devtools';

const config = {
  initialState: {
    inputValue: '',
    todos: [],
    type: 'All'
  },
  actionsCreators: {
    // action 사용 시 주의사항:
    // 1. action으로 선언된 함수의 인자는 반드시 아래와 같은 형식을 따른다.
    //    functionName(state, actions, fuctions_parameter)
    // 2. 그리고 object를 리턴하게 되면 setState 와 동일한 효과를 가진다.
    // 3. 반드시 state 형식으로 리턴해야한다?

    inputChange: (state, actions, text) => {                 
      return {inputValue: text}
    },  
    submitTodo: ({inputValue, todos}) => {
      console.log('inputValue', inputValue);      
      if(inputValue.match(/^\s*$/)) {
        return {inputValue};
      }
      const todo = {
        title: inputValue,
        todoIndex: todos.length,
        complete: false
      }      
      const newTodos = [...todos, todo];
      return {
        todos: newTodos,
        inputValue: ''
      }
    },  
    toggleComplete: ({todos}, actions, index) => {
      let newTodos = todos.map(
        todo => { 
          if(todo.todoIndex === index) 
            todo.complete = !todo.complete;
          return todo;      
        }
      );
      return { todos: newTodos };
    },  
    deleteTodo: ({todos}, actions, index) => {    
      let newTodos = todos.filter( todo => todo.todoIndex !== index);    
      return { todos: newTodos };      
    },  
    setType: (state, actions, type) => {
      return { type };
    }
  }
}

export const {
  Provider,
  Consumer,
  actions,
  getState,
  connect,
  subscribe,
} = createStore(config);