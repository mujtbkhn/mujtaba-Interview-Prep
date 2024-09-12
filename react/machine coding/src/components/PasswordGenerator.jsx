import React, { useEffect, useState } from 'react'

const PasswordGenerator = () => {
    const [range, setRange] = useState(1)
    const [randomPassword, setRandomPassword] = useState(null)
    const [upperCase, setUpperCase] = useState(false)
    const [lowerCase, setLowerCase] = useState(false)
    const [numbered, setNumbered] = useState(false)
    const [special, setSpecial] = useState(false)
    const [defaultMethod, setDefaultMethod] = useState([])

    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const special_char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=']

    useEffect(() => {
        generateRandomPassword()
    }, [range, defaultMethod])

    let pool = [];

    // useEffect(() => {
    //     console.log("new pool :", pool)
    //     console.log("new pool length:", pool.length)
    // }, [pool])

    // useEffect(() => {
    //     console.log('defaultMethod:', defaultMethod);
    // }, [defaultMethod]);

    const generateRandomPassword = () => {
        if (defaultMethod.includes("upperCase")) {
            pool.push(...uppercase)
        }
        if (defaultMethod.includes("lowerCase")) {
            pool.push(...lowercase)
        }
        if (defaultMethod.includes("numbered")) {
            pool.push(...number)
        }
        if (defaultMethod.includes("special_char")) {
            pool.push(...special_char)
        }

        if (pool.length === 0) {
            setRandomPassword("")
            return
        }
        const result = []
        try {
            for (let i = 0; i < range; i++) {
                const randomIndex = Math.floor(Math.random() * pool.length);
                result.push(pool[randomIndex])
            }
            setRandomPassword(result)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLowerCaseClicked = () => {
        setLowerCase(prev => {
            const newState = !prev;
            setDefaultMethod(prevMethod =>
                newState ? [...prevMethod, "lowerCase"] : prevMethod.filter(item => item !== "lowerCase")
            );
            return newState;
        })
    }
    const handleUpperCaseClicked = () => {
        setUpperCase(prev => {
            const newState = !prev;
            setDefaultMethod(prevMethod =>
                newState ? [...prevMethod, "upperCase"] : prevMethod.filter(item => item !== "upperCase")
            );
            return newState;
        })
    }
    const handleNumberClicked = () => {
        setNumbered(prev => {
            const newState = !prev;
            setDefaultMethod(prevMethod =>
                newState ? [...prevMethod, "numbered"] : prevMethod.filter(item => item !== "numbered")
            );
            return newState;
        })
    }
    const handleSpecialClicked = () => {
        setSpecial(prev => {
            const newState = !prev;
            setDefaultMethod(prevMethod =>
                newState ? [...prevMethod, "special_char"] : prevMethod.filter(item => item !== "special_char")
            );
            return newState;
        })
    }

    return (
        <div>
            <p>{randomPassword}</p>
            {range}
            <input min={1} max={25} onChange={(e) => setRange(e.target.value)} value={range} type="range" name="" id="" />
            <input type="checkbox" name="upperCase" id="" checked={upperCase} onClick={handleUpperCaseClicked} /> UpperCase
            <input type="checkbox" name="lowerCase" id="" checked={lowerCase} onClick={handleLowerCaseClicked} /> LowerCase
            <input type="checkbox" name="numbered" id="" checked={numbered} onClick={handleNumberClicked} /> Numbered
            <input type="checkbox" name="special_char" id="" checked={special} onClick={handleSpecialClicked} /> Special Char
        </div>
    )
}

export default PasswordGenerator

/**
 * import React, { useEffect, useState } from 'react'

const PasswordGenerator = () => {
    const [range, setRange] = useState(1)
    const [randomPassword, setRandomPassword] = useState(null)
    const [method, setMethod] = useState({
        upperCase: false,
        lowerCase: false,
        numbered: false,
        special: false,
    })
    const [defaultMethod, setDefaultMethod] = useState([])

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const number = '0123456789'.split('');
    const special_char = '!@#$%^&*()-_+=<>?'.split('');

    useEffect(() => {
        generateRandomPassword();
    }, [range, defaultMethod]);

    useEffect(() => {
        console.log('defaultMethod:', defaultMethod);
    }, [defaultMethod]);

    const generateRandomPassword = () => {
        let pool = []; // Initialize pool inside the function to reset it every time

        // Add characters to pool based on selected options
        if (defaultMethod.includes("upperCase")) {
            pool.push(...uppercase);
        }
        if (defaultMethod.includes("lowerCase")) {
            pool.push(...lowercase);
        }
        if (defaultMethod.includes("numbered")) {
            pool.push(...number);
        }
        if (defaultMethod.includes("special_char")) {
            pool.push(...special_char);
        }

        // If no character type is selected, return an empty string
        if (pool.length === 0) {
            setRandomPassword('');
            return;
        }

        const result = [];
        // Generate random password from pool
        for (let i = 0; i < range; i++) {
            const randomIndex = Math.floor(Math.random() * pool.length);
            result.push(pool[randomIndex]);
        }

        setRandomPassword(result.join('')); // Join the array to form the password string
    };

    const handleCheckboxClick = (type) => {
        setMethod((prev) => {
            const updatedMethod = { ...prev, [type]: !prev[type] };
            setDefaultMethod(Object.keys(updatedMethod).filter(key => updatedMethod[key]));
            return updatedMethod;
        });
    };

    return (
        <div>
            <p>{randomPassword}</p>
            <span>Range: {range}</span>
            <input
                min={1}
                max={25}
                onChange={(e) => setRange(Number(e.target.value))}
                value={range}
                type="range"
            />
            <input
                type="checkbox"
                checked={method.upperCase}
                onChange={() => handleCheckboxClick('upperCase')}
            /> UpperCase
            <input
                type="checkbox"
                checked={method.lowerCase}
                onChange={() => handleCheckboxClick('lowerCase')}
            /> LowerCase
            <input
                type="checkbox"
                checked={method.numbered}
                onChange={() => handleCheckboxClick('numbered')}
            /> Numbered
            <input
                type="checkbox"
                checked={method.special}
                onChange={() => handleCheckboxClick('special')}
            /> Special Char
        </div>
    );
}

export default PasswordGenerator;

 */