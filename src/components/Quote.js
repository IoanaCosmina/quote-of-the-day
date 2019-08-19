import React from 'react';

const Quote = props => {
    const { currentQuote, isEditable } = props;
    const { quote } = props.randomQuote[currentQuote];

    return (
        <div className="quote-container">
            <div className={isEditable ? 'editable' : 'not-editable'}>
                <p className="quote-body" contentEditable={isEditable}>
                    <cite>{quote.body}</cite>
                </p>
                <p className="quote-author" contentEditable={isEditable}>
                    {quote.author}
                </p>
            </div>
        </div>
    )
}

export default Quote;