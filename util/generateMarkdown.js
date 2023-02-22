// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'GNU':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
        break;
    case  'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;

        default:
          return '';

  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license) {
    case 'GNU':
      return `https://www.gnu.org/licenses/gpl-faq.en.html`;
      break;
    case 'Eclipse':
      return `https://www.eclipse.org/legal/epl-2.0/`;
      break;
    case 'MIT':
      return `https://opensource.org/license/mit/`;
      break;
    case 'Mozilla':
      return `https://www.mozilla.org/en-US/MPL/2.0/`;
      break;

    default:
      return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}


  Contents
  -- [Install] (#installation)

  -- [Usage] (#usage)

  -- [Contributions] (#contributions)

  -- [Test] (#testing)

  -- [License] (#license)

  ## Install

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Email

  ${data.email}

  ## License

  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
