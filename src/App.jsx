import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.css';

import Information from './component/Information';
import Button from './component/Button';
import Loading from './component/Loading';

function App() {

	const getCurrentLocation = ()=>{
		navigator.geolocation.getCurrentPosition((position)=>{
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			getWeatherByCurrentLocation(lat, lon);
		});
	}

	useEffect(()=>{
		getCurrentLocation();
	}, []);

	const getWeatherByCurrentLocation = async(lat, lon)=>{
		setLoading(true);
		const apiKey = '8a63900865cd53cbaf3c84b697523f9b';
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
		const response = await fetch(url);
		const data = await response.json();
		setLocal(data.name)
		setWeather(data);
		setLoading(false);
	}

	const getWeatherByCityName = async(cityName)=>{
		setLoading(true);
		const apiKey = '8a63900865cd53cbaf3c84b697523f9b';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
		const response = await fetch(url);
		const data = await response.json();
		setWeather(data);
		setLoading(false);
	}

	const [weather, setWeather] = useState(null);
	const [local, setLocal] = useState(null);
	const [city, setCity] = useState(null);
	useEffect(()=>{
		city && getWeatherByCityName(city);
	}, [city]);
	
	const [loading, setLoading] = useState(false);

	const cssContent = {
		position : 'absolute',
		top : '50%',
		left : '50%',
		transform : 'translate(-50%, -50%)'
	}

	const cssButtons = {
		margin : '30px 0 0',
		textAlign : 'center',
	}

	const citys = [local ,'Seoul', 'Paris', 'New york'];

	return (
		<div className="App">
			<div className="content" style={cssContent}>
				{loading ? (
					<Loading/>
				) : (
					<>
						<Information weatherInformation={weather}/>
						<div className="buttons" style={cssButtons}>
							{
								citys.map((value, index)=>{
									return <Button key={index} setCity={setCity} cityName={value}>{index ? value : 'Current Location'}</Button>
								})
							}
						</div>
					</>
				)}
				
			</div>
		</div>
	);
}

export default App;
