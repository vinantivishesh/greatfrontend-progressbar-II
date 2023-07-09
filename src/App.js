import React, { useState } from 'react';
import './style.css';
import ProgressBar from './ProgressBar';

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <button
        style={{ marginBottom: '10px' }}
        onClick={() => setTotal(total + 1)}
      >
        Add
      </button>
      {total}
      {total > 0 && (
        <div className="group-progress">
          {Array(total)
            .fill(null)
            .map((_, index) => (
              <ProgressBar key={index} />
            ))}
        </div>
      )}
    </div>
  );
}
