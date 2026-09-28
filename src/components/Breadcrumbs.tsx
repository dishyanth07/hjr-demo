import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs text-slate-500">
        <li>
          <button
            onClick={() => navigate('/')}
            className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-slate-900 transition-colors cursor-pointer truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
