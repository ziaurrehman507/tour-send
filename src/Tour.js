import React, { useState } from 'react';
import { Button, Modal } from 'antd';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Checkout from './Checkout';

const Tour = ({ 
  addDetails, totalPeopled, id, named, image, info, daysInp, countrySelect, name, price, removeTour, PeopleInp, NameInp, isModalOpen, showModal, handleOk, handleCancel
 }) => {
  const [readMore, setReadMore] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = (e) => {
  //   setIsModalOpen(true);
  //   // console.log(e.target.parentElement.parentElement.parentElement.firstElementChild);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };


  return (

    <article className="single-tour">

      <img className=' mt-[20px] '  src={image} alt={name} />
      <footer>
        <div className=" mt-[20px] ">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className=' text-[blue] '  onClick={() => setReadMore(readMore === (false))}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button className=" w-[120px] h-[35px] rounded-[5px] bg-[red] text-[#ffffff] mt-[10px] " onClick={() => removeTour(id)}>
          not interested
        </button>


        <Button className="delete-btn ml-[10px]" type="primary" onClick={showModal}>
          I'M Interested
        </Button>

        <Link to={'/checkout'}>
          <button className="w-[120px] h-[35px] ml-[10px]  rounded-[5px] bg-[green] text-[#ffffff]" type="primary">Checkout</button>
        </Link>

        <Modal title="Basic Modal" 
        open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
        >
        
        <div>
            <input placeholder='Name' value={named} onChange={NameInp} className=' w-[100%] h-[35px] pl-[10px]  mx-[auto] bg-[#80808072] placeholder:text-[black] outline-none  ' type='text' />
            <input placeholder='People' value={totalPeopled} onChange={PeopleInp} className='w-[100%] h-[35px] pl-[10px]  mx-[auto] bg-[#80808072] placeholder:text-[black] mt-[10px] outline-none '  type='number' />
            <li>
              <select className='w-[100%] h-[35px] pl-[10px]  mx-[auto] bg-[#80808072] placeholder:text-[black] mt-[10px] outline-none '  onChange={countrySelect}>
                <option >Select Country</option>
                <option value={1995}>Paris</option>
                <option value={3895}>Ireland</option>
                <option value={1995}>Vienna</option>
                <option value={2095}>Rome</option>
                <option value={2595}>Poland</option>
              </select>
            </li>

            <li>
              <select className='w-[100%] h-[35px] pl-[10px]  mx-[auto] bg-[#80808072] placeholder:text-[black] mt-[10px] outline-none ' onChange={daysInp}>
                <option >Length of Days </option>
                <option value={7}>7 Days </option>
                <option value={8}>8 Days </option>
                <option value={10}>10 Days </option>
                <option value={14}>14 Days </option>
              </select>
            </li>
            <button className=' w-[120px] h-[35px] block mx-auto  bg-[black] text-[#ffffff] mt-[20px] rounded-[5px]  '  onClick= {addDetails}>Add Here</button>
          
        </div>

        </Modal>


      </footer>
    </article>
  );
};

export default Tour;
