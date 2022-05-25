import useParts from '../../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts([])


    return (
        <div className='mx-12 my-20'>
            <h2 className='text-4xl text-center font-bold'>Our Featured Products</h2>
            <div className='grid grid-cols-1 sm:w-full md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    parts.slice(0, 6).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;