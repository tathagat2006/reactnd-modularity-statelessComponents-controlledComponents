import React from 'react'
import PropTypes from 'prop-types'

const Item = (props) => {
return (
<div>
  <p>Shopping Cart</p>
  <ol>
  {props.items.map((item) => {return <li>{item}</li>} )}
  </ol>
  </div>
)
}

export default Item