import React from 'react'

const cssBox = {
	padding : '40px 60px',
	width : '800px',
	backgroundColor : 'rgba(255,255,255,0.6)',
	border : '2px solid rgba(255,255,255,1)',
	borderRadius : '20px',
	textAlign : 'center',
};

const cssCityName = {
	display : 'block',
	fontSize : '48px',
};

const cssTempInfo = {
	display : 'block',
	margin : '20px 0 0',
	fontSize : '32px',
};

const cssWeatherInfo = {
	display : 'block',
	margin : '20px 0 0',
	fontSize : '32px',
};

const Information = (props) => {
  return (
	<div className="box" style={cssBox}>
		<strong className="city_name" style={cssCityName}>{props.weatherInformation?.name??'City Name'}</strong>
		<em className="tempInfo" style={cssTempInfo}>{props.weatherInformation?.main.temp} ℃</em>
		<em className='weatherInfo' style={cssWeatherInfo}>{props.weatherInformation?.weather[0].description}</em>
	</div>
  )
}

export default Information