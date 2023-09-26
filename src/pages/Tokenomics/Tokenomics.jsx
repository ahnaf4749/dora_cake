import { toast } from 'react-toastify';
import roadmap from '../../assets/DOREMON ROADMAP.png'
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
const Tokenomics = () => {

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

    return (
        <div className='bg-[#1F3664]' id='token'>
            <h1 className="text-white text-center text-[40px] font-extrabold">Tokenomics</h1>
            <div className='flex justify-center' onClick={handleCopyClick}>
                <p className='lg:text-xl font-semibold text-white mb-2 hover:text-[#CD6501] cursor-pointer text-xs'>{number}</p>
                <FaCopy className='text-[#CD6501] cursor-pointer' />
            </div>
            <h1 className="text-white text-center text-base font-normal lg:text-[30px] lg:font-semibold">Total Supply 1 Billion</h1>
            <div className='flex justify-center items-center'>
                <img src={roadmap} alt='roadmap' />
            </div>
        </div>
    );
};

export default Tokenomics;