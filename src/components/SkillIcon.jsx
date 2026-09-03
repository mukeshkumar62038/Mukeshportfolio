import React from 'react';

export default function SkillIcon({ type, className = "w-8 h-8" }) {
  switch (type) {
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#E34F26" stroke="#E34F26" />
          <path d="M12 5.5v13.2l4.6-1.3 1.4-11.9H12z" fill="#EF652A" stroke="#EF652A" />
          <path d="M8 8.5h8M8 11.5h7.5l-.5 4.5-3 1-3-1-.2-2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#1572B6" stroke="#1572B6" />
          <path d="M12 5.5v13.2l4.6-1.3 1.4-11.9H12z" fill="#33A9DC" stroke="#33A9DC" />
          <path d="M7.8 8.5h8.4l-.2 2.5H10.5l.3 2.5h4.8l-.5 4-3.1 1-3.1-1-.2-2.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 13.5v4c0 1.5-.8 2-2 2-1 0-1.7-.4-2-1m14.5-5h-3c-1 0-1.8.6-1.8 1.6 0 1.8 2.8 1.5 2.8 2.8 0 .8-.8 1.2-1.6 1.2-1.2 0-1.8-.7-1.9-1.6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'php':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#777BB4" />
          <text x="12" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
        </svg>
      );
    case 'bootstrap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <text x="12" y="17" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">B</text>
        </svg>
      );
    case 'dbms':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ff014f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <text x="12" y="16" fill="#F29111" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MySQL</text>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ff014f" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}
