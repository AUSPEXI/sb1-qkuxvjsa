import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function DepartmentNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const departments = [
    { id: 'customer-service', name: 'Customer Service' },
    { id: 'hr', name: 'Human Resources' },
    { id: 'finance', name: 'Accounting & Finance' },
    { id: 'marketing', name: 'Marketing & Advertising' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' },
    { id: 'it', name: 'IT & Technology' },
    { id: 'research', name: 'Research & Development' },
    { id: 'logistics', name: 'Logistics & Supply Chain' },
    { id: 'legal', name: 'Legal & Compliance' },
    { id: 'procurement', name: 'Procurement & Purchasing' },
    { id: 'product', name: 'Product Management' },
    { id: 'qa', name: 'Quality Assurance' },
    { id: 'business-dev', name: 'Business Development' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentDepartment = departments.find(
    dept => location.pathname === `/solutions/${dept.id}`
  )?.name || 'Select Department';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-64 flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span>{currentDepartment}</span>
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full md:w-64 bg-white shadow-lg rounded-md py-1">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              to={`/solutions/${dept.id}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {dept.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}