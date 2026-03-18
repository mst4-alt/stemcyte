'use client';

import { useEffect, useRef } from 'react';
export default function PageContent({ css, html, script }) {
  const scriptRan = useRef(false);

  useEffect(() => {
    if (!script) return;
    if (scriptRan.current && scriptRan.current !== false) {
      scriptRan.current.parentNode?.removeChild(scriptRan.current);
    }

    // Execute the page-specific script in global scope
    try {
      const scriptEl = document.createElement('script');
      scriptEl.textContent = script;
      document.body.appendChild(scriptEl);
      // Store reference for cleanup
      scriptRan.current = scriptEl;
    } catch (e) {
      console.error('Page script error:', e);
    }

    return () => {
      if (scriptRan.current && scriptRan.current.parentNode) {
        scriptRan.current.parentNode.removeChild(scriptRan.current);
      }
      scriptRan.current = false;
    };
  }, [script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
