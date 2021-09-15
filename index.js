let mentors = [{
    name: 'Juliano',
    class: 'Mentor',
    slot: 2,
},
{
    name: 'Joaquim',
    class: 'Mentor',
    slot: 3,
},
{
    name: 'Giovani',
    class: 'Mentor',
    slot: 2,
},
{
    name: 'Daniel',
    class: 'Mentor',
    slot: 1,
},
{
    name: 'Alex',
    class: 'Mentor',
    slot: 1,
}];



let leads = [{
    name: 'Geralda',
    class: 'Lead',
    slot: 2,
},
{
    name: 'Fabio',
    class: 'Lead',
    slot: 1,
},
{
    name: 'Sabrina',
    class: 'Lead',
    slot: 3,
},
{
    name: 'Julia',
    class: 'Lead',
    slot: 2,
},
{
    name: 'Jaqueline',
    class: 'Lead',
    slot: 3,
},];

mentors.sort(function (x, y){
    return x.slot - y.slot;
});

leads.sort(function (x, y){
    return x.slot - y.slot;
});

console.log(mentors);
console.log(leads);


function pairs(){
    let dobles = [];
    for (let i = 0; i < mentors.length; i++){
        console.log(mentors[i].slot);
        console.log(leads[i].slot);
        if (mentors[i].slot == leads[i].slot){
            let pair = `Dupla: ${mentors[i].name} e ${leads[i].name}`
            dobles = pair;
            console.log(dobles)
        }
    }
    return dobles
}

pairs();


// function pairs(){
//     for(let i=0; i < mentors.length; i++){
//         console.log(mentors[i].slot);
//     }
// }

// pairs()