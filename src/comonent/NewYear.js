// import Confetti from 'react-confetti'
// import React, { useState } from 'react'
// import './NewYear.css'
// // import music from '../audio/jingle bell.mp3'
// import ReactAudioPlayer from 'react-audio-player'
// import Typical from 'react-typical'

// const Birthday = () => {
//     const [hidden, setHidden] = useState(false);
//     const [change, setChange] = useState('');

//     return (
//         <div className="app">
//             <div className="left"></div>
//             <div className="center">
//                 {
//                     hidden ? (
//                         <ReactAudioPlayer
//                             className="confetti-hidden"
//                             // src={music}
//                             autoPlay
//                             controls
//                         />
//                     ) : null
//                 }

//                 {hidden ? <h1 className="logo">{change} Tug'ilgan Kunin Muborak !</h1> : <h2 className="logo">Salom 😁</h2>}
//                 <br />
//                 <hr />
//                 <br />
//                 <div className="div">
//                     {hidden ? (
//                         <div className="left2">
//                             😍
//                         </div>
//                     ) : null}
//                     {
//                         change === "Siroj" ? (
//                             <div className="center2">
//                                 <h1>2022</h1>
//                             </div>
//                         ) : (
//                             <div className="center2">
//                                 <h1>2021</h1>
//                             </div>
//                         )
//                     }

//                     {hidden ? (
//                         <div className="right2">
//                             😍
//                         </div>
//                     ) : null}
//                 </div>
//                 <br />
//                 <hr />
//                 {hidden ? (
//                     <span className="text">
//                         Allohim shu kunga yetkazganinga va ko`rsatganinga shukur o`zimmi baxtimga o`zim sog` boliii !!! 😜😜😜
//                     </span>
//                 ) : (
//                     <div>
//                         <span className="text">Tugmani bosishdan oldin ismingizni kiriting!!!</span>
//                         <br />
//                         <div className="input1">
//                             <input
//                                 className="input"
//                                 onChange={(e) => setChange(e.target.value)}
//                                 type="text"
//                                 placeholder="Iltimos ismingizni kiriting !!!"
//                             />
//                         </div>
//                         <span
//                             className={change === "" ? "error" : "typing"}
//                         >
//                             {change === "" ? (
//                                 <>
//                                     <Typical
//                                         className="typical"
//                                         loop={Infinity}
//                                         wrapper="p"
//                                         steps={['To`ldirilishi shart !!!', 2000,
//                                             'To`ldirish qiyinmasu 😕😕', 2000,
//                                             'To`ldiree oneniii 😡😡', 3000,
//                                         ]}
//                                     //steps={['To`ldirilishi shart !!!', 2000, 'Itaraman bo`masa', 2000, 'Huyyet qimasdan to`ldir ko`t 😡😡😡', 3000,]}
//                                     />
//                                 </>
//                             ) : (
//                                 "To`ldirilmoqda ..."
//                             )}
//                         </span>
//                     </div>
//                 )}
//                 <br />
//                 <br />
//                 <div className="button">
//                     {change !== "Siroj" && change !== "Sabina" ? (
//                         <button className="btn1" disabled>
//                             Disabled
//                         </button>

//                     ) : (
//                         <button
//                             className="btn"
//                             onClick={() => change && hidden === true ? setHidden(false) : setHidden(true)}
//                         >
//                             <Confetti
//                                 className={hidden ? "confetti" : "confetti-hidden"}
//                                 width={1300}
//                                 height={620}
//                                 gravity={hidden !== true ? -1 : 0.1}
//                             />
//                             {!hidden ? "New Year" : "Exit"}
//                         </button>)}
//                 </div>
//             </div>

//             <div className="right"></div>
//         </div>
//     )
// }

// export default Birthday