// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);

// CSV TABLE STUFF BELOW!

// Helper function to split CSV rows while respecting quotes
function splitCSV(row) {
  return row
    .match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
    .map(cell => cell.replace(/^"|"$/g, ''));
}

// Fetch and process CSV
fetch("data/projects.csv")
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(splitCSV);
    const table = document.getElementById("data-table");

    rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");

      row.forEach((cell, colIndex) => {
        const el = document.createElement(rowIndex === 0 ? "th" : "td");

        // Hide the 5th column (tags column, index 4)
        if (colIndex === 4) {
          el.style.display = "none";
        }

        // Render one or more hyperlinks via label|url, separated by commas
        if (rowIndex !== 0 && cell.includes("|")) {
          const parts = cell.split(","); // multiple links

          parts.forEach((part, index) => {
            const [label, url] = part.split("|", 2);

            if (url && url.trim().startsWith("http")) {
              const link = document.createElement("a");
              link.href = url.trim();
              link.textContent = label.trim();
              link.target = "_blank";
              el.appendChild(link);

              // Add separator between links
              if (index < parts.length - 1) {
                el.appendChild(document.createTextNode(", "));
              }
            } else {
              el.appendChild(document.createTextNode(part));
            }
          });
        } else {
          el.textContent = cell;
        }

        tr.appendChild(el);
      });

      table.appendChild(tr);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("data-table").innerHTML =
      "<tr><td>Error loading CSV data</td></tr>";
  });
