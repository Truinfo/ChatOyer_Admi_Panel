import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import "./AddCoupons.css";
import "./PopStyles.css";
import { IoArrowBack } from "react-icons/io5";
const AddCoupon = () => {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [couponData, setCouponData] = useState({
    offerAmount: "",
    offerName: "",
    discountPercentage: "",
    description: "",
    startDate: "",
    expiryDate: "",
    applicableFor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCouponData({
      ...couponData,
      [name]: value,
    });
  };

  const convertToIndianFormat = (value) => {
    if (value === "") return value;

    const number = parseFloat(value);
    if (isNaN(number)) return value;

    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });

    return formatter.format(number).replace("₹", ""); // Removing the currency symbol
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithIndianFormat = {
        ...couponData,
        offerAmount: convertToIndianFormat(couponData.offerAmount),
      };

      const response = await axiosInstance.post("/addCoupon", formDataWithIndianFormat);
      
      if (response.status === 201) {
        setMessage(response.data.message);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/getCoupons');
        }, 2000);
      }
    } catch (error) {
      setMessage(error.response.data.message || error.response.data.error);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      console.error('Error:', error);
    }
  };


  return (
    <div className="Add-Coupons">
      <div  style={{ display:"flex" }}>
            <IoArrowBack onClick={() => navigate(-1)} style={{ fontSize: "30px", cursor: "pointer"}} />
          
      <h1 style={{marginLeft:"40px", fontFamily: "'Domine', serif"}}>Add Coupon</h1>
      </div>
      <form onSubmit={handleSubmit} className="container-Coupons">
      <div className="row">
        <div className="col-md-6">
          <label className="fs-5">Offer Name</label>
          <input
            type="text"
            name="offerName"
            value={couponData.offerName}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        <div className="col-md-6">
          <label className="fs-5">Offer Amount</label>
          <input
            type="text"
            name="offerAmount"
            value={couponData.offerAmount}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label className="fs-5">Discount Percentage</label>
          <input
            type="text"
            name="discountPercentage"
            value={couponData.discountPercentage}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        <div className="col-md-6">
          <label className="fs-5">Description</label>
          <input
            type="text"
            name="description"
            value={couponData.description}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <label className="fs-5">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={couponData.startDate}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        <div className="col-md-6">
          <label className="fs-5">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            value={couponData.expiryDate}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        </div>
        <div className="Coupons-1">
          <label className="fs-5">Applicable For</label>
          <input
            type="text"
            name="applicableFor"
            value={couponData.applicableFor}
            onChange={handleChange}
            className="form-control fs-5"
          />
        </div>
        <div className="button">
        <button type="submit" className="fs-5">Add Coupon</button>
        </div>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content-big">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCoupon;