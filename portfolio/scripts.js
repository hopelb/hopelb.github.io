// Fetch and inject navigation
fetch('nav.html')
.then(response => response.text())
.then(html => {
    document.getElementById('nav-container').innerHTML = html;
    // Keyboard focus syncing for menu
    const popover = document.getElementById('main-menu');
    const activeBtn = document.getElementById('active-btn');
    const triggerBtn = document.querySelector('.trigger-button');

    // Sync focus between the two menu buttons
    popover.addEventListener('toggle', (event) => {
        if (event.newState === 'open') {
            activeBtn.focus();
        } else {
            triggerBtn.focus();
        }
    });
    // After injecting nav:
    if (document.title !== "Hope Lumsden-Barry") { // Skip if it's the homepage
        const currentPageH1 = document.getElementById('current_page');    
        const firstWord = document.title.split(' |')[0];
        document.querySelector('h1').textContent = firstWord;
        currentPageH1.textContent = firstWord;
    }
});


// Fetch and inject navigation
fetch('footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-container').innerHTML = html;
        function getMelbourneSeason() {
                // 1. Get current date in Melbourne
                const now = new Date();
                const melbourneDate = new Intl.DateTimeFormat('en-AU', {
                    timeZone: 'Australia/Melbourne',
                    month: 'numeric',
                    day: 'numeric'
                }).formatToParts(now);

                const month = parseInt(melbourneDate.find(p => p.type === 'month').value);
                const day = parseInt(melbourneDate.find(p => p.type === 'day').value);
                
                // Create a comparable number (e.g., Feb 22 becomes 222)
                const dateValue = month * 100 + day;

                // 2. The Data List (Key/Value mapping)
                // Values are MMDD (MonthDay) for easy comparison
                const seasons = [
                    { name: "Biderap, dry season",           start: 1202, end: 1231 }, // Dec part
                    { name: "Biderap, dry season",           start: 101,  end: 201 },  // Jan part
                    { name: "Luk, eel season",               start: 202,  end: 401 },
                    { name: "Waring, wombat season",         start: 402,  end: 601 },
                    { name: "Gannawarra, black swan season", start: 602,  end: 725 },
                    { name: "Guling, orchid season",         start: 726,  end: 925 },
                    { name: "Porneet, tadpole season",       start: 926,  end: 1201 }
                ];

                // 3. Find the match
                const current = seasons.find(s => dateValue >= s.start && dateValue <= s.end);
                
                return current ? current.name : "";
            }

            // Inject the text into the HTML
            document.getElementById('current-season').textContent = getMelbourneSeason();
});

