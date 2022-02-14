const  { licenseText, markdown } = require("./gen-markdown.js");

const generateReadme = projectArr => {

    return `![license](${markdown(projectArr)})

# ${projectArr.name}

## Description

${projectArr.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation: 
- ${projectArr.installation}

## Usage:
- ${projectArr.usage}
- ${licenseText(projectArr)}

## Contributions:
- ${projectArr.contribution}

## Tests:
- ${projectArr.test}

## Questions:
Feel free to rech out with any questions. 
Github Profile: https://github.com/${projectArr.github}
Email Address:  ${projectArr.email}.`;
}

module.exports = templateData => {
    return generateReadme(templateData);
}