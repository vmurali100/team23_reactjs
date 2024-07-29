import { useState } from "react"


const Combine = (Originals) => {

    const Newcomponent = () => {
        const [count, setcount] = useState(0);
        const incrementval = () => {
            setcount(count + 1);
        }
        const decrementval = () => {
            setcount(count - 1);
        }

        return (
            <Originals
                incrementval={incrementval}
                decrementval={decrementval}
                count={count}
            />



        )
    };
    return Newcomponent;
};
export default Combine;
