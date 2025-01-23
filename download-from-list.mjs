import fs from 'fs';
import path from 'path';
import https from 'https';

// Step 1: Read the downloads.json file
const downloadsFilePath = './downloads.json';
const downloads = JSON.parse(fs.readFileSync(downloadsFilePath, 'utf8'));

// Step 2: Create the raw_data/datasus directory if it doesn't exist
const downloadDir = path.join('raw_data', 'datasus');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

// Step 3: Function to download a file
const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest);
            reject(err.message);
        });
    });
};

// Step 4: Download each file from the URLs in the list
const downloadAllFiles = async () => {
    for (const url of downloads) {
        const fileName = path.basename(url);
        if(fs.existsSync(path.join(downloadDir, fileName))) 
            continue;
        const dest = path.join(downloadDir, fileName);
        try {
            await downloadFile(url, dest);
            console.log(`Downloaded: ${fileName}`);
        } catch (error) {
            console.error(`Error downloading ${fileName}: ${error}`);
        }
    }
};

downloadAllFiles();