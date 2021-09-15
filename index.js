let mentors = [{
    name: 'Juliano',
    class: 'Mentor',
    day: 3,
    hour: 2,
},
{
    name: 'Joaquim',
    class: 'Mentor',
    day: 1,
    hour: 2,
},
{
    name: 'Alex',
    class: 'Mentor',
    day: 2,
    hour: 2,
},
{
    name: 'Alex',
    class: 'Mentor',
    day: 1,
    hour: 1,
},
{
    name: 'Alex',
    class: 'Mentor',
    day: 2,
    hour: 1,
}];

let leads = [{
    name: 'Alex',
    class: 'Lead',
    day: 'Ter',
    hour: 'Manhã',
}];

mentors.sort(function (x, y){
    return x.day - y.day;
});



console.log(mentors);


// function pairs(){
//     for(let i=0; i < mentors.length; i++){
//         console.log(mentors[i].slot);
//     }
// }

// pairs()