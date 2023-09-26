import { FaTelegram } from 'react-icons/fa';
const Footer = () => {

    return (
        <div>
            <footer className="bg-[#1F3664]">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">


                    <p className="mt-6  text-center leading-relaxed text-white">
                        None of the information on this website should be construed as providing legal or financial advice. Please note there are always risks associated with smart contracts. Please use at your own risk. DORA_CAKE Token is not a registered broker, analyst or investment advisor. If you are willing to, or have purchased DORA_CAKE, you agree that you are not purchasing a security or investment. The DORA_CAKE team can not be held liable for any losses or taxes you may incur. You also agree that the team is presenting the token as it was launched. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
                    </p>


                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <a
                                href="https://t.me/doracake100X"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-[#CD6501]"
                            >
                                <span className="sr-only">Facebook</span>
                                <FaTelegram className='h-6 w-5' />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://twitter.com/DORACAKE283512"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-[#CD6501]"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer >
        </div >
    );
};

export default Footer;