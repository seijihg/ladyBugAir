import React from 'react'
import { connect } from "react-redux";
import FormContainer from '../FormFolder/FormContainer';
import SearchResults from './SearchResults';
import MainLoadingPage from '../MainLoadingPage';
import loc_actions from '../Redux/actions/locations_actions'


const SearchResultsContainer = (props) => {
  const {searchResults, isLoading, logoList, findLogo} = props
  
  return (
    <div>
      {isLoading ? <MainLoadingPage /> : null}
      <FormContainer />
      <SearchResults searchResults={searchResults}/>
    </div>
  )
}
const mapStateToProps = state => {
  const { searchResults, isLoading, logoList } = state.locReducer
  return {
    searchResults,
    isLoading,
    logoList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    findLogo: (logo) => dispatch(loc_actions.findLogo(logo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (SearchResultsContainer)