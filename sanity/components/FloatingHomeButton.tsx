import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export function FloatingHomeButton() {
  return (
    <Link
      href="/"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '2%',
        transform: 'translateX(-50%)',
        zIndex: 999999,
        padding: '12px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '9999px',
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Back to Website">
      <FaHome style={{ fontSize: '0.75rem' }} />
    </Link>
  );
}
