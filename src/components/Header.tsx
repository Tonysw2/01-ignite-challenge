import Logo from '../assets/logo.svg'

export const Header = function () {
  return (
    <header className="flex items-center justify-center h-[200px] bg-gray-700">
      <img src={Logo} alt="Logo da aplicação" />
    </header>
  )
}
