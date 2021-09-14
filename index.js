var mentors = [{
    name: 'José',
    class: 'Mentor or Lead',
    slot: ['Seg', 9],
}];

var leads = [{
    name: 'José',
    class: 'Mentor or Lead',
    slot: ['Seg', 9],
}];

function pairs(){
    for(let i=0; i < mentors.length; i++){
        console.log(mentors[i].slot);
    }
}

pairs()