import ConteudoLogin from '@/components/ConteudoLogin/ConteudoLogin'

export default function Login() {
  return (
    <>
      <div className='flex flex-col gap-5'>
      <h1 className="text-creme text-center text-2xl sm:text-3xl">Entre na sua conta</h1>
        <ConteudoLogin />
      </div>
    </>
  )
}
