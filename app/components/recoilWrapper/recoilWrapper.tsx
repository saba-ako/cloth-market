'use client'

import { ReactNode } from "react";
import { RecoilRoot } from "recoil"

type Props = {
    children: ReactNode;
};

export default (props: Props) => {
    return <RecoilRoot>
                {props.children}
            </RecoilRoot>
}