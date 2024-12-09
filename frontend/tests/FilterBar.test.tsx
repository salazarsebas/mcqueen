import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from '../src/components/FilterBar.tsx';

describe('FilterBar Component', () => {
  test('renders the input field and button', () => {
    render(<FilterBar onSearch={() => {}} />);

    // Verificar que el campo de búsqueda está presente
    const inputElement = screen.getByPlaceholderText('Buscar carros...');
    expect(inputElement).toBeInTheDocument();

    // Verificar que el botón de filtros está presente
    const buttonElement = screen.getByRole('button', { name: /Filtros/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onSearch when typing in the input field', () => {
    const mockOnSearch = jest.fn();
    render(<FilterBar onSearch={mockOnSearch} />);

    // Simular escritura en el campo de entrada
    const inputElement = screen.getByPlaceholderText('Buscar carros...');
    fireEvent.change(inputElement, { target: { value: 'Toyota' } });

    // Verificar que se llama a la función con el valor correcto
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('Toyota');
  });

  test('renders the search icon in the input field', () => {
    render(<FilterBar onSearch={() => {}} />);

    // Verificar que el ícono de búsqueda está presente
    const searchIcon = screen.getByTestId('lucide-search');
    expect(searchIcon).toBeInTheDocument();
  });

  test('renders the filters button with correct text and icon', () => {
    render(<FilterBar onSearch={() => {}} />);

    // Verificar que el texto del botón sea "Filtros"
    const buttonText = screen.getByText('Filtros');
    expect(buttonText).toBeInTheDocument();

    // Verificar que el ícono de filtros está presente
    const filterIcon = screen.getByTestId('lucide-sliders-horizontal');
    expect(filterIcon).toBeInTheDocument();
  });
});
