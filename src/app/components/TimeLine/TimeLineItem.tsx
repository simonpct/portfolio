"use client";

import React from 'react';
import { TimeLineDot } from './TimeLineDot';
import { useTimeLine } from './TimeLineContext';
import { timeLineData, TimeLineItemData } from '../../data';
import clsx from 'clsx';
import { TimeLineCorp } from './Content/TimeLineCorp';
import TimeLineSkills from './Content/TimeLineSkills';
import { usePostHog } from 'posthog-js/react';

interface TimeLineItemProps {
  readonly index: number;
  readonly item: TimeLineItemData;
  readonly blink: boolean;
}

export const TimeLineItem: React.FC<TimeLineItemProps> = ({ index, item, blink }) => {
  const { currentIndex, setCurrentIndex } = useTimeLine();
  const posthog = usePostHog();
  const isOpen = currentIndex === index;
  const isTitle = item.type === "title";

  const toggleOpen = (): void => {
    // Track the click event with PostHog
    posthog.capture("timeline_item_clicked", {
      item_title: item.title,
      item_index: index,
      item_type: item.type || "default",
      action: isOpen ? "close" : "open"
    });
    
    if (isOpen) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative flex min-h-11">
      <div className="flex flex-col items-center mr-4 bg-blue">
        <TimeLineDot type={isTitle ? "terminus" : "stop"} blinking={blink && currentIndex <= index} />
        {index !== timeLineData.length - 1 && <div className={`w-2 h-full -my-2 bg-[#C82973]`}></div>}
      </div>
      
      <div className="">
        <div 
          id={`timeline-${index}`}
          className="flex items-center justify-between cursor-pointer" 
          onClick={toggleOpen}
        >
          <div>
            <h3 className={clsx("text-lg text-gray-900 mb-0", isTitle ? "font-medium" : "font-normal")}>{item.title}</h3>
          </div>
        </div>
        
        {<div className={clsx("mt-2 mb-4 text-sm rounded-md overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? 'max-h-[500px] opacity-100 py-3' : 'max-h-0 opacity-0 p-0',
          'flex flex-col gap-2')}>
          {item.content?.map((content, index) => (
            <div key={index}>
              {content.type === 'text' && (
                <p>{content.content}</p>
              )}
              {content.type === 'corp' && (
                <TimeLineCorp corp={content} />
              )}
              {content.type === 'react' && (
                content.content()
              )}
              {content.type === 'skills' && (
                <TimeLineSkills skills={content.skills} content={content.content} />
              )}
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};
