import { useState } from 'preact/hooks';

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <div class="mb-4">
            <span class="text-yellow-400 text-xl mr-4">{counter}</span>
            <button class="border text-white px-4 py-2 text-xl" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border text-white px-4 py-2 text-xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
        </div>
        </>
    )
}