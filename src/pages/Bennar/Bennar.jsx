
// import { useEffect } from 'react';
import doremon from '../../assets/output-onlinegiftools.gif'
import { FaTelegram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaCopy } from 'react-icons/fa';
import star from '../../assets/star-svgrepo-com.svg'
import coingeko from '../../assets/COINGECKO (1).png'
import coinMarket from '../../assets/COIN-MARKET.png'
import { useState } from 'react';
import { toast } from 'react-toastify';


const Bennar = () => {
    const [number] = useState('0x0B052A4920E9d5D714FE80Ec703572D8fD82Fa70');

    const handleCopyClick = () => {
        const textField = document.createElement('textarea');
        textField.innerText = number;
        toast.success('copy succesfull');
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    const allstar = [
        {
            id: 1,
            image: star
        },
        {
            id: 2,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        },
        {
            id: 3,
            image: star
        }
    ]


    return (
        <div>
            <section className="bg-[#75B1D1]" id='chart'>
                <div
                    className="mx-auto max-w-screen-xl"
                >
                    <div className='hidden lg:block'>
                        <div className='flex '>
                            {
                                allstar.map(item =>
                                    // eslint-disable-next-line react/jsx-key
                                    < img
                                        className=''
                                        src={item?.image} />
                                )
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className=" h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full "
                        >
                            <img
                                alt="Party"
                                src={doremon}
                                className=" inset-0 h-full w-full "
                            />
                        </div>

                        <div className="lg:py-24 text-center lg:text-left">
                            <h2 className="text-4xl leading-[76px] font-black lg:text-[69px] text-white">Chairman Of The</h2>
                            <h2 className="text-4xl leading-[76px] font-black lg:text-[69px] text-[#CD6501]">Meme Reserve</h2>

                            <p className="mt-4 text-white text-[22px] font-semibold mb-4">
                                Come & Print With <span className='text-[#CD6501]'> $Dora</span>
                            </p>

                            <a
                                href='https://www.pinksale.finance/launchpad/0x237c3a217B08971de59D24399ED9Dd9E2F3f7F04?chain=BSC' target='_blank'
                                rel='noreferrer'
                                className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mb-4"



                            >
                                <span
                                    className="block rounded-full bg-white text-lg font-semibold hover:bg-transparent py-4 px-10"
                                >
                                    Pinksale Presale
                                </span>
                            </a>
                            <div className='flex justify-center lg:justify-normal' onClick={handleCopyClick}>
                                <p className='lg:text-xl font-semibold text-white mb-2 hover:text-[#CD6501] cursor-pointer text-xs'>{number}</p>
                                <FaCopy className='text-[#CD6501] cursor-pointer' />
                            </div>
                            <div className='flex gap-x-9 mt-1 justify-center lg:justify-normal'>
                                <a href='https://t.me/doracake100X' target='_blank' rel="noreferrer">
                                    <div className='flex justify-center items-center text-white text-[22px] font-semibold gap-x-1 cursor-pointer hover:text-[#CD6501]'>
                                        <FaTelegram />
                                        <p>Telegram</p>
                                    </div>
                                </a>
                                <a href='https://twitter.com/DORACAKE283512' target='_blank' rel='noreferrer'>
                                    <div className='flex justify-center items-center text-white text-[22px] font-semibold gap-x-1 cursor-pointer hover:text-[#CD6501]'>
                                        <FiTwitter />
                                        <p>Twiter</p>
                                    </div>
                                </a>
                            </div>
                            <div className='flex mt-5 justify-center lg:justify-normal'>
                                <img className='w-[160px] h-12' src={coinMarket} alt='' />
                                <img className='w-[160px] h-12' src={coingeko} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex -mt-12 '>
                            {
                                allstar.map(item =>
                                    // eslint-disable-next-line react/jsx-key
                                    < img
                                        className=''
                                        src={item?.image} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Bennar;