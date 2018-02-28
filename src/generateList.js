#!/usr/bin/env node

const fs = require('fs');

let total = 0;

let iconShowString = `
//
// Auto generated thru generateList
//

import React from 'react';
import IconButton from 'material-ui/IconButton';

`;
let iconList = [];

let files = fs.readdirSync('../node_modules/material-ui-icons');
files.forEach(function (iconFile) {
    var info = fs.statSync('../node_modules/material-ui-icons' + "/" + iconFile)
    if (info.isFile() && iconFile.endsWith('.js') && !iconFile.startsWith('index')) {
        total++;
        console.log(iconFile);
        iconList.push(iconFile.split('.')[0]);
        iconShowString += 'import '+iconFile.split('.')[0]+' from \'material-ui-icons/'+iconFile.split('.')[0]+'\'\n';
    }
})

iconShowString += `
class IconShow extends React.Component {

    render() {
        return <div>\n
        `
iconList.forEach((item)=>{
    iconShowString += `  <IconButton onClick={()=>{this.props.onSelect('${item}')}} color="inherit"> <${item} /></IconButton>  \n`
})

iconShowString += 
        `
        </div>
    }
}

export {IconShow}
`

fs.writeFileSync('./iconShow.js', iconShowString);

console.log(`Done! Totally ${total} Icons`);

