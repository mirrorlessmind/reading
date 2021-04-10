// generateReadme function populating the README.md
function generateReadme(answers) {
  return ` ${answers.projectTitle} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. Please refer to documention for further information.
## Contributing
${answers.contributing}
## Tests
✏️ ${answers.tests}
## Questions
${answers.questions}<br />
<br />
Visit our awesome GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Questions? Email Me~ ${answers.email}<br /><br />
  `;
}

module.exports = generateReadme;