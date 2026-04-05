 const sidebar      = document.getElementById('sidebar');
    const sidebarBtn   = document.getElementById('sidebarToggle');
 
    sidebarBtn.addEventListener('click', () => {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      sidebarBtn.setAttribute('aria-expanded', String(!isCollapsed));
      sidebarBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
    });
 
    /* ---- Hamburger / mobile nav ---- */
    const hamburger    = document.getElementById('hamburger');
    const mobileNav    = document.getElementById('mobileNav');
    const overlay      = document.getElementById('overlay');
    const closeBtn     = document.getElementById('mobileNavClose');
 
    function openMobileNav() {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.style.visibility = 'hidden';   // hide hamburger — drawer's ✕ takes over
      document.body.style.overflow = 'hidden';
    }
 
    function closeMobileNav() {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.style.visibility = 'visible';  // restore hamburger
      document.body.style.overflow = '';
    }
 
    hamburger.addEventListener('click', openMobileNav);
    closeBtn.addEventListener('click', closeMobileNav);
    overlay.addEventListener('click', closeMobileNav);
 
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileNav();
    });
 
    /* ---- Load Data button ---- */
    const loadBtn    = document.getElementById('loadBtn');
    const dataOutput = document.getElementById('data');
 
    // Tracks whether the fetch succeeded so .finally() can set the right button label
    let fetchSucceeded = false;
 
    function loadData() {
      fetchSucceeded = false;
      loadBtn.disabled = true;
      loadBtn.textContent = 'Loading...';
      dataOutput.innerHTML = '<p class="status-message">Fetching data...</p>';
 
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
 
        // Each user gets its own 'user' variable per forEach iteration,
        // so the setTimeout closure safely captures the correct reference —
        // no stale-variable problem here unlike a classic var-in-for-loop.
        .then(function (users) {
          console.log('Data before loop:', users);
          fetchSucceeded = true;
 
          // Clear the "Fetching..." message before appending names
          dataOutput.innerHTML = '<p class="status-message">Below are the user\'s names:</p>';
 
          users.forEach(function (user, index) {
            // Stagger each item by 150ms so they appear one after another
            setTimeout(function () {
              const p = document.createElement('p');
              p.className = 'user-item';
              p.textContent = user.name;
              dataOutput.appendChild(p);
              console.log('Rendered user via closure:', user.name);
            }, 150 * (index + 1));
          });
 
          console.log('Loop initiated for', users.length, 'users');
        })
 
        .catch(function (err) {
          dataOutput.innerHTML = '<p class="error-message">Error: ' + err.message + '</p>';
          console.error(err);
        })
 
        .finally(function () {
          loadBtn.disabled = false;
          // Label reflects actual outcome — success or failure
          loadBtn.textContent = fetchSucceeded ? 'Reload Data' : 'Try Again';
        });
    }
 
    if (loadBtn) {
      loadBtn.addEventListener('click', loadData);
    }







