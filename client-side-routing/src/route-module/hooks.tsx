import React from "react";
import { RouterContext } from "./context";

export function useRouter() {
  const { path, changePath } = React.useContext(RouterContext);

  const push = React.useCallback(
    (nextPath: string) => {
      if (path === nextPath) {
        return;
      }

      changePath(nextPath);
    },
    [path, changePath]
  );

  return push;
}
