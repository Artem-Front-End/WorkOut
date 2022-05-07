const trainingBlock = document.querySelector('.trainingBlock');
const elementsBlock = document.querySelector('.elementsBlock');

const lessonsTrain = [
    {id:1, imgSrc: './images/lessons/mqdefault_6s.webp', title: '30-Minute No-Equipment Bodyweight Bootcamp Workout', link: 'https://www.youtube.com/watch?v=k_0MgIJdF6k'},
    {id:2, imgSrc: './images/lessons/mqdefault_6s2.webp', title: '20 MINUTE FULL BODY WORKOUT(NO EQUIPMENT)', link: 'https://www.youtube.com/watch?v=oAPCPjnU1wA'},
    {id:3, imgSrc: './images/lessons/mqdefault_6s 3.webp', title: '15 Minute Full Body Cardio Workout (No Equipment)', link: 'https://www.youtube.com/watch?v=IvmaekQfKiw'},
    {id:4, imgSrc: './images/lessons/mqdefault_6s 4.webp', title: '10 MINUTE MORNING WORKOUT (NO EQUIPMENT)', link: 'https://www.youtube.com/watch?v=3sEeVJEXTfY'},
    {id:5, imgSrc: './images/lessons/mqdefault_6s5webp.webp', title: 'NO GYM FULL BODY WORKOUT (feat. 5 min Tabata)', link: 'https://www.youtube.com/watch?v=Tz9d7By2ytQ'},
];

const elementsTrain = [
    {id:1, imgSrc: './images/lessons/mqdefault_6s6.webp', title: 'How To Full Planche | 10 Steps', link: 'https://www.youtube.com/watch?v=OmKfROtB45Q'},
    {id:2, imgSrc: './images/lessons/mqdefault_6s7.webp', title: 'How To Front Lever Step By Step', link: 'https://www.youtube.com/watch?v=5g8-sj-8snc'},
    {id:3, imgSrc: './images/lessons/mqdefault_6s8.webp', title: 'How To Back Lever - 5 Easy Steps', link: 'https://www.youtube.com/watch?v=FZZqbeZti84'},
    {id:4, imgSrc: './images/lessons/mqdefault_6s9.webp', title: 'How To HANDSTAND HOLD | 5 EASY Steps', link: 'https://www.youtube.com/watch?v=KNC5lkoE2Fs'},
    {id:5, imgSrc: './images/lessons/mqdefault_6s10.webp', title: 'Why You Can’t L-Sit Hold (How To Step By Step)', link: 'https://www.youtube.com/watch?v=Qv6j5gZyBQ8'},
];

lessonsTrain.forEach(lesson => {
    trainingBlock.innerHTML += `
     <div class="train" >
     <a href="${lesson.link}" >
        <img src="${lesson.imgSrc}" />
        <p>${lesson.title}</p>
     </a>   
</div>
    `
})

elementsTrain.forEach(lesson => {
    elementsBlock.innerHTML += `
    <div class="train" >
     <a href="${lesson.link}" >
        <img src="${lesson.imgSrc}" />
        <p>${lesson.title}</p>
     </a>   
</div>
    `
})