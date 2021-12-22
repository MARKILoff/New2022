import React, { useState } from 'react'
import './NewYear.css'
import music from '../audio/55.mp3'
import ReactAudioPlayer from 'react-audio-player'
import Typical from 'react-typical'
import Snowfall from 'react-snowfall'

const NewYear2 = () => {
    const [hidden, setHidden] = useState(false);
    const [change, setChange] = useState('');

    return (
        <div className=' bg-black h-screen'>
            <div className='grid grid-cols-1'>
                <div className='flex justify-center'>
                    {
                        hidden ? (
                            <ReactAudioPlayer
                                className="snowfall-hidden"
                                src={music}
                                autoPlay
                                controls
                            />
                        ) : null
                    }
                    {hidden ?
                        <div className="text-blue-500 text-4xl text-center">
                            <span className='text-red-500 my-10'>{change}</span><br />
                            Yengi 2022 Yiling Muborak !
                        </div> :
                        <div className="text-blue-500 text-3xl ">
                            New Year 😁
                        </div>
                    }
                </div>
                <br />
                <div className='col-span-1 text-center'>
                    <br />
                    {
                        hidden ? (
                            <div className="text-blue-300 text-5xl">
                                <h1>😍2022🥳</h1>
                            </div>
                        ) : (
                            <div className="text-blue-300 text-5xl">
                                <h1>😍2021🥳</h1>
                            </div>
                        )
                    }
                    <br />
                    {hidden ? (
                        <span className="text-white text-2xl">
                            Allohim shu kunga yetkazganinga va ko`rsatganinga shukur o`zimmi baxtimga o`zim sog` boliii !!! 😜😜😜
                        </span>

                    ) : (
                        <div>
                            <span className="text-white text-lg">
                                Tugmani bosishdan oldin ismingizni kiriting!!!
                            </span>
                            <br />
                            <br />
                            <div className="input1">
                                <input
                                    className="h-14 rounded-2xl px-5 border border-green-500 outline-none bg-black text-white"
                                    onChange={(e) => setChange(e.target.value)}
                                    type="text"
                                    placeholder="Iltimos ismingizni kiriting !!!"
                                />
                            </div>
                            <br />
                            <span
                                className={change === "" ? "error" : "typing"}
                            >
                                {change === "" ? (
                                    <>
                                        <Typical
                                            className="text-red-500 d-flex text-xl"
                                            loop={Infinity}
                                            wrapper="p"
                                            steps={['To`ldirilishi shart !!!', 2000,
                                                'To`ldirish qiyinmasu 😕😕', 2000,
                                                'To`ldiree oneniii 😡😡', 3000,
                                            ]}
                                        //steps={['To`ldirilishi shart !!!', 2000, 'Itaraman bo`masa', 2000, 'Huyyet qimasdan to`ldir ko`t 😡😡😡', 3000,]}
                                        />
                                    </>
                                ) : (
                                    <div className='text-green-500 text-2xl'>
                                        <h1>To`ldirilmoqda ...</h1>
                                    </div>
                                )}
                            </span>
                        </div>
                    )}
                    <div>
                        <br />
                        {change !== "Sirojiddin" && change !== "Sabina" && change !== "Azamat" && change !== "Asadbek" && change !== "Sardor" && change !== "Nasiba" && change !== "Marhamat" && change !== "Marxamat" && change !== "Muxiddin" && change !== "Komoliddin" && change !== "Nargiza" && change !== "Xakimjon" && change !== "Otabek" && change !== "Salohiddin" && change !== "Dilnoza" && change !== "Afruza" && change !== "Axmaral" && change !== "Ahmaral" ? (
                            <button className="bg-gray-500 h-14 w-32 rounded-xl text-xl " disabled>
                                Disabled
                            </button>
                        ) : (
                            <button
                                className='bg-gray-500 h-14 w-32 rounded-xl text-xl'
                                onClick={() => change && hidden === true ? setHidden(false) : setHidden(true)}
                            >
                                {hidden ? (
                                    <Snowfall
                                        className={hidden ? "confetti" : "confetti-hidden"}
                                        width={1300}
                                        height={620}
                                        gravity={hidden !== true ? 10 : 20}
                                    />
                                ) : null}
                                {!hidden ? "New Year" : "Exit"}
                            </button>)}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {hidden ? (
                <div className='text-red-500'>99 790 64 22<span className='text-white'>Ismingizni Shu nomerga yozib yuboring</span></div>
            ) : null}
        </div>
    )
}

export default NewYear2
