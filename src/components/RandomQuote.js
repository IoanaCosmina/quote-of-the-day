import React, { Component } from 'react';
import Quote from './Quote';
import CustomQuotes from './CustomQuote';
import CustomButton from './CustomButton';

class RandomQuote extends Component {
    state = {
        randomQuote: [{
            quote: {}
        }],
        currentQuote: 0,
        isEditable: false,
        customQuote: []
    };

    componentDidMount() {
        this.fetchQuote();
    }

    fetchQuote = () => {
        fetch('https://favqs.com/api/qotd')
            .then(response => response.json())
            .then(json => {
                const randomQuote = this.state.randomQuote.slice();
                this.setState({
                    randomQuote: randomQuote.concat([{
                        quote: json.quote
                    }]),
                    currentQuote: randomQuote.length,
                    isEditable: this.state.isEditable,
                    customQuote: this.state.customQuote
                });
            })
            .catch(error => alert(error.message));
    }

    getPreviousQuote = () => {
        if (this.state.currentQuote > 1) {
            this.setState({
                currentQuote: this.state.currentQuote - 1
            });
        }
    }

    getNextQuote = () => {
        if (this.state.currentQuote < this.state.randomQuote.length - 1) {
            this.setState({
                currentQuote: this.state.currentQuote + 1
            });
        }
    }

    toggleButton = () => {
        (this.state.isEditable) ? this.saveChanges() : this.makeEditable();
    }

    makeEditable = () => {
        this.setState({ isEditable: !this.state.isEditable });
    }

    saveChanges = () => {
        let quoteBody = document.getElementsByTagName('cite')[0].innerHTML;
        let quoteAuthor = document.getElementsByClassName('quote-author')[0].innerHTML;
        const customQuote = this.state.customQuote;

        customQuote.push({
            quote: {
                author: quoteAuthor,
                body: quoteBody
            }
        })
        this.setState({
            customQuote: customQuote,
            isEditable: !this.state.isEditable
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchQuote}>Show random quote</button>
                <div className="container">
                    <button className="previous" onClick={this.getPreviousQuote}>&lt;</button>
                    <Quote
                        randomQuote={this.state.randomQuote}
                        currentQuote={this.state.currentQuote}
                        isEditable={this.state.isEditable}
                    />
                    <button className="next" onClick={this.getNextQuote}>&gt;</button>
                    <CustomButton
                        isEditable={this.state.isEditable}
                        onClick={this.toggleButton}
                    />
                </div>
                <hr />
                <CustomQuotes
                    customQuote={this.state.customQuote}
                    isEditable={this.state.isEditable}
                />
            </div>
        )
    }
}

export default RandomQuote;