import React, { useState } from 'react';
import '../cards.css';

const cards = [
  { id: 1, text: 'Card 1', color: '#f87171' },
  { id: 2, text: 'Card 2', color: '#34d399' },
  { id: 3, text: 'Card 3', color: '#60a5fa' },
  { id: 4, text: 'Card 4', color: '#fbbf24' },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="card-slider">
      <div className="card-stack">
        {cards.map((card, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;

          return (
            <div
              key={card.id}
              className={`card ${isActive ? 'active' : ''}`}
              style={{
                backgroundColor: card.color,
                transform: `translateX(${offset * 30}px) rotateY(${offset * -10}deg) scale(${1 - Math.abs(offset) * 0.05})`,
                zIndex: cards.length - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              {card.text}
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={prev}>◀ Prev</button>
        <button onClick={next}>Next ▶</button>
      </div>
    </div>
  );
}