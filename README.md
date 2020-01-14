# Collage Maker

## A Javascript learning project.

## v0.0.3

## Goals for this project:

### This list is evolving with time...

- Get better at Javascript ⏳
- Design and build an application that uses images, text and shapes to create pleasing compositions in a collage-like form.
- Learn how to use XML HTTP Requests to query an external data source, in this case an image API hosted by a 3rd party, and retrieve images based on user keyword input. ✅
  - Take user input and do something useful.
- Generate SVG shapes randomly. ✅
- Utilize SVG masking functionality. ✅
- Use ES 6 modules.  ✅
- Leverage npm in a useful way ✅
  - Using browser sync and sass in on nice npm run command ✅

## Run the application:

1. Clone the repo,
2. This project uses SASS, so make sure it is available
3. Make sure you have a recent version of node (10.14.2)
4. Run `npm install`
5. Then `npm run dev`
6. Enjoy a milk shake 🥤

## Change Log:

### v0.0.3

- Cribbed a function from MDN that allows me to change the stylesheet itself, to modify the main container's background color.
  - added that function to `utils.js`.
- Did some futzing w/ the way numbers are generated with respect to the polygon point placement.
- Removed unused code & unnecessary comments.
- Added a new module for text shape manipulation, but have yet to actually implement... 🙃
- Littered README file w/ emojiis.
- Formatting more consistent across the entire app.

### v0.0.2

- Removed redundant code.
- added a `utlils.js` file for functions that are widely used or do repetitive tasks
- fixing up files for better readability and removing commented out code
- left some commented console log, b/c I'm still a little unclear about functionality, so I might want to return them later

### v0.0.1

- Added a proper README.md
- update to package.json: running `npm start` sets up browser sync and starts sass watching as well...
- added in functionality to generate shapes (mostly triangles using `polygon`)
- figured out how to make my xhr function generic and therefore be able to get more than one image at time.

### v0.0.0

- created this project
- wrestled w/ many of the subjects raised in the goals section
- dynamic `circle` generation
- sorted out how to use the masking functionality in `svg`s
- set up browser-sync for development
- a whole boatload of experiments, falling down rabbit holes, despair, frustration, jubilation, wandering down blind alleys and general good times...
