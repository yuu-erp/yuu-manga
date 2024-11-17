import { Logo } from "@/components/shared";

const Header = () => {
  return (
    <header className="fixed z-50 left-0 right-0 top-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent ">
      <div className="container mx-auto w-full h-16 flex items-center justify-between">
        <div className="mr-8">
          <Logo />
        </div>
        <div className="flex-1">Menu</div>
        <div>Tools</div>
      </div>
    </header>
  );
};

export default Header;
