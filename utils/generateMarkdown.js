// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license || data.license === 'None') {
    return '';
  } else {
    return renderLicenseLink (data);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (data.license === 'GNU') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (data.license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (data.license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (data.license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return `## License
    * This project is licensed under the ${license} license`;
  }
};

function licenseIndexCheck(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return `* [License](#license)`;
  }
};

function renderContributionSection(data) {
  if(!data.contributionGuidelines) {
    return '';
  } else {
    return `## Contribution Guidelines
    ${data.contributionGuidelines}`;
  }
};

function contributionsIndex(contributionGuidelines) {
  if (!contributionGuidelines) {
    return '';
  } else {
    return `* [Contribution Guidelines](#contribution Guidelines)`;
  }
};

function renderTestingSection(data) {
  if(!data.testing) {
    return '';
  } else {
    return `## Testing
    ${data.testing}`;
  }
};

function renderTestingIndex(testing) {
  if (!testing) {
    return '';
  } else {
    return '* [Testing](#testing)';
  }
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge}${renderLicenseLink}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${contributionsIndex}
  ${licenseIndexCheck}
  ${renderTestingIndex}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderContributionSection}

  ${renderLicenseSection}

  ${renderTestingSection}

  ## Questions
  Created by: [a link](https://github.com/${data.username})
  For further questions please contact [mailto](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
