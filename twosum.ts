const main = (nums: number[], sumto: number): number[] | Error => {
    try {
        const toIndex = new Map<number, number>();

        for ( let i = 0; i < nums.length; i++ ){ 
            const num = nums[i];
            const complement = sumto - num;
            const complementIndex = toIndex.get(complement);

            if (complementIndex) {
                return [<number>complementIndex, i];
            }

            toIndex.set(num, i);
        }
        
        throw new Error('No matching number found')

    } catch (e) {
        console.log(e);
        return <Error>e;
        
    }
    
}

const nums: number[]= [1,4,2,5,6,7];
const aaa = main(nums, 7);
console.log(aaa);

