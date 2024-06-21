import React from 'react';

class MonComposant extends React.Component {
  handleClick = (msg) => {
    alert(msg);
  }
  render() {
    return (
        <div>
            <button onClick={this.handleClick.bind(this,"test")}>
                Cliquer1
            </button><br/>
            <button onClick={() => this.handleClick("bonjour")}>
                Cliquer2
            </button>
        </div>
    );
  }
}
export default MonComposant;
