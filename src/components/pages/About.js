import React, { Component } from 'react';
import playing_with_friends from '../../media/img/playing_with_friends.jpeg';
import img_3878 from '../../media/img/IMG_3878.jpeg';

class About extends Component {
  render() {
    return (
      <div>
        <div className='background'></div>
        <div className='white-bckgrnd'>
          <div className='container'>
            <h1 className='secondary-font text-center extra-padding'>
              What is Replay?
            </h1>
            <div className='fifty-fifty'>
              <div>
                <div>
                  <p>
                    Replay is a bar where you can enjoy playing with your
                    friends while having a drink or nibbling snacks whether it
                    is a platter of nachos, a bowl of nuts or wasabi peas.
                  </p>
                </div>
                <div>
                  <p>
                    We also offer delicious coffees, locally sourced loose leaf
                    teas and alcoholic beverages. But more importantly, Replay
                    is about the passion for board games and play activities.
                  </p>
                </div>
                <div>
                  <p>
                    Our aim is to share this passion with you so you can
                    experience the importance of joint engagement, and hopefully
                    pass it on to others.
                  </p>
                </div>
              </div>
              <div>
                <img className='two-imgs' src={playing_with_friends} alt='' />
                <img className='two-imgs sec-img' src={img_3878} alt='' />
              </div>
            </div>
            <hr />
            <h1 className='secondary-font text-center padding'>
              How does it work?
            </h1>
          </div>
        </div>
        <div className='container'>
          <p className='transparent-bckgrnd'>
            There is a £3 play charge per for a 3 hrs stay, for this you can
            play with as many games as you want from our 300 board games
            library. You can play ping pong in our basement which is free
            between Tuesday and Thursday, and £3 for half an hour between Friday
            and Sunday. Please book a table so we expect you coming.
          </p>
        </div>
        <div className='white-bckgrnd'>
          <div className='container'>
            <h1 className='secondary-font text-center'>Why visiting us?</h1>
            <div>
              <img alt='' />
              <p>
                Because we have a more than 300 board game collection including
                the newest releases and most popular ones.
              </p>
            </div>
            <div>
              <img alt='' />
              <p>
                We are here to help you choose the most suitable games for you
                depending on the number of players, the level of experience and
                the required time duration.
              </p>
            </div>
            <div>
              <p>
                In case you are planning to buy a new board game, you can try it
                here before you buy it! If you decide to buy the game, we are
                able to help you with 5% discount at Rules of Play, St. Nicholas
                Market.
              </p>
            </div>
            <div>
              <p>
                You can enjoy food and drinks while trying to beat your
                opponents.
              </p>
            </div>
            <div>
              <img alt='' />
              <img alt='' />
              <p>
                We host special events, organize Birthday parties, team
                buildings, hen and stag dos. Get in touch for prices and
                availability!
              </p>
            </div>
            <div>
              <p>
                We do tournaments! Are you good at ping pong or table football?
                Challenge yourself at our in house tournament! To get to know
                dates please subscribe to our website or follow us on social
                media.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
