import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import './DetailedProduct.css'
const DetailedProduct = () => {
  const [product, setProduct] = useState(null); // Initialize product state as null
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/getDetailsByProductId/${productId}`);
      setProduct(response.data.product); // Assuming the response contains a single product
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="detail-header">
      <div  style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
            <IoArrowBack onClick={() => navigate(-1)} style={{ marginTop:"-10px",fontSize: "30px", cursor: "pointer",  }} />
          
        <h1 className="detail-header-text" style={{marginLeft:"20px"}}>Product Details </h1>
        </div>
      </div>
      <div className="detail-details">
        {product && (
          <div className="detail-item-details row">
            <div className="col-md-4">
              <div className="detail-images">
                {product.productPictures.map(picture => (
                  <img key={picture._id} 
                    src={`http://localhost:2000${picture.img}`}              
                    alt="Product" 
                    className="img-fluid mb-3"
                  />
                ))}
              </div>
              <div className="detail-video">
              {product.videoProduct && (
    <video controls className="img-fluid mb-3">
      <source src={`http://localhost:2000${product.videoProduct}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
              </div>
            </div>
            <div className="col-md-8">
              <div className="detail-info">
              <div className="row " style={{marginTop:"-6px"}}>
                  <div className="col-md-9" >
                  <h2>{product.name}</h2>
                  </div>
                  <div className="col-md-3">
                  <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
                <h4> Product Details</h4>
                <div className="row ">
                  <div className="col">
                    <p><b>Id:</b> {product._id}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Product Code:</b> {product.productCode}</p>
                  </div>
                  <div className="col">
                    <p><b>Product description:</b> {product.description}</p>
                    <p><b>Height:</b> {product.height}</p>
                    <p><b>Width:</b> {product.width}</p>
                  </div>
                  <div className="col">
                  <p><b>Size:</b> {product.size.map(item => item.size).join(', ')}</p>

                    
            <p><b>Total Product Weight:</b> {product.totalProductWeight}</p>
                  </div>
                </div>
            <h4>Gold</h4>
            <div className="row ">
                  <div className="col">
                  <p><b>Gold Weight:</b> {product.goldWeight}</p>
                  </div>
                  <div className="col">
                  <p><b>Gold Kt:</b> {product.goldKt.join(', ')}</p>
                  </div>
                  <div className="col">
                  <p><b>Gold Type:</b> {product.goldType.join(', ')}</p>
                  </div>
                </div>
            <h4> Diamond</h4>
            <div className="row ">
                  <div className="col">
                  <p><b>Diamond Type:</b> {product.diamondType.join(', ')}</p>
            <p><b>Diamond Size:</b> {product.diamondSize}</p>
            <p><b>Diamond Shape:</b> {product.diamondShape}</p>

                  </div>
                  <div className="col">
                  <p><b>Diamond Kt:</b> {product.diamondKt}</p>
            <p><b>Diamond Color:</b> {product.diamondColor}</p>
            <p><b>Diamond Weight:</b> {product.diamondWeight}</p>

                  </div>
                  <div className="col">
                  <p><b>Diamond Count:</b> {product.diamondCount}</p>
                  <p><b>Diamond Clarity:</b> {product.diamondClarity}</p>
                  <p><b>Diamond SettingType:</b> {product.diamondSettingType}</p>
                  </div>
                </div>
            <h4>Stone</h4>
            <div className="row ">
                  <div className="col">
                  <p><b>Stone:</b> {product.stone}</p>
            <p><b>Stones Count:</b> {product.stonesCount}</p>
            <p><b>Stone SettingType:</b> {product.stoneSettingType}</p>

                  </div>
                  <div className="col">
                  <p><b>Stone Colour:</b> {product.stonesColour}</p>
            <p><b>Stone Weight:</b> {product.stonesWeight}</p>
                  </div>
                  <div className="col">
                  <p><b>Stone Size:</b> {product.stoneSize}</p>
            <p><b>Stone Shape:</b> {product.stoneShape}</p>
                  </div>
                 
                </div>
           
            <h4>Price</h4>
            <div className="row ">
                  <div className="col">
                  <p><b>Diamond price:</b> {product.diamondprice}</p>
            <p><b>Gold Price:</b> {product.goldprice}</p>
            <p><b>Stone Price:</b> {product.stoneprice}</p>
                  </div>
                  <div className="col">
                  <p><b>Making Charges:</b> {product.makingCharges}</p>
            <p><b>GST:</b> {product.gst}</p>
                  </div>
                </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedProduct;