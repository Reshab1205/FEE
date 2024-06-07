import React, { useEffect, useMemo, useState } from 'react'

const Cricket = () => {

    const [vk, setVk] = useState(0);
    const [dh, SetDh] = useState(0);
    const [score, SetScore] = useState(0);

    useEffect(() => {
        SetScore(vk+dh)
    }, [vk,dh])

    return (
        <div className='App'>
            <div>Cricket</div>
            <div>
                <p>India Score: {score} </p>
            </div>
            <div>
                <p> Virat Score: {vk} </p>
                <button onClick={() => setVk(vk + 6)}>SIX</button>
                <button onClick={() => setVk(vk + 4)}>FOUR</button>
                <button onClick={() => setVk(vk + 3)}>THREE</button>
                <button onClick={() => setVk(vk + 2)}>TWO</button>
                <button onClick={() => setVk(vk + 1)}>ONE</button>

            </div>
            <br />
            <div>
                <p>Dhoni Score: {dh} </p>
                <button onClick={() => SetDh(dh + 6)}>SIX</button>
                <button onClick={() => SetDh(dh + 4)}>FOUR</button>
                <button onClick={() => SetDh(dh + 3)}>THREE</button>
                <button onClick={() => SetDh(dh + 2)}>TWO</button>
                <button onClick={() => SetDh(dh + 1)}>ONE</button>
            </div>

        </div>
    )
}

export default Cricket