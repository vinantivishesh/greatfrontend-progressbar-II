import React, { useState, useEffect } from 'react';

export default function ProgressBar({ percent }) {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (startTransition) return;
    setStartTransition(true);
  });

  return (
    <div className="progress">
      <div
        className={['percents', startTransition && 'percents--filled']
          .filter(Boolean)
          .join(' ')}
      ></div>
    </div>
  );
}
