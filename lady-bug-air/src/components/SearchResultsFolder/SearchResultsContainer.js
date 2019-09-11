import React from 'react'
import { connect } from "react-redux";
import FormContainer from '../FormFolder/FormContainer';
import SearchResults from './SearchResults';
import MainLoadingPage from '../MainLoadingPage';

const SearchResultsContainer = (props) => {
  const {searchResults, isLoading} = props
  return (
    <div>
      {isLoading ? <MainLoadingPage /> : null}
      <FormContainer />
      <SearchResults searchResults={searchResults}/>
    </div>
  )
}
const mapStateToProps = state => {
  const { searchResults, isLoading } = state.locReducer
  return {
    searchResults,
    isLoading,
  }
}
export default connect(mapStateToProps) (SearchResultsContainer)