const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.innerText = sound
    const box = document.querySelector('.box')
    box.appendChild(btn)
    btn.addEventListener('click', ()=> {
        stopSounds()
        document.getElementById(sound).play()
    } )
} )

function stopSounds() {
    sounds.forEach(sound=> {
        document.getElementById(sound).pause()
    })
}



// another way with create buttons in index file with ids
// const buttons = document.querySelectorAll("button")
// buttons.forEach(button => {
//     button.addEventListener('click', ()=> {
//         sounds.forEach(sound=> {
//             if(button.innerText == sound ){
//                 stopSounds()
//                 document.getElementById(sound).play()
//             }
//         })
//     })
// })

// function stopSounds() {
//     sounds.forEach(sound => {
//         document.getElementById(sound).pause()
//     })
// }