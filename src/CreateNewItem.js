import React from 'react';
import PropTypes from 'prop-types'

class CreateNewItem extends React.Component {
state = {
	value:''
}

handleChange = event => {
	this.setState({
    value:event.target.value
    })
}

AddItem = event => {
	event.preventDefault();
  this.props.OnAddItem(this.state.value)
}

inputIsEmpty = () => {
	return this.state.value === '';
}

render(){
  return (
<div>
  <form onSubmit = {this.AddItem}>
	<input 
	type='text'
	placeholder = 'Enter an Item To Add'
	value = {this.state.value}
	onChange = {this.handleChange} 
/>
<button disabled = {this.inputIsEmpty()}>ADD</button>
  </form>
  </div>
)
}

}

export default CreateNewItem;