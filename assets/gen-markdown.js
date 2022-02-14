// This will return a license badge
function addBadge (data) {
    if (!data) {
      return "";
    } else if (data.license === "GNU GPLv3" || data.license === "GNU GPLv2") {
      return `https://img.shields.io/badge/license-${data.license.slice(4)}-green`;
    } else if (data.license === "Apache License 2.0") {
      return `https://img.shields.io/badge/license-Apache-green`;
    } else {
      return `https://img.shields.io/badge/license-${data.license}-green`;
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function addLink(data) {
    if (data.license === "Apache License 2.0") {
        return "https://www.apache.org/licenses/LICENSE-2.0.txt";
    } else if (data.license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (data.license === "GNU GPLv3"){
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (data.license === "GNU GPLv2"){
        return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    } else if (data.license === "ISC") {
        return "https://opensource.org/licenses/ISC";
    } else {
        return ""
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function licenseText(data) {
      return `License: 
  This application is licensed under ${data.license}. For more information visit (${addLink(data)}).`
  }
  
  function markdown(data) {
    return `${addBadge(data)}`;
  }
  
  module.exports = { licenseText, markdown };