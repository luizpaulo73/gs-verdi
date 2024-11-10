export default function Loading() {
  return (
    <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
    <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-green-300 text-4xl animate-spin flex items-center justify-center border-t-green-300 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-green-700 text-2xl animate-spin flex items-center justify-center border-t-green-700 rounded-full">
            </div>
        </div>
        <p className="text-creme text-center text-lg font-bold">Carregando...</p>
    </div>
    </div>
  )
}