import React from 'react';
import Header from "../header"
import { defaultPicture } from "../../settings"

export function Picture(props) {
    const { picUrl } = props;
    const src = picUrl || defaultPicture
    return <div>
        <Header title="Picture Component" />
        <img height="100" width="100" src={src} />
    </div>
}
