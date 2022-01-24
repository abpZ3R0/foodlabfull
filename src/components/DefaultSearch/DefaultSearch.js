const DefaultSearch = ({searchText, setSearchText}) => {
    const handleChage = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mt-3">
              <input type="text" value={searchText} onChange={(e) => handleChage(e)} className="form-control" />
            </div>
          </div>
        </div>
    )
}

export default DefaultSearch;