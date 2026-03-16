import React from 'react';
import { content } from '../config';

const NotificationBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-primary text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
      <span className="inline-flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">timer</span>
        {content.notification.text}
      </span>
    </div>
  );
};

export default NotificationBar;