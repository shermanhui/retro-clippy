# retro-clippy
Chrome Extension that extracts metroretro.io JSON to your clipboard as an HTML list


# Installation

1. Clone repo and run `yarn` to install dependencies
2. Run `yarn build` to generate a `/dist` folder
3. Go to chrome://extensions/ 
4. Enable Developer Mode 
5. Click "Load Unpacked"
6. Upload `/dist` folder


# Usage

This extension only works on `https://metroretro.io` when a user is exporting the board's JSON.

1. Upon completing your MetroRetro session, click the "export" button
2. Select JSON and click "View Raw" 
3. Highlight the entire JSON block using `cmd a`
4. Right click to open the Chrome context menu
5. Select "Extract JSON to List"
6. The JSON values are copied to your clipboard as a list
