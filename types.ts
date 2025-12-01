import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

// FIX: Add AIResponse interface to resolve import error in geminiService.ts.
export interface AIResponse {
  summary: string;
  estimatedTimeline: string;
  recommendedTechStack: string[];
  keyFeatures: string[];
}
