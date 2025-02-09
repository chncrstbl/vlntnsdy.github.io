document.getElementById('frst-prt-bttn').addEventListener('click', function() {
    if (confirm('Ready?')) {
        alert('Let\'s go!');

        let str = "Happy Valentine's Day!";
        document.getElementById('portrait').innerHTML = str.repeat(1000);

        let interval = 500;
        let heartCount = 1;
        setInterval(() => {
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = '100%';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.fontSize = '2rem';
            heart.style.opacity = '1';
            heart.style.transition = 'top 5s ease-out, opacity 5s ease-out'; // Slow down the heart
            document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = '0%';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 5050); // Heart will disappear after 5.05 seconds
}

        interval = Math.max(50, interval - 100); // Decrease interval quicker, but not less than 50ms
        heartCount++; // Increase the number of hearts created each interval
        }, interval); // Create a new heart every interval milliseconds
    } else {
        while (!confirm('Are you sure?')) {}
        alert('Alright, let\'s proceed!');
    }


    const element = document.querySelector('.frst-prt');
    element.remove('h1', 'button');
});
// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.frst-prt');
//     if (container) {
//         const button = container.querySelector('button');
//         if (button) {
//             button.addEventListener('click', function() {
//                 let interval = 500;
//                 let heartCount = 1;
//                 setInterval(() => {
//                     for (let i = 0; i < heartCount; i++) {
//                         const heart = document.createElement('div');
//                         heart.innerHTML = '❤️';
//                         heart.style.position = 'absolute';
//                         heart.style.left = `${Math.random() * 100}%`;
//                         heart.style.top = '100%';
//                         heart.style.transform = 'translate(-50%, -50%)';
//                         heart.style.fontSize = '2rem';
//                         heart.style.opacity = '1';
//                         heart.style.transition = 'top 5s ease-out, opacity 5s ease-out'; // Slow down the heart
//                         document.body.appendChild(heart);

//                         setTimeout(() => {
//                             heart.style.top = '0%';
//                             heart.style.opacity = '0';
//                         }, 50);

//                         setTimeout(() => {
//                             heart.remove();
//                         }, 5050); // Heart will disappear after 5.05 seconds
//                     }

//                     interval = Math.max(50, interval - 100); // Decrease interval quicker, but not less than 50ms
//                     heartCount++; // Increase the number of hearts created each interval
//                 }, interval); // Create a new heart every interval milliseconds
//             });
//         }
//     }
// });

// let s = [];
// for (i = 0; i < heartPointsCount; i++) {
//     let x = rand() = width;
//     let y = rand() = height;

//     s[i] = {
//         vx: 0,
//         vy: 0,
//         R:2,
//         speed: rand() + 5,
//         q: ~~(rand() * heartPointsCount),
//         D: 2 * (i % 2) - 1,
//         force: 0.2 * rand() + 0.7,
//         f: "hsla(0," + ~~(rand() + 60) + "%," + ~~(60 * rand() + 20) + "%,.3)",
//         trace: []
//     };
//     for (let k = 0; k < traceCount; k++) s[i].trace[k] = {x: x, y: y};
// }
// let config = {
//     traceK: 0.4,
//     timeDelay: 0.01
// };