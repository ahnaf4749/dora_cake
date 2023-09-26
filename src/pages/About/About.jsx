/* eslint-disable react/no-unescaped-entities */
import moneyImage from '../../assets/POWELLglasses.png'

const About = () => {
    return (
        <div className="bg-[#75B1D1]" id='about'>
            <section className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">


                        <div className="lg:py-16">
                            <h2 className="text-[40px] text-white font-extrabold hidden lg:block">About</h2>
                            <article className=" text-white text-[22px]">

                                <p>
                                    Dora Cake($Dora), Doraemon's favorite food also known as Dorayaki is fluffy golden sandwich pancake from Japan.
                                    Ever since Doraemon and Nobita's story has hit the TV channels, kids are crazy about this cartoon character and what more, they would want everything which has doraemon in it.

                                </p>
                            </article>
                        </div>
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Party"
                                src={moneyImage}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;