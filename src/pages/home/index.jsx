export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-5">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-auto text-center transform transition-all hover:scale-105 duration-300">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Bem-vindo
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Este é um template moderno criado com React e Tailwind CSS
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-bold text-blue-600 mb-2">Recursos</h3>
                        <p className="text-gray-700">Design responsivo e componentes modernos para sua aplicação.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                        <h3 className="font-bold text-indigo-600 mb-2">Desempenho</h3>
                        <p className="text-gray-700">Otimizado para carregamento rápido e experiência perfeita.</p>
                    </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Começar
                </button>
            </div>
        </div>
    );
}