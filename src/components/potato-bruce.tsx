import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood } from './types';

import { EyeBox } from './eye-box';
import { Nose } from './nose';
import { Mouth } from './mouth';

interface PotatoBruceProps {
    mood: Mood;
    className?: string
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('body')}>
            <EyeBox className={style.eyeBox} mood={props.mood} />
            {/* <Nose className={style.noseBox} mood={props.mood} /> */}
            <Mouth className={style.mouthBox} mood={props.mood} />
        </div>
    </div>
);
