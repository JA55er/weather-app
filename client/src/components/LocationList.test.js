import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import LocationList from './LocationList';

describe('LocationList renders: ', () => {
  test('LocationList renders "no location found" text when locations is set to none', () => {
    const component = render(<LocationList locations={['none']} />)
    expect(component.container).toHaveTextContent('no location found')
  })
  test('LocationsList does not render "no location found" text when locations prop is not set to none', () => {
    render(<LocationList locations={[1]} />)
    const element = screen.queryByText("no location found");
    expect(element).toBeFalsy();
  })
  test('LocationsList renders div for displaying a list', () => {
    const component = render(<LocationList locations={[1]} />);
    const element = component.container.querySelector('.LocationList');
    expect(element).toBeVisible();
  })
  test('LocationsList renders a correct amount of items in a list', () => {
    const component = render(<LocationList locations={[1, 2, 3]} />);
    const element = component.container.querySelectorAll('.locationText');
    expect(element).toHaveLength(3);
  })
})
