const Meal = ({item}) => {
    return (
        <div className="col-md-4">
            <div className="card m-4 border border-primary border-3">
            <img className="card-img-top" src={item.strMealThumb}></img>
            <h5 className="card-title m-3 text-center">
                {item.strMeal}
            </h5>
            <h6 className="card-subtitle m-3 text-muted text-center">
                {item.strCategory}
            </h6>
            <h6 className="card-subtitle m-3 text-muted text-center">
                {item.Area}
            </h6>
            <p className="card-text m-3 text-center">
                {item.strInstructions}
            </p>
            </div>
        </div>
    )
}

export default Meal;