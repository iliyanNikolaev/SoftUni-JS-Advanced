function sortArr(array, order){

    switch(order){
        case 'asc': 
            array.sort((a, b) => a-b);
            break;
        default: 
            array.sort((a,b) => b-a);
    }

    return array;
}

sortArr([14, 7, 17, 6, 8], 'desc');