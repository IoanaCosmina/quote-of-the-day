import React, { Component } from 'react';
import RandomQuote from './RandomQuote';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Quote of the Day</h2>
                <div>
                    <RandomQuote />
                </div>
            </div>
        )
    }
}

export default App;