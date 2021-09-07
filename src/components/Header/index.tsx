// import logoImg from "../../assets/logo.svg";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className="flex items-center content-center h-16 w-full bg-gray-900 text-gray-50 py-8 px-16 border-1 border-solid border-gray-100">
      <Logo />

      <SearchBox />

      <span className="ml-auto capitalize">{currentDate}</span>
    </header>
  );
};
