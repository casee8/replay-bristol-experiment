import React, { Component } from 'react';

class TableBooking extends Component {
  render() {
    return (
      <div>
        <h3 className='secondary-font'>Table Booking</h3>
        <div>
          <p>Board Games</p>
          <form>
            <label for='person'>How many person?</label>
            <input
              type='number'
              name='number'
              id='person'
              placeholder='0'
              step='1'
              min='0'
              // value={text}
              // onChange={onChange}
              autofocus
            />

            <label for='session'>How many session?</label>
            <input
              type='number'
              name='numberTwo'
              id='session'
              placeholder='0'
              step='1'
              min='0'
              // value={text}
              // onChange={onChange}
            />
            <p>*1 session is for a maximum of 3 hrs</p>

            <label for='pingPong'>
              How many round (Friday to Sunday only)?
            </label>
            <input
              type='number'
              name='numberThree'
              id='pingPong'
              placeholder='0'
              step='1'
              min='0'
              // value={text}
              // onChange={onChange}
            />
            <p>*1 round is for a maximum of half an hour</p>

            label
            <input type='text' name/>
            firstName

            select date

            select time

            <input
              type='submit'
              value='Submit'
              className='btn btn-success btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default TableBooking;
