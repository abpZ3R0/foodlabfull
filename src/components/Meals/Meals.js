import React from "react";
import Meal from "../Meal/Meal";

const Meals = ({data}) => {
    if(data === null){
        return <h1>Data not found</h1>
    }
    return (
        <div className="row">
          {data?.length > 0 && data?.map((item, index) => <Meal key={index} item={item} />)}
        </div>
    )
}

export default Meals;