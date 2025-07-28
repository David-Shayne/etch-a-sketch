# etch-a-sketch

Basic Etch-A-Sketch application with configurable canvas size (Using basic DOM manipulation only)

# Basic Principle

There will be two major sections to the application:

1. Input section where users can generate the canvas by entering width and height
2. Canvas section where users can draw on the canvas by hovering over it

# Details

- Input section will take in a resolution of divs (width and height)
- Canvas will be made of divs
- divs will be an equal width and height relative to the total canvas size (80vh and vw)
- When hovering over the divs, the color turns 10% darker (on entry)

# PseudoCode

Create a canvas container div with a height and width of 80vw
On input of a width and height number:
Generate square divs equal to number^2 and populate the canvas equally (x per column and row)
