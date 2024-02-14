import './index.css'

const CounterItem = props => {
  const {wordsListDetails} = props
  const {textInput, textLength} = wordsListDetails

  return (
    <li className="words-list">
      <p className="para">{`${textInput} : ${textLength}`}</p>
    </li>
  )
}

export default CounterItem
