const os = require('os');

// Get OS Architecture (e.g., 'x64', 'arm')
console.log(os.arch());

// Get Free Memory in GB
console.log(os.freemem() / (1024 * 1024 * 1024));

// Get Total Memory in GB
console.log(os.totalmem() / (1024 * 1024 * 1024));

// Get Hostname
console.log(os.hostname());

// Get Platform details (e.g., 'win32', 'darwin', 'linux')
console.log(os.platform());

// Get User Info
console.log(os.userInfo());
