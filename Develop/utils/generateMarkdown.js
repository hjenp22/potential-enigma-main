// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      case 'Apache-2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
      case 'GPL-3.0':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      // Add cases for other licenses as needed
      default:
          return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[MIT](https://opensource.org/licenses/MIT)';
      case 'Apache-2.0':
          return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL-3.0':
          return '[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0)';
      // Add cases for other licenses as needed
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  switch (license) {
      case 'MIT':
          return 'This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.';
      case 'Apache-2.0':
          return 'This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.';
      case 'GPL-3.0':
          return 'This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.';
      // Add cases for other licenses as needed
      default:
          return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ${licenseBadge}
  ${licenseLink}
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseSection}
  `;
}
  
module.exports = generateMarkdown;
