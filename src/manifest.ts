import type { Manifest } from 'webextension-polyfill'

export async function getManifest() {
    // update this file to update this manifest.json
    // can also be conditional based on your need
    const manifest: Manifest.WebExtensionManifest = {
        manifest_version: 2,
        name: 'IPLAND',
        version: '1.0.0',
        description: 'test',
        browser_action: {
            default_icon: './assets/icon-512.png',
            default_popup: './dist/popup/index.html'
        },
        options_ui: {
            page: './dist/options/index.html',
            open_in_tab: true,
            chrome_style: false
        },
        background: {
            page: './dist/background/index.html',
            persistent: false
        },
        icons: {
            16: './assets/icon-512.png',
            48: './assets/icon-512.png',
            128: './assets/icon-512.png'
        },
        permissions: ['tabs', 'storage', 'activeTab', 'http://*/', 'https://*/'],
        content_scripts: [
            {
                matches: ['http://*/*', 'https://*/*'],
                js: ['./dist/contentScripts/index.js']
                // css: ['./dist/contentScripts/style.css']
            }
        ],
        web_accessible_resources: ['dist/contentScripts/style.css']
    }

    return manifest
}
