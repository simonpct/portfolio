"use client";

import React from 'react';
import { TimeLineItem } from './TimeLineItem';
import { timeLineData } from '../../data';
import { TimeLineProvider } from './TimeLineContext';

export default function TimeLine(): React.ReactElement {

  const [blink, setBlink] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative container">
      <div className="relative z-10">
        <TimeLineProvider>
          {timeLineData.map((item, index) => (
            <TimeLineItem
              key={index}
              index={index}
              item={item}
              blink={blink}
            />
          ))}
        </TimeLineProvider>
      </div>
    </div>
  );
}