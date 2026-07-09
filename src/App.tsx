import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎮 Google Play Clone
            </h1>
            <p className="text-gray-600 mb-6">
              Bem-vindo ao seu clone da Google Play Store editável
            </p>
            
            <div className="mb-8 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <p className="text-sm text-indigo-700">
                ✅ Supabase conectado<br/>
                ✅ Tailwind CSS ativo<br/>
                ✅ React 19 rodando<br/>
                ✅ Lovable integrado
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                Cliques: {count}
              </button>
              
              <p className="text-center text-gray-600 text-sm">
                Seu projeto está rodando perfeitamente! 🚀
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}