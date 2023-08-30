import { toast } from 'react-toastify';
import roadmap from '../../assets/DOREMON ROADMAP.png'
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
const Tokenomics = () => {

    const [number] = useState('0x5804cD098194Ba02F2F7352C404818F6B0E2a913');

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
        <div className='bg-[#1F3664]'>
            <h1 className="text-white text-center text-[40px] font-extrabold">Tokenomics</h1>
            <div className='flex justify-center' onClick={handleCopyClick}>
                <p className='lg:text-xl font-semibold text-white mb-2 hover:text-[#CD6501] cursor-pointer text-xs'>{number}</p>
                <FaCopy className='text-[#CD6501] cursor-pointer' />
            </div>
            <div className='flex justify-center items-center'>
                <img src={roadmap} alt='roadmap' />
            </div>
        </div>
    );
};

export default Tokenomics;