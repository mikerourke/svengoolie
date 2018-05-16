import React from 'react';

/**
 * The `closepath` command will draw a straight line, from the current position
 * to the first point in the path. It is the simplest command, and takes no
 * parameters. It will take the shortest linear path to the starting point,
 * intersecting other paths if they fall in the way.
 */
const Close = () => <React.Fragment />;

Close.getMovement = () => 'z';

export default Close;
