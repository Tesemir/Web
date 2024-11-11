document.addEventListener("DOMContentLoaded", function () {
  // Mapping server addresses to custom names
  const servers = [
    { address: 'hub.opblocks.com', name: 'OPBlocks' },   // Replace with your server address and custom name
    { address: 'hub.manacube.com', name: 'ManaCube' },  // Replace with your second server address and name
    { address: 'mc.advancius.net', name: 'Advancius Network' },
    { address: 'join.insanitycraft.net', name: 'InsanityCraft' },
    { address: 'mcs.vanillarealms.com', name: 'Vanilla Realms' },
    { address: 'org.mc-complex.com', name: 'Complex Gaming' },
    { address: 'org.earthmc.net', name: 'EarthMC' },
    { address: 'hub.penguin.gg', name: 'Penguin.GG' } // Add more servers as needed
  ];

  const apiUrl = 'https://api.mcsrvstat.us/2/';

  // Function to fetch server status and update the page
  function fetchServerStatus(server) {
    fetch(apiUrl + server.address)
      .then(response => response.json())
      .then(data => {
        const serversList = document.getElementById('servers');
        
        // Create the server status block
        const serverStatusElement = document.createElement('div');
        serverStatusElement.classList.add('server-status');

        // Set the custom server name
        const serverName = document.createElement('h2');
        serverName.innerText = server.name;  // Use the custom name
        serverStatusElement.appendChild(serverName);

        const statusInfo = document.createElement('div');
        statusInfo.classList.add('status-info');

        // Check if the server is online or offline
        if (data.online) {
          serverStatusElement.classList.add('online');
          serverStatusElement.classList.remove('offline');
          statusInfo.innerHTML = `<p>The server is online!</p>
                                  <p>Players online: ${data.players.online}</p>`;
        } else {
          serverStatusElement.classList.add('offline');
          serverStatusElement.classList.remove('online');
          statusInfo.innerHTML = `<p>The server is offline.</p>`;
        }

        serverStatusElement.appendChild(statusInfo);
        serversList.appendChild(serverStatusElement);
      })
      .catch(error => {
        console.error('Error fetching server data:', error);
        const serversList = document.getElementById('servers');

        // Create an error status block if fetch fails
        const errorElement = document.createElement('div');
        errorElement.classList.add('server-status');
        const errorInfo = document.createElement('div');
        errorInfo.classList.add('status-info');
        errorInfo.innerHTML = `<p>Error fetching data for ${server.name}</p>`;
        errorElement.appendChild(errorInfo);
        serversList.appendChild(errorElement);
      });
  }

  // Fetch status for all servers in the list
  servers.forEach(fetchServerStatus);
});
