import React, { useEffect } from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, message, type, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'border-green-500/50';
      case 'error':
        return 'border-red-500/50';
      case 'info':
        return 'border-blue-500/50';
      default:
        return 'border-green-500/50';
    }
  };

  const getTextStyles = () => {
    switch (type) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <div className={`fixed bottom-10 right-10 glass p-4 rounded-xl ${getToastStyles()} z-[200] animate-in slide-in-from-bottom duration-300`}>
      <p className={`${getTextStyles()} text-sm`}>{message}</p>
    </div>
  );
};

export default Toast;
