import React from 'react';
import '../css/snow.css'; // Yukarıdaki CSS'i bu dosyaya ekleyin

const Snow = () => {
  const snowflakes = Array.from({ length: 100 });

  return (
    <div className="snow-container">
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
