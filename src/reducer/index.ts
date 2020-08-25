export const reducer = (state:State, action:Actions) => {
    switch (action.type) {
      case 'add': {
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            completed: false,
          },
        ];
      }

      case 'toggle': {
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }

      case 'remove': {
        return state.filter((todo) => todo.id !== action.id);
      }
      
      case 'clear': {
        return state.filter((todo) => !todo.completed);
      }

      default:
        return state;
    }
  }