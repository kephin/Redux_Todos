# React Patterns

- Declare Method with arrow function, then you don't have to `bind.this`!
- Controlled Input

  ```js
  class AddTodo extends Component {
    state = {
      input: '',
    };

    // declare by arrow function
    onInputChange = evt => {
      console.log(this) // this will be the instance of AddTodo!
      this.setState({ input: evt.target.value });
    }

    render() {
      return (
        <div>
          <input // controlled input
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <button onClick={this.onButtonSubmit}>Add Todo</button>
        </div>
      );
    }
  }
  ```
