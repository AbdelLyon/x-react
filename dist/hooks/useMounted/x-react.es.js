import { useState, useEffect } from "react";
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
export {
  useMounted
};
//# sourceMappingURL=x-react.es.js.map
