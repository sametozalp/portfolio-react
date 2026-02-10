import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { hideToast } from '../store/slices/uiSlice';

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const { toast } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast.show, dispatch]);

  if (!toast.show) return null;

  const getToastStyles = () => {
    switch (toast.type) {
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
    switch (toast.type) {
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
      <p className={`${getTextStyles()} text-sm`}>{toast.message}</p>
    </div>
  );
};

export default Toast;
