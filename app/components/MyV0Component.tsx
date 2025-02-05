import GuessTheTubeStation from "@/components/guess-the-tube-station"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* Your existing profile content goes here */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Add your personal information, skills, and experiences here.</p>
      </section>

      {/* Projects or Portfolio section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <p>List your projects or portfolio items here.</p>
      </section>

      {/* Game section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Try My London Tube Station Game!</h2>
        <GuessTheTubeStation />
      </section>

      {/* Contact information */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>Add your contact information or a contact form here.</p>
      </section>
    </div>
  )
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

