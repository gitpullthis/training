"use strict";
const main = (nums, sumto) => {
    try {
        const toIndex = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = sumto - num;
            const complementIndex = toIndex.get(complement);
            if (complementIndex) {
                return [complementIndex, i];
            }
            toIndex.set(num, i);
        }
        throw new Error('No matching number found');
    }
    catch (e) {
        console.log(e);
        return e;
    }
};
const nums = [1, 4, 2, 5, 6, 7];
const aaa = main(nums, 7);
console.log(aaa);
//# sourceMappingURL=twosum.js.map