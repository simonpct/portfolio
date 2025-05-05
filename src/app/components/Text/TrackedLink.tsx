"use client";

import React from 'react';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

interface TrackedLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly target?: string;
  readonly rel?: string;
}

export const TrackedLink: React.FC<TrackedLinkProps> = ({ 
  href, 
  children, 
  className,
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  const posthog = usePostHog();

  const handleClick = (): void => {
    posthog.capture("link_clicked", {
      link_url: href,
      link_type: getLinkType(href)
    });
  };

  const getLinkType = (url: string): string => {
    if (url.includes('linkedin')) return 'linkedin';
    if (url.includes('github')) return 'github';
    if (url.startsWith('mailto:')) return 'email';
    return 'other';
  };

  return (
    <Link 
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default TrackedLink;
