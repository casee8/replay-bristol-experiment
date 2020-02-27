import React, { Component } from 'react';

class AfterSchoolClub extends Component {
  render() {
    return (
      <div className='main-div'>
        <div className='container'>
          <h1 className='secondary-font'>AFTER SCHOOL CLUB AGE 8 - 15</h1>
          <p className='text-center'>
            **Sessions start in January on Tuesdays and Thursdays**
          </p>
          <hr />
          <div className='card'>
            <p>
              Be part of our local playing community, meet others with the same
              interest and express yourself in a funky way with full acceptance.
            </p>
            <p>
              Each session is structured to give children the opportunity for
              free play with any of our board games and other play equipment
              like ping pong and table football in a safe environment. Children
              can play freely as they wish although there are other creative
              activities available during the session such as art and craft,
              introduction to yoga and meditation, growing plants, movie night.
            </p>
            <p>
              Snacks and drinks are offered during the session. We can cater for
              kids with certain dietary requirement in case we are informed at
              least 2 days before the session.
            </p>
            <p>
              Sessions run on weekdays 3:30 pm and 6 pm. Please contact us
              directly on <a href='tel:+447437930346'>07437930346</a> or email{' '}
              <a href='mailto:replaybristol@gmail.com'>
                replaybristol@gmail.com
              </a>{' '}
              to discuss availability and further information.
            </p>
          </div>
          {/* <hr>
              <div>
                <a href="#">Please click here to download an application form.</a>
              </div> */}
        </div>
      </div>
    );
  }
}

export default AfterSchoolClub;
