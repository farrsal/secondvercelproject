"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

export default function GuessTheNumber() {
  const [secretNumber, setSecretNumber] = useState(0)
  const [guess, setGuess] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [message, setMessage] = useState("")
  const [gameWon, setGameWon] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1)
    setGuess("")
    setAttempts(0)
    setMessage("")
    setGameWon(false)
  }

  const handleGuess = () => {
    const guessNumber = Number.parseInt(guess)
    if (isNaN(guessNumber)) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid number.",
        variant: "destructive",
      })
      return
    }

    setAttempts(attempts + 1)

    if (guessNumber === secretNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`)
      setGameWon(true)
      toast({
        title: "You won!",
        description: `You guessed the number in ${attempts + 1} attempts.`,
        variant: "default",
      })
    } else if (guessNumber < secretNumber) {
      setMessage("Too low! Try a higher number.")
    } else {
      setMessage("Too high! Try a lower number.")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Guess the Number</CardTitle>
        <CardDescription>Try to guess the number between 1 and 100.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Enter your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={gameWon}
            className="w-full"
          />
          <p className={cn("text-sm font-medium transition-colors", gameWon ? "text-green-500" : "text-yellow-500")}>
            {message}
          </p>
          <p className="text-sm text-gray-500">Attempts: {attempts}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGuess} disabled={gameWon}>
          Guess
        </Button>
        <Button onClick={startNewGame} variant="outline">
          New Game
        </Button>
      </CardFooter>
    </Card>
  )
}

