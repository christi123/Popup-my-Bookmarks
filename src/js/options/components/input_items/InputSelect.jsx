import PropTypes from 'prop-types'
import {createElement, PureComponent} from 'react'

import '../../../../css/options/input-select.css'
import {normalizeInputtingValue} from '../../../common/functions'

class InputSelect extends PureComponent {
  handleBlur = (evt) => {
    const {optionName, updateSingleOption} = this.props

    const newOptionValue = evt.target.value
      .trim()
      .replace(/,\s/g, ',')
      .replace(/,$/, '')

    updateSingleOption(optionName, newOptionValue)
  }

  handleChange = (evt) => {
    const {optionName, updateSingleOption} = this.props

    const newOptionValue = normalizeInputtingValue(evt.target.value).replace(/^,/, '')

    updateSingleOption(optionName, newOptionValue)

    if (evt.target.tagName === 'SELECT') {
      this.inputEl.focus()
    }
  }

  // prevent user try to save by pressing enter
  handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault()
    }
  }

  render() {
    const {choices, optionName, optionValue} = this.props

    const optionItems = choices.map((optionChoice, optionChoiceIndex) => (
      <option key={String(optionChoiceIndex)}>{optionChoice}</option>
    ))

    return (
      <div styleName='main'>
        <input
          ref={(ref) => {
            this.inputEl = ref
          }}
          styleName='input'
          name={optionName}
          type='text'
          value={optionValue}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <select styleName='select' defaultValue={optionValue} onChange={this.handleChange}>
          {optionItems}
        </select>
      </div>
    )
  }
}

InputSelect.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionName: PropTypes.string.isRequired,
  optionValue: PropTypes.string.isRequired,
  updateSingleOption: PropTypes.func.isRequired
}

export default InputSelect
