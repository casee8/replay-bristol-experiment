import React, { Component } from 'react';
import TableBooking from '../TableBooking';

class Contact extends Component {
  render() {
    return (
      <div className='main-div'>
        <div className='container'>
          <h1 className='secondary-font'>Get in touch:</h1>
          <TableBooking />
          <div className='card'>
            <h3 className='text-center'>
              <i className='far fa-clock'></i> Opening Times
            </h3>
            <div className='grid-o-times'>
              <p>Monday</p>
              <p className='text-center'>Closed</p>
              <p className='bg-light'>Tuesday</p>
              <p className='text-center bg-light'>6:00pm - 10:30pm</p>
              <p>Wednesday</p>
              <p className='text-center'>6:00pm - 10:30pm</p>
              <p className='bg-light'>Thursday</p>
              <p className='text-center bg-light'>6:00pm - 10:30pm</p>
              <p>Friday</p>
              <p className='text-center'>6:00pm - 11:00pm</p>
              <p className='bg-light'>Saturday</p>
              <p className='text-center bg-light'>
                10:00am - 1:00pm & 2:00pm - 11:00pm
              </p>
              <p>Sunday</p>
              <p className='text-center'>10:00am - 1:00pm & 2:00pm - 9:00pm</p>
            </div>
          </div>
          <div className='card'>
            <div>
              <h3>Address:</h3>
              <p>
                196 Cheltenham Road
                <br />
                Bristol
                <br />
                BS6 5RB
              </p>
            </div>
            <div>
              <h3>Tel:</h3>
              <a href='tel:+447437930346'>
                <p>
                  <i className='fas fa-phone'></i> +44 7437 930346
                </p>
              </a>
              <a href='tel:+447828206202'>
                <p>
                  <i className='fas fa-phone'></i> +44 7828 206202
                </p>
              </a>
            </div>
            <div>
              <a
                href='https://goo.gl/maps/kvMS5HJqpxE2'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div>
                  {/* <img
                    src="assets/media/map.jpeg"
                    alt="Location on Google Maps"
                  /> */}
                  <p>Get directions</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
