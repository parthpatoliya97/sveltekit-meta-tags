import fs from 'fs';

export async function load({ params }) {
      
        const data = JSON.parse(fs.readFileSync(`content/${params.name}.json`, 'utf-8'));

        let otherproduct;
        if (params.name === "jupitermeet") {
            otherproduct = JSON.parse(fs.readFileSync('content/jupitermeet-pro.json', 'utf-8'));
        } else {
            otherproduct = JSON.parse(fs.readFileSync('content/jupitermeet.json', 'utf-8'));
        }
        return {
            data,
            otherproduct
        }
}

