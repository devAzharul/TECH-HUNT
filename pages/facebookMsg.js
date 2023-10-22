'use client'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {

    return (
        <FacebookProvider appId="212089655150276" chatSupport>
            <CustomChat pageId="121839287554795" minimized={true} />
        </FacebookProvider>
    )
}

export default FacebookMsg