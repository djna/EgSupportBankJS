

"use strict";

import lineReader from 'line-reader';

const filename = 'sample.txt';

let emailAddresses = {};

lineReader.eachLine(filename, function (line, last) {
    let emailRegex = /(\w+)@(softwire.com)\b/g;
    let match;
    while (match = emailRegex.exec(line)) {
        let oneAddress = match[2];
        let count = emailAddresses[oneAddress] || 0;
        emailAddresses[oneAddress] = ++count;
    }

    if (last) {
        console.log(emailAddresses);
        const sortedEmails = Object.entries(emailAddresses)
            .sort(([, countLeft], [, countRight]) => countLeft - countRight);
        //  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        console.log(sortedEmails);
    }
});



