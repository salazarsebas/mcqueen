import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarCard from './CarCard';

describe('CarCard Component', () => {
  const defaultProps = {
    image: 'https://via.placeholder.com/150',
    name: 'Test Car',
    price: 25000,
    year: 2020,
    mileage: '30,000 km',
    fuelType: 'Gasoline',
  };

  test('renders without crashing', () => {
    render(<CarCard {...defaultProps} />);
    expect(screen.getByText('Test Car')).toBeInTheDocument();
  });

  test('displays the car name, price, year, mileage, and fuel type', () => {
    render(<CarCard {...defaultProps} />);
    expect(screen.getByText('Test Car')).toBeInTheDocument();
    expect(screen.getByText('25,000')).toBeInTheDocument(); // Price formatted with commas
    expect(screen.getByText('2020')).toBeInTheDocument();
    expect(screen.getByText('30,000 km')).toBeInTheDocument();
    expect(screen.getByText('Gasoline')).toBeInTheDocument();
  });

  test('renders the image with the correct alt text', () => {
    render(<CarCard {...defaultProps} />);
    const imgElement = screen.getByAltText('Test Car');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('renders the heart icon button', () => {
    render(<CarCard {...defaultProps} />);
    const heartButton = screen.getByRole('button');
    expect(heartButton).toBeInTheDocument();
  });
});
