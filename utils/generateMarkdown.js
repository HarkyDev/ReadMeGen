// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license,licenseColor) {
  return `![License](https://img.shields.io/badge/License-${license}-${licenseColor}.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}
  
  ## PROJECT DESCRIPTION 
  ${data.description}

  ## Project Contents
  -  ${data.description}
  -  ${data.githubName}
  -  ${data.emailAddress}
  -  ${data.usage}
  -  ${data.test}
  -  ${data.screenshot}
  -  ${data.install}
  -  ${data.license}

  ## INSTALLATION 
  ${data.install}

  ## HOW TO USE THIS PROJECT
  ${data.usage}
  
  ## CONTRIBUTORS 

  ## LICENSE IN USE
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
