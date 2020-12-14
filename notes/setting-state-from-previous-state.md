**DO NOT** use this:

`this.setState({
        counter: this.state.counter + 1
    }
)`

- this is because React schedules the state object update to be done at an appropriate time
so is not guaranteed the previous state would have been already updated properly
  
Instead to positively guarantee the correct previous state, use another overload of the _setState()_ function 
that takes in a function instead of state object fragment:

`this.setState((prevState, props)) => {
    return {
        counter: prevState.counter + 1
    }
});`