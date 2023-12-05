let grades = [100,50,60,80,70];

grades = grades.sort(decendingSort);

grades.forEach(print);

function decendingSort(x,y){
    return y - x;
}

function print (element){
    console.log(element);

}