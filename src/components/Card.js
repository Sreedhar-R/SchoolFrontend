import React from 'react';
import {images} from './image';
import {ribbon} from './image';
import '../style/App.css';

let image = images[Math.floor(Math.random() * images.length)];
const Card = ({college}) => {

    let rupeeIndian = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    });

    let discountedPrice = rupeeIndian.format(college.discounted_fees).slice(0,6);
    let originalPrice = rupeeIndian.format(college.original_fees).slice(0,6);

    

   
    return (
        <div className="container col-12 col-sm-12 col-md-6 card mt-3 ">

            <div className="card bg-dark text-white">
                <img src={image} className="card-img" alt="college-img"/>
                <div className="card-img-overlay">
                    {college.promoted?<img src={ribbon} className='promoted' alt='promoted-ribbon'/>:'' }
                    <div className="container rating">
                        <div className='rating--review card-text'>
                            <div ><strong className="rating--value">{college.rating}</strong>/5</div>
                            <div className='rating--remarks'>{college.rating_remarks}</div>
                        </div>
                    </div>
                    <div className='container tags--ranking'>
                        <div className='tags'>
                            <button>{college.tags[0]}</button>
                            <button>{college.tags[1]}</button>
                        </div>
                        <div className='ranking'>#{college.ranking}</div>
                    </div>
                </div>
            </div>


            <div className="card-body">
                <div className='college--heading'>
                    <div className='college-name--stars'>
                        <span className="college-name">{college.college_name}</span>
                        <span className="rating-wrap mb-2">
                            <ul className="rating-stars">
                                    <li style={{width:"80%"}} className="stars-active"> 
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                    </li>
                                </ul>
                        </span>
                    </div>
                    <div className='college--fee'>
                        <span className='college--original--fee'>{originalPrice}</span>
                        <span className='tag--discount m-1' ><img width='25vw' height='25vw' src='https://image.flaticon.com/icons/png/512/1252/1252582.png'/> {college.discount}</span>
                    </div>
                </div>

                <div className='nearest--place--price'>
                    <div className='nearest--place'>{college.nearest_place[0]} | <small className='nearest--place--small'>{college.nearest_place[1]}</small></div>
                    <div className='discounted--price--fee'>
                        <div className='discounted--price'>{discountedPrice}</div>
                        <small className='fee--cycle'>{college.fees_cycle}</small>
                    </div>
                </div>

                <div className='nearest--place'><span className='match-percentage'>93%Match : </span >{college.famous_nearest_places}</div>

                <div className='offer--amenities'>
                    <div className='offertext'>Flat Rs<span className='numbers'>2,000</span> off + upto Rs<span className='numbers'>500</span> wallet! to avail... <a href='#'>LOGIN</a></div>
                    <div className='amenities'>{college.amenties[0]} . {college.amenties[1]}</div>
                </div>
                
            </div>

        </div>
    )
}

export default Card;
