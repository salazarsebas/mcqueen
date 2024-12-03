import React from 'react';
import { useMemo } from 'react';
import debounce from 'lodash/debounce';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  onSearch: (value: string) => void;
}

export default function FilterBar({ onSearch }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search cars..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={useMemo(
            () => debounce((e) => onSearch(e.target.value), 300),
            [onSearch]
          )}
        />
      </div>
      <button 
        onClick={onFilterClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          filters?.active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <SlidersHorizontal className="w-5 h-5" />
        <span>Filters</span>
        <span>Filters {filters?.count ? `(${filters.count})` : ''}</span>
      </button>
    </div>
  );
}
