import React from 'react';

const CustomQuote = props => {
    const { customQuote } = props;

    return (
        <div>
            <hr />
            <div className="custom-container">
                <p className="quote-body">
                    <cite>{customQuote.quote.body}</cite>
                </p>
                <p className="quote-author">
                    {customQuote.quote.author}
                </p>
            </div>
        </div>
    )
}

const CustomQuotes = props => {
    return (
        <div>
            <h2>Custom Quotes</h2>
            <p className="info">Click on "Edit" to add your own quotes.</p>
            {
                props.customQuote.map(quote => (
                    <CustomQuote key={quote.length} customQuote={quote} />
                ))
            }
        </div>
    )
}

export default CustomQuotes;