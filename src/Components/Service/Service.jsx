import { TbTruckDelivery } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Service = () => {
    return (
        <div className='md:bg-[#d6d5d5]'>
            <div className='grid container mx-auto grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 py-5 px-3 md:py-10 md:justify-items-center'>
                <div className='flex gap-3'>
                    <div className='text-3xl mt-1'>
                        <TbTruckDelivery></TbTruckDelivery>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Free Delivery</h2>
                        <p>Free product delivery after $500 <br /> and get discount over the produce.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='text-3xl mt-1'>
                        <GiReturnArrow></GiReturnArrow>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">7 Days Return</h2>
                        <p>Product can be returned by following <br /> return policy with terms and condition.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='text-3xl mt-1'>
                        <RiSecurePaymentLine></RiSecurePaymentLine>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Payment Secure</h2>
                        <p>Payment will be secure and your card <br /> information will not disclosed.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='text-3xl mt-1'>
                        <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Original Product</h2>
                        <p>You will get original and authentic <br /> products by insureing product quality.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;