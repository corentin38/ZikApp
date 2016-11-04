import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
     {" "}
    <FilterLink filter="SHOW_ALL">
        All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_FEUCHATTERTON">
        Feu! Chatterton
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_REST">
        Other
     </FilterLink>
  </p>
)

export default Footer
