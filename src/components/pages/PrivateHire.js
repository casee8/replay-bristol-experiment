import React, { Component } from 'react';

class PrivateHire extends Component {
  render() {
    return (
      <div className='main-div'>
        <div className='container'>
          <h1 className='secondary-font'>Private Events</h1>
          <div className='card'>
            <h3>
              Are you looking for a unique activity to organize for your team?
            </h3>
            <p>
              Don`t look any further! Brain challenging puzzles, ping pong
              tournaments, dart ball competition and amazing hosts to keep you
              entertained! In case of pre- ordering we are also happy to provide
              meal, that can be selected from our vegeterian menu.
            </p>
            <p>*Maximum capacity: 70 people</p>
          </div>
          <hr />
          <h1 className='secondary-font'>Basement</h1>
          <div className='card'>
            <p>
              If you are planning to bring a smaller group we advise you to hire
              our basement area that includes the possibility to play board
              games, table tennis, table football and dart ball. We also provide
              a bluetooth speaker to make your own music.
            </p>
            <p>*Maximum capacity: 20 people</p>
          </div>
          <hr />
          <div>
            <p className='text-center'>
              For prices and booking please email us to
              <br />
              <a href='mailto:replaybristol@gmail.com'>
                replaybristol@gmail.com
              </a>
              <br />
              or call
              <br />
              <a href='tel:+447437930346'>
                <i className='fas fa-phone'></i> +44 7437 930346
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivateHire;
