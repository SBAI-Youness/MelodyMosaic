import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold text-teal-600 underline decoration-black">
        MelodyMosaic
      </h1>
      <Button asChild>
        <a 
          href="https://github.com/SBAI-Youness"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          Check my GitHub
        </a>
      </Button>
    </div>
  )
}

export default App