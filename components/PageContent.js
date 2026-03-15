'use client';

import { useEffect, useRef } from 'react';
import Nav from './Nav';

export default function PageContent({ css, html, script, transparentNav = true }) {
  const scriptRan = useRef(false);

  useEffect(() => {
    if (scriptRan.current || !script) return;
    scriptRan.current = true;

    // Execute the page-specific script
    try {
      const fn = new Function(script);
      fn();
    } catch (e) {
      console.error('Page script error:', e);
    }

    return () => {
      scriptRan.current = false;
    };
  }, [script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Nav transparentHero={transparentNav} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
