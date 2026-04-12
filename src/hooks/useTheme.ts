'use client';

import { useReducer, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  mounted: boolean;
}

type ThemeAction =
  | { type: 'init'; theme: Theme }
  | { type: 'toggle' };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'init':
      return { theme: action.theme, mounted: true };
    case 'toggle':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
  }
}

export function useTheme() {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light', mounted: false });

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme = stored ?? (systemDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
    dispatch({ type: 'init', theme: initial });
  }, []);

  const toggleTheme = () => {
    const next: Theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    dispatch({ type: 'toggle' });
  };

  return { theme: state.theme, toggleTheme, mounted: state.mounted };
}
