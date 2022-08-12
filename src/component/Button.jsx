import React from 'react'

const cssButton = {
	margin : '0 10px',
	padding : '10px 20px',
	fontSize : '24px',
	border : '2px solid rgba(255, 220, 40, 1)',
	backgroundColor : 'rgba(255, 220, 40, 0.5)',
	borderRadius : '6px',
}

const Button = ({children, setCity, cityName, ...props}) => {
	return (
		<button type='button' title={cityName} style={cssButton} onClick={()=>setCity(cityName)}>{children}</button>
	)
}

export default Button