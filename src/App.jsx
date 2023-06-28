import { useState } from 'react'
import './App.css'
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaCloudRain, FaCloudSunRain, FaCloudUploadAlt, FaRegPaperPlane, FaSun, FaTemperatureLow, FaUmbrella, FaWind, } from 'react-icons/fa';
import Chart from './Componentsl/Chart/Chart';
import Info from './Componentsl/Info/Info';
import NedleChart from './Componentsl/NedleChart/NedleChart';

function App() {


  return (
    <div className='max-w-[1330px] justify-center items-center h-[900px] mx-auto flex  bg-[#b5d8ff]'>

      <div className='bg-[#5c9ce5] flex w-[1100px] rounded-3xl h-[800px]'>



        <div className=' bg-no-repeat bg-[url("https://i.ibb.co/Nts2TPR/Screenshot-218.png")] h-full rounded-bl-3xl rounded-tl-3xl w-[330px]'>

          <div className='mt-7 flex  justify-between items-center mx-auto w-10/12'>

            <p><span className='bg-white text-blue-600 text-2xl rounded-full px-1 pb-1'>+</span></p>
            <div >
              <div className="badge bg-white w-7 badge-xs"></div>
              <div className="badge bg-gray-200 badge-xs mx-1"></div>
              <div className="badge bg-gray-200 badge-xs"></div>
            </div>

            <div className='flex text-white gap-2'>
              <p><sup>o</sup>C</p>
              <input type="checkbox" className="toggle border-none text-white" />
              <p><sup>o</sup>F</p>
            </div>

          </div>

          <div className=' w-10/12 mx-auto text-white mt-16'>

            <div className='flex justify-between mb-1'>
              <p><FaRegPaperPlane className='inline-block mr-1' /> New York, USA</p>
              <p><FaCloudUploadAlt className='inline-block mr-1' />07:19</p>
            </div>

            <div className='flex justify-between'>
              <p className='text-[14px] '>Today 28 sep</p>
              <p><FaCloudUploadAlt className='inline-block mr-1' />19:32</p>
            </div>

          </div>

          <div className='flex text-white items-center  w-10/12 mx-auto justify-between '>
            <p className='text-xl text-gray-300'><FaChevronLeft /></p>
            <p className='text-[100px]'>27 </p>
            <p className='-ml-14 -mt-12 font-bold text-4xl'>o</p>
            <p className='text-xl text-gray-300'><FaChevronRight /></p>
          </div>

          <div className='text-white w-10/12 mx-auto gap-1 justify-center flex items-center'>
            <FaSun className='tex' />
            <p className='text-3xl'>Sunny</p>
          </div>

        </div>



        <div className='w-[770px]  rounded-3xl bg-[#e4f1ff] h-full'>


          {/* first section */}
          <div className='w-11/12 mt-4 flex justify-between mx-auto'>

            <div>
              <h1 className='text-bold text-xl'>Welcome back isabella!</h1>
              <p>Check out today's weather information</p>
            </div>

            <div className='flex gap-5'>
              <p className='text-5xl -mt-3'>...</p>
              <img className='w-14 rounded-2xl' src="https://i.ibb.co/hFjVwZn/Screenshot-217.png" alt="" />
            </div>


          </div>


          {/* second section chart*/}

          <div className='w-11/12 mt-4 rounded-3xl mx-auto bg-white p-5'>

            <div className='flex justify-between items-center'>
              <p className='text-md'>Upcoming hours</p>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-200 px-3 py-1 rounded-xl'>
                  <p className='text-xs text-gray-500'>Rain preciptation <FaChevronDown className='inline-block' /></p>
                </div>
                <div className='bg-gray-200 px-3 py-1 rounded-xl'>
                  <p className='text-xs'>Next Days <FaChevronRight className='inline-block' /></p>
                </div>


              </div>
            </div>


            <Info></Info>
            <Chart></Chart>
          </div>


          <div className='w-11/12 mx-auto my-5'>
            <h2 className='text-xl font-bold'>More details of today's weather</h2>
          </div>

          {/* last section */}


          <div className='grid gap-3 grid-cols-3 w-11/12 mx-auto'>


            {/* 1st */}

            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>Humidity</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaCloudSunRain className='p-1 text-white text-4xl' />
                </div>
              </div>

              <p className='text-center  py-2 '><span className='text-2xl mr-2 font-bold'>82%</span>bad</p>


              <div >
                <div className='text-gray-400 text-center flex justify-around'>
                  <p>good</p>
                  <p>normal</p>
                  <p>bad</p>
                </div>

                <div className='flex justify-around'>
                  <progress className="progress progress-info w-12" value="100" max="100"></progress>
                  <progress className="progress progress-info w-12" value="100" max="100"></progress>
                  <progress className="progress progress-info w-12" value="50" max="100"></progress>
                </div>
              </div>


            </div>


            {/* 2nd */}

            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>Wind</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaWind className='p-1 text-white text-4xl' />
                </div>
              </div>

              <div className='-mt-28 -ml-14 '>
                <NedleChart></NedleChart>

              </div>






            </div>



            {/* 3rd */}


            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>Precipitation</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaCloudRain className='p-1 text-white text-4xl' />
                </div>
              </div>

              <p className='text-center  py-2 '><span className='text-2xl mr-2 font-bold'>1.4 cm</span></p>


              <div >
                <div className='text-gray-400 text-center flex justify-around'>
                  <p>0</p>
                  <p>10</p>
                  <p>20</p>
                  <p>30</p>
                  <p>40</p>
                  <p>50</p>
                  <p>60</p>
                  <p>70</p>
                  <p>80</p>
                  <p>90</p>
                </div>

                <div className='flex justify-around'>
                  <progress className="progress progress-info w-4" value="100" max="100"></progress>
                  <progress className="progress progress-info w-4" value="60" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                  <progress className="progress progress-info w-4" value="0" max="100"></progress>
                </div>
              </div>


            </div>



            {/* 4th */}

            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>UV index</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaSun className='p-1 text-white text-4xl' />
                </div>
              </div>

              <p className='text-center  py-2 '><span className='text-2xl mr-2 font-bold'>4</span>medium</p>


              <div >
                <div className='text-gray-400 text-center flex justify-around'>
                  <p>0-2</p>
                  <p>3-5</p>
                  <p>6-7</p>
                  <p>8-10</p>
                  <p>11+</p>

                </div>

                <div className='flex justify-around'>
                  <progress className="progress progress-info w-8" value="100" max="100"></progress>
                  <progress className="progress progress-info w-8" value="60" max="100"></progress>
                  <progress className="progress progress-info w-8" value="0" max="100"></progress>
                  <progress className="progress progress-info w-8" value="0" max="100"></progress>
                  <progress className="progress progress-info w-8" value="0" max="100"></progress>

                </div>
              </div>


            </div>





            {/* 5th */}

            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>Feels like</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaTemperatureLow className='p-1 text-white text-4xl' />
                </div>
              </div>

              <p className='text-center  py-2 '><span className='text-2xl mr-2 font-bold'>30<sup>o</sup></span></p>


              <div >
                <div className='text-gray-400 text-center flex justify-between'>
                  <p>0<sup>o</sup></p>
                  <p>25<sup>o</sup></p>
                  <p>60<sup>o</sup></p>


                </div>

                <div className='flex justify-around'>
                  <progress className="progress progress-info w-full" value="66" max="100"></progress>

                </div>
              </div>


            </div>





            {/* 5th */}

            <div className='bg-white rounded-3xl p-4 h-[150px]'>
              <div className='flex justify-between'>
                <h3 className='text-md font-bold'>Chance of rain</h3>
                <div className='bg-blue-500 rounded-xl'>
                  <FaUmbrella className='p-1 text-white text-4xl' />
                </div>
              </div>

              <p className='text-center  py-2 '><span className='text-2xl mr-2 font-bold'>42%</span></p>


              <div >
                <div className='text-gray-400 text-center flex justify-between'>
                  <p>0%</p>
                  <p>25%</p>
                  <p>50%</p>
                  <p>75%</p>
                  <p>100%</p>


                </div>

                <div className='flex justify-around'>
                  <progress className="progress progress-info w-full" value="40" max="100"></progress>

                </div>
              </div>


            </div>


















          </div>






















        </div>










      </div>


    </div>
  )
}

export default App
