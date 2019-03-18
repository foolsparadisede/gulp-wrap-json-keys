const merge = require('deepmerge');

unwrap = (json) => {
    let res = [];

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            const element = json[key];
            const keys = key.split(".");

            let partialRes = element;

            if (typeof element === "object") {
                partialRes = unwrap(element);
            }

            for (let i = keys.length - 1; i >= 0; i--) {
                let r =  {};
                r[keys[i]] = partialRes;
                partialRes = r;
            }
            
            res.push(partialRes);
        }
    }

    return merge.all(res);
}

module.exports = unwrap;
