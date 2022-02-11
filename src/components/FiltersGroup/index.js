import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    changeSearchInput,
    enterSearchInput,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        value={searchInput}
        placeholder="Search"
        className="search-input"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategoryItem = () => {
    const {changeCategory, activeCategory} = props
    return categoryOptions.map(each => {
      const onChangeCategory = () => changeCategory(each.categoryId)
      const isActive = each.categoryId === activeCategory
      const activeClassName2 = isActive ? 'active-category-name' : ''
      return (
        <li
          key={each.categoryId}
          className="category-item"
          onClick={onChangeCategory}
        >
          <p className={`category-name ${activeClassName2}`}>{each.name}</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoryItem()}</ul>
    </>
  )

  const renderRatingItem = () => {
    const {changeRating, activeRating} = props
    return ratingsList.map(each => {
      const onChangeRating = () => changeRating(each.ratingId)
      const isActive = each.ratingId === activeRating
      const activeClassName = isActive ? 'active-rating' : ''
      return (
        <li
          className="rating-item"
          onClick={onChangeRating}
          key={each.ratingId}
        >
          <img
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
            className="rating-img"
          />
          <p className={`and-up ${activeClassName}`}>& up</p>
        </li>
      )
    })
  }

  const renderRatingList = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingItem()}</ul>
    </>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryList()}
      {renderRatingList()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
