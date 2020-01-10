# rn-sample-todo
react native sample app - todo

react-waterfall 적용 시 유의 사항
---
1. action으로 선언된 함수의 인자는 반드시 아래와 같은 형식을 따른다.
   ```
   functionName(state, actions, fuctions_parameter)
   ```
2. object를 리턴하면 setState 와 동일한 효과를 가진다.
3. 반드시 object 형식(state)으로 리턴해야한다.
   ```
   return ;   // 사용 불가
   return 0;  // 사용 불가
   return { todos: newTodos }; // 사용 가능
   ```
   

screen shot
---
<img src='./rn-sample-todo.gif' width='375'>