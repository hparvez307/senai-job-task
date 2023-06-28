import React from 'react';
import { FaCloud, FaSun } from 'react-icons/fa';

const Info = () => {
    return (
        <>

            <div className='flex mt-5 justify-between'>

                <p>Previous</p>
                <p>Now</p>
                <p>11:00</p>
                <p>12:00</p>
                <p>13:00</p>
                <p>14:00</p>
                <p>15:00</p>
                <p>16:00</p>
                <p>17:00</p>

            </div>
            <div className='flex my-1 ml-5 justify-between'>

                <p><FaSun /></p>
                <p><FaSun /></p>
                <p><FaCloud /></p>
                <p><FaCloud /></p>
                <p><FaSun /></p>
                <p><FaSun /></p>
                <p><FaCloud /></p>
                <p><FaCloud /></p>
                <p><FaSun /></p>

            </div>
            <div className='flex ml-5 justify-between'>
                <p>25<sup>o</sup></p>
                <p>27<sup>o</sup></p>
                <p>28<sup>o</sup></p>
                <p>28<sup>o</sup></p>
                <p>29<sup>o</sup></p>
                <p>30<sup>o</sup></p>
                <p>29<sup>o</sup></p>
                <p>29<sup>o</sup></p>
                <p>28<sup>o</sup></p>



            </div>



        </>
    );
};

export default Info;