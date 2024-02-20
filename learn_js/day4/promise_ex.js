/**
 * All Function
 */
/*
 *   const f1Promise = new Promise((resolve, reject)=>{
 *
 *       setTimeout(()=>{
 *           if(Math.random() > 0.5){
 *               resolve("Friend 1: I'm going for goa")
 *          }else{
 *             reject("Friend 1: permission nhi milli...")
 *        }
 *     }, 2000)
 *  })
 *   const f2Promise = new Promise((resolve, reject)=>{
 *
 *       setTimeout(()=>{
 *           if(Math.random() > 0.5){
 *               resolve("Friend 2:I'm going for goa")
 *           }else{
 *               reject("Friend 2: Fever h mujhe...")
 *           }
 *        }, 2000)
 *    })
 *    const f3Promise = new Promise((resolve, reject)=>{
 *    
 *        setTimeout(()=>{
 *            if(Math.random() > 0.5){
 *                resolve("Friend 3: I'm going for goa")
 *            }else{
 *                reject("Friend 3: Paise nhi h...")
 *            }
 *        }, 2000)
 *    })
 *
 *    Promise.all([f1Promise, f2Promise, f3Promise]).then((value)=>{
 *        console.log(value)
 *        console.log("Yay!, We are going to Goa")
 *    }).catch((value)=>{
 *        console.log(value)
 *        console.log("Agle saal chlenge")
 *    })
*/

// Any Function

const gf1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("Crush 1: Yes")
        }else{
            reject("Crush 1: I have a boyfriend...")
        }
    }, 5000)
})
const gf2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("Crush 2: Yes")
        }else{
            reject("Crush 2: I have a trust issues...")
        }
    }, 5000)
})
const gf3 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("Crush 3: Yes")
        }else{
            reject("Crush 3: I'm focused on my studies...")
        }
    }, 5000)
})

Promise.any([gf1, gf2, gf3]).then((value)=>{
    console.log(value)
    console.log("Bale Bale!!!")
}).catch((value)=>{
    console.log(value)
    console.log("Let's be a part of Bajrang Dal...")
})