import React from 'react';
import Tour from './Tour';
import './index.css'

const Tours = ({ tours,
  totalPeopled ,addDetails,named, removeTour,NameInp,PeopleInp ,countrySelect,daysInp, isModalOpen, showModal, handleOk, handleCancel
}) => {
 
  return (
    <section className=' w-[600px] bg-[#ffffff] pb-[20px]'>
      <div className="title">
        <h2 className=' text-[20px] font-sans font-[700] text-center mt-[20px]'>our tours</h2>
        <div className=" w-[80px] h-[5px] bg-[blue] mx-auto  "></div>
      </div>

      <div className=' w-[95%]  mx-auto mt-[20px]'>
        {tours.map((tour) => {
          // console.log(tour);
          return <Tour key={tour.id}  {...tour}  
          totalPeopled={totalPeopled} named={named} addDetails={addDetails} daysInp={daysInp} countrySelect={countrySelect} PeopleInp={PeopleInp} NameInp={NameInp}  removeTour={removeTour}
          isModalOpen={isModalOpen}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          />;
      })}
      </div>

    </section>
  );
};

export default Tours;
