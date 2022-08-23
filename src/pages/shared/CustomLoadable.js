import React from 'react';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
//import Spiner from './Spiner';

function CustomLoadable(compn) {
    return loadable(() => pMinDelay(compn, 200), {
        fallback: <div />
    });
}
export default CustomLoadable;