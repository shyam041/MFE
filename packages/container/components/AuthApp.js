import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPathName: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;
        const { pathname: currentPathname } = history.location;
        nextPathname !== currentPathname && history.push(nextPathname);
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
