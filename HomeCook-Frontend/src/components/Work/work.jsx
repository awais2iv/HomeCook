import React from "react";
import PickMeals from "../../assets/pick-meals-image.png";
import ChooseMeals from "../../assets/choose-image.png";
import DeliverMeals from "../../assets/delivery-image.png";

const Work = () => {
    const workInfoData=[
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Choose your favorite meals from our diverse menu, featuring a variety of cuisines and flavors to satisfy every craving.",
        },
        {
            image: ChooseMeals,
            title: "Choose Meals",
            text: "Customize your meal plan according to your preferences, dietary needs, and portion sizes for a personalized experience.",
        },
        {
            image: DeliverMeals,
            title: "Deliver Meals",
            text: "Sit back and relax while we deliver your delicious homecooked meals right to your doorstep, fresh and ready to enjoy.",
        },
    ];
    return (
        <div className="work-section-wraooer">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it Works</h1>
                <p className="primary-text">
                    Experience the joy of homecooked meals delivered to your doorstep. Our simple process ensures you enjoy delicious, homemade food without the hassle of cooking.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
                </div>
            
        </div>
    )
}

export default Work;