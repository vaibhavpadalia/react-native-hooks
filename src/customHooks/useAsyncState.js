/**
 * @description This is a custom hook tha promisifies useState hook so that we can use asyncand await with it
 */

import { useState } from "react";

function useAsyncState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const setter = x =>
      new Promise(resolve => {
        setValue(x);
        resolve(x);
      });
    return [value, setter];
}

export default useAsyncState;


// Note that setState of useState hook works asynchronously