// Longest Increasing Sequence

const main = (input) => {
    let LIS = new Array(input.length).fill(1);
    
    for (let i = 1; i < input.length; i++) {
        //debug: LIS[nextMarker][1] += '||'; //mark next iteration
        for (let j = 0; j < i; j++) {
            

            if (input[i] > input[j] ) {
                //increment or set sequence counter (score) for current marker
                // LIS[curMarker][0]++; 
                console.log(i, j, "||", input[i], ">" , input[j], " = true", `LIS[${i}] = MAX(${LIS[i]}, ${LIS[j] +1})`);
                LIS[i] = Math.max(  LIS[i], LIS[j] +1 ) ;
                //debug: LIS[nextMarker][1] = LIS[nextMarker][1] + '->' + cur;
                //debug: console.log('adding score for', cur,'<', nex);
                
            } else {
                console.log(i, j, "||", input[i], ">" , input[j]);
            }
        }
        console.log("==========");
        
    }
    console.log( Math.max(...LIS.map( item => item[0] ) ));
}
const input = [9, 5, 6, 1, 2, 10, 3, 4, 8, 11, 7, 1, 29, 30, 1];
main(input);

// LIS should be [ 1, 2, 3, 4, 8, 11, 29, 30]