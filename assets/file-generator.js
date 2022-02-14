const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README-Folder/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });

        console.log(`
        
        Your README.md has been added to the README-Folder.
        
        `)
    });
};

module.exports = newFile => {
    return writeFile(newFile);
}