import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import DailyWeather from './DailyWeather';

describe('DailyWeather component', () => {
  const oneDayWeatherObject = {
    minTemp: 15,
    maxTemp: 20,
    symbolPhrase: 'clear'
  }
  test('DailyWeather render correct props data', () => {
    const component = render(<DailyWeather oneDayWeather={oneDayWeatherObject}/>)
    expect(component.container).toHaveTextContent('15' && '20' && 'clear');
  })
  test('daily weather image has correct alt description', () => {
    const component = render(<DailyWeather oneDayWeather={oneDayWeatherObject}/>)
    const element = component.container.querySelector('.dailyWeatherIcon');
    screen.debug(element)
    expect(element).toHaveAttribute('alt', 'clear')
  })
})
