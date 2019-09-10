import React from 'react'
import { connect } from "react-redux";
import FormContainer from '../FormFolder/FormContainer';
import SearchResults from './SearchResults';

const SearchResultsContainer = (props) => {
  const {searchResults} = props
  return (
    <div>
      <FormContainer />
      <SearchResults searchResults={searchResults}/>
    </div>
  )
}
const mapStateToProps = state => {
  const { searchResults } = state.locReducer
  return {
    searchResults
  }
}
export default connect(mapStateToProps) (SearchResultsContainer)