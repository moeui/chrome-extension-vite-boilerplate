import React from 'react'
import { render } from 'react-dom'

import App from './app'

const run = (dom: Element): void => {
    const root = document.createElement('div')
    render(<App />, root)
    dom.appendChild(root)
}

const check = (e): void => {
    const jsLoaded = (): void => {
        const dom = document.querySelector('body')
        if (dom) {
            clearInterval(checkInterval)
            run(dom)
        }
    }
    const checkInterval = setInterval(jsLoaded, 500)
}

window.addEventListener('load', check, false)
