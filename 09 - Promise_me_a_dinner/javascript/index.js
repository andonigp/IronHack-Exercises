// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction('mashedPotatoes', 1, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatos ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error))
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error));




// Iteration 2 - using promises
obtainInstruction('steak', 0).then((step0) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    }, 1000);
  }).then(obtainInstruction('steak', 1).then((step1) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    }, 2000);
  })).then(obtainInstruction('steak', 2).then((step2) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    }, 3000);
  })).then(obtainInstruction('steak', 3).then((step3) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    }, 4000);
  })).then(obtainInstruction('steak', 4).then((step4) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    }, 5000);
  })).then(obtainInstruction('steak', 5).then((step5) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    }, 6000);
  })).then(obtainInstruction('steak', 6).then((step6) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    }, 7000);
  })).then(obtainInstruction('steak', 7).then((step7) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 8000);
  }))




// Iteration 3 using async/await
async function doBroccoli() {
  await obtainInstruction('broccoli', 0).then((step0) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`},1000)});
  await obtainInstruction('broccoli', 1).then((step1) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`},2000)});
  await obtainInstruction('broccoli', 2).then((step2) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`},3000)});
  await obtainInstruction('broccoli', 3).then((step3) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`},4000)});
  await obtainInstruction('broccoli', 4).then((step4) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`},5000)});
  await obtainInstruction('broccoli', 5).then((step5) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`},6000)});
  await obtainInstruction('broccoli', 6).then((step6) => {setTimeout(() => {document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`},7000)});
  await obtainInstruction('broccoli', 0).then(() => {setTimeout(() => {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli us ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  },8000)});
}

doBroccoli()




// Bonus 2 - Promise all
const step1 = obtainInstruction('brusselsSprouts', 0)
const step2 = obtainInstruction('brusselsSprouts', 1)
const step3 = obtainInstruction('brusselsSprouts', 2)
const step4 = obtainInstruction('brusselsSprouts', 3)
const step5 = obtainInstruction('brusselsSprouts', 4)
const step6 = obtainInstruction('brusselsSprouts', 5)
const step7 = obtainInstruction('brusselsSprouts', 6)
const step8 = obtainInstruction('brusselsSprouts', 7)
const step9 = document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
const step10 = document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

let timeInterval = 1000
Promise.all([step1, step2, step3, step4, step5, step6, step7, step8, step9]).then((step) => {
  step.forEach((stp) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stp}</li>`
  })
  step10
})

