import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playing_with_friends from '../../media/img/playing_with_friends.jpeg';
import img_3878 from '../../media/img/IMG_3878.jpeg';
import img_party from '../../media/img/45418583_10215360889673413_5576257152516882432_n.jpeg';
import img_bparty from '../../media/img/birtday_party.jpg';
import img_3736 from '../../media/img/IMG_3736.jpeg';
import img_4084 from '../../media/img/IMG_4084.jpeg';

class About extends Component {
  render() {
    return (
      <div className='main-div'>
        {/* <div className='background'></div> */}
        <div className='white-bckgrnd'>
          <div className='container'>
            <h1 className='secondary-font text-center'>
              What is Replay?
            </h1>
            <div className='grid-content'>
              <div className='first-grid card'>
                <p>
                  Replay is a bar where you can enjoy playing with your friends{' '}
                  <i className='fas fa-user-friends'></i> while having a drink
                  or nibbling snacks whether it is a platter of nachos, a bowl
                  of nuts or wasabi peas.
                </p>
                <img className='first-img' src={playing_with_friends} alt='' />
              </div>
              <div className='second-grid card'>
                <img className='sec-img' src={img_3878} alt='' />
                <p>
                  We also offer delicious coffees{' '}
                  <i className='fas fa-coffee'></i>, locally sourced loose leaf
                  teas and alcoholic beverages. But more importantly, Replay is
                  about the passion for <i className='fas fa-dice'></i> board
                  games and play activities.
                </p>
              </div>
              <div className='third-grid card'>
                <p className='text-center'>
                  Our <i className='fas fa-crosshairs'></i> aim is to share this
                  passion with you so you can experience the importance of joint
                  engagement, and hopefully pass it on to others.
                </p>
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
            <strong>
              There is a £3 play charge per <i className='fas fa-user'></i> for
              a 3 hrs stay
            </strong>
            , for this you can play with as many games as you want from our 300
            board games library. You can play ping pong in our basement which is
            free between Tuesday and Thursday, and £3 for half an hour between
            Friday and Sunday.{' '}
            <Link to='/contact'>
              Please book a table so we expect you coming.
            </Link>{' '}
            <i className='far fa-smile-wink'></i>
          </p>
        </div>
        <div className='white-bckgrnd'>
          <div className='container grid'>
            <h1 className='secondary-font text-center grid-one'>
              Why visiting us?
            </h1>
            <div className='grid-two card'>
              <div>
                <img src={img_3736} alt='' />
                <p>
                  <i className='far fa-hand-point-right'></i> Because we have a{' '}
                  <strong>more than 300 board game</strong>{' '}
                  <i className='fas fa-stream'></i> collection including the
                  newest releases and most popular ones.
                </p>
              </div>
            </div>
            <div className='grid-three card'>
              <img src={img_4084} alt='' />
              <p>
                <strong>
                  <i className='far fa-hand-point-right'></i> We are here to{' '}
                  <i className='far fa-life-ring'></i> help you
                </strong>{' '}
                choose the most suitable games for you depending on the number
                of players, the level of experience and the required time
                duration.
              </p>
            </div>
            <div className='grid-four card'>
              <p>
                <strong>
                  <i className='far fa-hand-point-right'></i> In case you are
                  planning to buy a new board game{' '}
                  <i className='fas fa-chess'></i>
                </strong>
                , you can try it here before you buy it! If you decide to buy
                the game, we are able to help you with 5% discount at Rules of
                Play, St. Nicholas Market.
              </p>
            </div>
            <div className='grid-five card'>
              <p>
                <strong>
                  <i className='far fa-hand-point-right'></i> You can enjoy{' '}
                  <i className='fas fa-utensils'></i> food and{' '}
                  <i className='fas fa-cocktail'></i> drinks
                </strong>{' '}
                while trying to beat your opponents.
              </p>
            </div>
            <div className='grid-six card'>
              <p>
                <i className='far fa-hand-point-right'></i>{' '}
                <strong>We host special events</strong>, organize{' '}
                <i className='fas fa-birthday-cake'></i> Birthday parties, team
                buildings, hen and stag dos. Get in touch for prices and
                availability!
              </p>
              <div className='grid-imgs'>
                <img src={img_party} alt='' />
                <img src={img_bparty} alt='' />
              </div>
            </div>
            <div className='grid-seven card'>
              <p>
                <i className='far fa-hand-point-right'></i>{' '}
                <strong>We do tournaments!</strong> Are you good at ping pong{' '}
                <i className='fas fa-table-tennis'></i> or table football?
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
