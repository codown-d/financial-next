import { useCallback, useEffect, useState } from "react";

interface ResizeProps {
  callback?: (width?: number) => void;
}
export const useResize = (props?: ResizeProps) => {
  let [isMobile, setIsMobile] = useState(false);
  let onResizeChange = useCallback((width: number) => {
    props?.callback?.(width);
  }, []);
  useEffect(() => {
    const element = document.querySelector("body");
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 560) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
        onResizeChange(entry.contentRect.width)
      }
    });
    resizeObserver.observe(element);
  }, []);
  return { isMobile };
};
