import {Component} from 'react'

import {v4} from 'uuid'

import CounterItem from '../CounterItem'

import './index.css'

class WordCounter extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  onChangingInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmittingWord = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newWord = {
      id: v4(),
      textInput: searchInput,
      textLength: searchInput.length,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWord],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="main-container">
        <div className="words-list-container">
          <h1 className="words-list-heading">
            Count the characters like a Boss...
          </h1>
          {wordsList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-words-img"
            />
          ) : (
            <ul className="words-list">
              {wordsList.map(eachItem => (
                <CounterItem key={eachItem.id} wordsListDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
        <div className="text-input-container">
          <h1 className="text-input-heading">Character Counter</h1>
          <form onSubmit={this.onSubmittingWord} className="form-container">
            <input
              value={searchInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangingInput}
              type="text"
              className="text-input"
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default WordCounter
