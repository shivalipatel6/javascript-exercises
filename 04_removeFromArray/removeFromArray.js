const removeFromArray = function(ary, ...args) {

const newary = [];

ary.forEach((item) => {
    if(!args.includes(item)){
        newary.push(item);
    }

})

return newary;
};

// Do not edit below this line
module.exports = removeFromArray;
