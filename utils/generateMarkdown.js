// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
  <h1> ${answers.title} </h1>


## Table of Contents
- [Use](#use)
- [Description](#description)
- [Contributing](#contributing)
- [Installation](#installation)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
## Usage
${answers.usage};

## Description 🔥
${answers.description}

## Contributing Partners ✨
${answers.contributors}

## Installation 💻
${answers.install}

## License 
![badge](https://img.shields.io/badge/license-${answers.license}-blue)
<br />
This application is covered by the ${answers.license} license. Please refer to documention for further information.

## Tests Included? 😎
${answers.test}

## What do I do if I have an issue? 😔
${answers.question}<br />

## Contact Me 😻 ~ ${answers.email}<br />


Visit our awesome GitHub : [${answers.username}](https://github.com/${answers.username})<br />
Wanna Know More Visit My LinkedIn: [${answers.usernamelink}](https://linkedIn.com/${answers.usernamelink})<br />
  `;
}

module.exports = generateReadme;
