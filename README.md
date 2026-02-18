# Wepage for EldritchRenaissanceCake

## Contents
1. [Purpose](#purpose)
2. [Repository Structure and Files](#repository-structure-and-files)
3. [Getting Started](#getting-started)
4. [Contact](#contact)

## Purpose
Access the rendered ERC portfolio web page here: [**EldritchRenaissanceCake Portfolio**](https://chaydata.github.io/eldritchrenaissancecake/)  
* A simple GitHub Pages website as a portfolio website for EldritchRenaissanceCake: music, games, art, and other stuff by Chris Hay!  
* Some credit to the [template from zirafa on GitHub](https://github.com/zirafa/simple-website-template). Their website template uses CSS & JS to hide and show different parts of index.html (cool!).  
* The rest of this is behind-the-scenes notes for myself working on the website =). But feel free to take a peek if you want.  

## Repository Structure and Files

```
eldritchrenaissancecake/
├── data/                         # data input (file contents ignored)
|   └── projects.csv              # table of info that gets displayed
├── docs/                         # documentation
|   └── how-to-test.md            # for local testing of the web page
├── **index.html**                # the GitHub page content, in html (all pages are in here!)
├── README.md                     # this file (orientation to the repo and big pic info)
├── **script.js**                 # javascript magic
└── **style.css**                 # css styling - colours, fonts, etc.

```

## Getting Started
Access the rendered ERC portfolio web page here: [**EldritchRenaissanceCake Portfolio**](https://chaydata.github.io/eldritchrenaissancecake/)  

To edit the **project** table material, edit the CSV file (for location, see folder structure above)
- For hyperlinks, follow this format: label|url
- The text in each cell should always be in quotes, to ensure proper formatting in this context (not just when there are commas in a cell)

html, javascript, css:
- HTML to change the main things on the page (header, text, table)
- Javascript for interpreting formatting (e.g. hyperlinks as label|url)
- CSS for aesthetic formatting stuff

GitHub pages:
- This is done in your browser on GitHub, under the settings of this repository
- Look under "Pages" and "GitHub Actions" to check deployment status
- I found this YouTube video a useful guide: [How to Use GitHub Pages (by The Common Coder)](https://www.youtube.com/watch?v=5XhxR9Vs6zc)

Testing / how to see the table rendered:
- See notes in docs/how-to-test.md

## Contact
Chris Hay  
chris.r.j.hay@gmail.com

