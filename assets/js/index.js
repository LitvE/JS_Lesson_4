//Function Expressions
/*
let myAdd = function(x1, x2){
    return x1 + x2;
};

let res = myAdd(2, 2);

console.log(res);
*/

//arrow functions
/*
let myAdd3 = (x1, x2) => x1 + x2;

console.log(myAdd3(2, 2));

let myAdd4 = (x1, x2) => {
    let result;
    result = x1 + x2;
    return result;
}

console.log(myAdd4(2, 2));
*/

//Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)

/*
//Вариант 1
let minute = Number(prompt('Введити минуты:'));

let res = (x) =>{

    if(x >= 1 && x <= 15){
        console.log('1-я четверть');
    } else if(x > 15 && x <= 30){
        console.log('2-я четверть');
    } else if(x > 30 && x <= 45){
        console.log('3-я четверть');
    } else {
        console.log('4-я четверть');
    }
}

res(minute);
*/

/*
//Вариант 2
let minute = Number(prompt('Введити минуты:'));

let res = (x) =>{
    let num = Math.ceil(x/15);
    switch(num){
        case 1: console.log('1-я четверть');
        break;
        case 2: console.log('2-я четверть');
        break;
        case 3: console.log('3-я четверть');
        break;
        case 4: console.log('4-я четверть');
        break;
        default: console.log('error');
        break;
    }
}

res(minute);
*/

//Найти произведение чисел в пределах от limit1 до limit2

let limit1 = Number(prompt('Введити limit1:'));
let limit2 = Number(prompt('Введити limit2:'));

let res2 = (limit1, limit2) => {
    let i, sum = 1;
    // let index = x1;
    // while(x1 <= x2){
    //     sum *= x1;
    //     x1++;
    // }

    for(i = limit1; i <= limit2; i++){
        sum *= i;
    }

    return sum;
}

res2(limit1, limit2);