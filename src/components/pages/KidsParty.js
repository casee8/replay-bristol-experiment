import React, { Component } from 'react';

class KidsParty extends Component {
  render() {
    return (
      <div className='main-div'>
        <div className='container'>
          <div>
            <h1 className='secondary-font'>Kid’s party</h1>
          </div>
          <div>
            <p>
              Get the party started! If you’re looking for something on a budget
              in a safe environment or something that is unique and fun, Replay
              is the place to go.
            </p>
            <p>
              We run parties for all ages with a variety of options to make sure
              that we can find something for you. Check out our children party
              packages below and let us know what you think! We are always open
              to suggestions.
            </p>
          </div>
          <hr />
          <div className='card'>
            <h3 className='text-center'>
              <i className='fas fa-star gold'></i> Gold{' '}
              <i className='fas fa-star gold'></i>
            </h3>
            <p>Minimum number of guests: 6</p>
            <p>Price: £10/person</p>
            <p>
              Basement for 3 hrs including board games, ping pong, table
              football and darts. Reserved table for the parents upstairs with
              no play fee and free coffee/tea each.
            </p>
            <p>Mini Margherita pizza/child</p>
            <p>Unlimited squash</p>
            <p>Personalized Birthday cake available upon request</p>
          </div>
          <div className='card'>
            <h3 className='text-center'>
              <i className='fas fa-star silver'></i> Silver{' '}
              <i className='fas fa-star silver'></i>
            </h3>
            <p>Minimum number of guests: 6</p>
            <p>Price: £7/person</p>
            <p>
              Basement for 3 hrs including board games, ping pong, table
              football and darts. Free reserved table for the parents upstairs
              with no play fee.
            </p>
            <p>Any milkshake/child</p>
            <p>Personalized Birthday cake available upon request</p>
          </div>
          <div className='card'>
            <h3 className='text-center'>
              <i className='fas fa-star bronze'></i> Bronze{' '}
              <i className='fas fa-star bronze'></i>
            </h3>
            <p>Minimum number of guests: 10</p>
            <p>
              Price: Play charge of £3/person and a minimum spending of £40
              including kids and parents drinks and food. Basement for 3 hrs
              including board games, ping pong, table football and darts.
            </p>
            <p>Personalized Birthday cake available upon request</p>
            <p>
              Notes: Please make sure you pre book the session and reserve a
              table for the parents with the numbers. We have to be informed
              about any dietary requirement minimum 2 days before the event.
            </p>
            <p>
              Available dates: Any time between Monday and Sunday within and out
              of opening hours depending on availability, except Friday and
              Saturday evening.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default KidsParty;
