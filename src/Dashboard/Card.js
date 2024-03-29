import "./Card.css"
import { BiCategory } from "react-icons/bi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { TbBrandCashapp } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
const Card=()=>{
    return(
        <div className="Card-Dashboard">
            <div className="Cards" style={{backgroundColor:"#fdf7ff"}}>
                <h4 style={{marginTop:"20px"}}>Number  Of  Orders</h4>
                <div className="Cards1" style={{color:"black"}}>
                    <p style={{fontSize:"25px", marginLeft:"40px"}}>2,230</p>   
                    <MdOutlineBookmarkBorder style={{width:"40px", height:"40px", marginRight:"40px"}}/>   
                </div>
            </div>
            <div className="Cards" style={{backgroundColor:"#f7fbff"}}>
                <h4 style={{marginTop:"20px"}}>Number  Of  Categories</h4>
                <div className="Cards1" style={{color:"black"}}>
                    <p style={{fontSize:"25px", marginLeft:"40px"}}>87</p>   
                    <BiCategory style={{width:"40px", height:"40px", marginRight:"40px"}}/>   
                </div>
            </div>
            <div className="Cards" style={{backgroundColor:"#f6faeb"}}>
            <h4 style={{marginTop:"20px"}}>Total Income</h4>
            <div className="Cards1" style={{color:"black"}}>
                    <p style={{fontSize:"25px", marginLeft:"40px"}}>5,000k</p>   
                    <FaRupeeSign style={{width:"40px", height:"40px", marginRight:"40px"}}/>   
            </div>
            </div>
            <div className="Cards" style={{backgroundColor:"#fff7fa"}}>
            <h4 style={{marginTop:"20px"}}>Number  Of  Customers</h4>
            <div className="Cards1" style={{color:"black"}}>
                    <p style={{fontSize:"25px", marginLeft:"40px"}}>5.3K</p>   
                    <FaUsers style={{width:"40px", height:"40px", marginRight:"40px"}}/>   
                </div>
            </div>
        </div>
    )
}
export default Card