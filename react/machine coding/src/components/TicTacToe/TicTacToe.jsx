import React, { useEffect, useState } from 'react'
import "./TicTacToe.css"

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [message, setMessage] = useState('')

    const handleClick = (id) => {
        if (board[id]) return;
        const newBoard = [...board]
        newBoard[id] = isXNext ? "X" : "O"
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const isDraw = () => {
        if (board.every(item => item !== null)) {
            console.log("its a draw")
            setMessage("Its a draw")
            setBoard(Array(9).fill(null))
        }
    }

    const isWinner = () => {
        try {
            if (board[0] !== null && board[0] === board[1] && board[1] === board[2] ||
                board[3] !== null && board[3] === board[4] && board[4] === board[5] ||
                board[6] !== null && board[6] === board[7] && board[7] === board[8] ||
                board[0] !== null && board[3] === board[3] && board[3] === board[6] ||
                board[1] !== null && board[1] === board[4] && board[4] === board[7] ||
                board[2] !== null && board[2] === board[5] && board[5] === board[8] ||
                board[0] !== null && board[0] === board[4] && board[4] === board[8] ||
                board[2] !== null && board[2] === board[4] && board[4] === board[6]
            ) {
                setMessage(isXNext ? "O" + " Its a win" : "X" + " Its a win")
                setBoard(Array(9).fill(null))
                // setMessage('')
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isDraw()
        isWinner()
    }, [board])

    return (
        <div className="tic-tac-toe">
            {board.map((value, i) => (
                <div onClick={() => handleClick(i)} key={i}>
                    {value}
                </div>
            ))}
            {message}
        </div>
    )
}

export default TicTacToe