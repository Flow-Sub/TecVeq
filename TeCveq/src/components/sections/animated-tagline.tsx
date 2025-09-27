"use client";

import React, { useEffect, useState } from "react";

const animationStyles = `
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideInUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideInLeft { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes typing { 
  from { width: 0; } 
  to { width: 100%; } 
}
`;

export default function AnimatedTagline({ content }: { content: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // On the server and initial client render, show a non-animated version to prevent hydration mismatch.
  if (!isMounted) {
    // This regex removes the style attribute to prevent server/client mismatch
    const staticContent = content.replace(/style="[^"]*"/g, '');
    return <span dangerouslySetInnerHTML={{ __html: staticContent }} />;
  }
  
  return (
    <>
      <style>{animationStyles}</style>
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
