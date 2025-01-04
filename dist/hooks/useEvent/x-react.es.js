import { useRef, useEffect } from "react";
const useEvent = (type, listener, options) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      const currentRef = ref.current;
      return () => currentRef?.removeEventListener(type, listener, options);
    }
    return void 0;
  }, [listener, options, type]);
  return ref;
};
export {
  useEvent
};
