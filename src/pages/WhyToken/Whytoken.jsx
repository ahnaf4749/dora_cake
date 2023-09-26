/* eslint-disable react/jsx-key */
import diamond from '../../assets/diamond-4.png'
import tala from '../../assets/tala-5.png'
import love from '../../assets/love-7.png'
import supreme from '../../assets/supreme-6.png'
const Whytoken = () => {

    const allData = [
        {
            id: 1,
            image: diamond,
            descreption: "$DORA token is completely unique. This is the first token of its kind. There can be only one true $DORA!"
        },
        {
            id: 2,
            image: tala,
            descreption: "$DORA is safe & passes all Pinksale requirements, meaning liquidity will be automatically locked at launch."
        },
        {
            id: 3,
            image: love,
            descreption: "$DORA Has 0% tax, giving holders the ability to freely trade & engage in the community without any restrictions."
        },
        {
            id: 4,
            image: supreme,
            descreption: "$DORA understands the importance of partnerships and has access to a large marketing budget."
        },

    ]

    return (
        <div className="bg-[#75B1D1]">
            <div className="mx-auto max-w-screen-xl">
                <div>
                    <div >
                        <h1 className="text-white text-center text-[40px] font-extrabold pt-10">Why <span className="text-[#CD6501]">$DORA</span> Token?</h1>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-3'>
                        {allData.map(data =>

                            <div className="card w-96 ">
                                <figure className="px-10 pt-10">
                                    <img src={data.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center text-white text-xl">
                                    <p>{data.descreption}</p>
                                    <div className="card-actions">
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whytoken;