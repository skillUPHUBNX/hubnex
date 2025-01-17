import { ArrowRight, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

interface DropdownItem {
    label: string;
    link: string;
}

interface TopNavItem {
    label: string;
    link?: string;
    children?: DropdownItem[];
}

interface HeaderProps {
    topHeader: TopNavItem[];
}

const Header: React.FC<HeaderProps> = ({ topHeader }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleMenuItemClick = () => {
        setActiveDropdown(null); // Close the dropdown menu
        setIsMenuOpen(false);    // Close the mobile menu (if applicable)
    };

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const offset = headerRef.current.offsetTop;
                setIsSticky(window.scrollY > offset);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
       
        <header
            ref={headerRef}
            className={`${
                isSticky
                    ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 transition-all duration-300 ease-in-out"
                    : "py-4 px-6"
            }`}
              
            >
                 <div className="text-white  container mx-auto">
                <div className="flex items-center justify-between w-full    mx-auto">
                    {/* Logo */}
                    <div className="text-2xl font-bold mr-10">
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 text-black">
                        {topHeader.map((nav, i) => (
                            <Menubar key={i}>
                                <MenubarMenu>
                                    {nav.children ? (
                                        <>
                                            <MenubarTrigger
                                                onClick={() => handleDropdownToggle(nav.label)}
                                                className="flex items-center gap-1"
                                            >
                                                {nav.label}
                                                {activeDropdown === nav.label ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )}
                                            </MenubarTrigger>
                                            {activeDropdown === nav.label && (
                                                <MenubarContent className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg py-2 px-4 w-48 transition-all duration-300 ease-in-out transform opacity-100">
                                                    {nav.children?.map((item, j) => (
                                                        <MenubarItem key={j}>
                                                            <Link to={item.link} onClick={handleMenuItemClick}>{item.label}</Link>
                                                            {j < (nav.children?.length ?? 0) - 1 && <MenubarSeparator />}
                                                        </MenubarItem>
                                                    ))}
                                                </MenubarContent>
                                            )}
                                        </>
                                    ) : (
                                        <Link to={nav.link ?? "#"}>{nav.label}</Link>
                                    )}
                                </MenubarMenu>
                            </Menubar>
                        ))}
                    </nav>

                    {/* Connect Sales Button */}
                    <div className="hidden lg:flex">
                        <Button variant="blue">
                            <Link to="/" className="flex items-center gap-2">
                                Connect Sales
                                <ArrowRight />
                            </Link>
                        </Button>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="lg:hidden flex items-center gap-3" onClick={toggleMenu}>
                        <Button variant="blue">
                            <Link to="/" className="flex items-center gap-2">
                                Connect Sales
                                <ArrowRight />
                            </Link>
                        </Button>
                        <Menu className="text-black cursor-pointer" />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out  ${isMenuOpen ? "h-auto opacity-100 space-y-6 mt-8" : "max-h-0 opacity-0"}`}
                >
                    {topHeader.map((nav, i) => (
                        <div key={i} className="relative">
                            <button
                                onClick={() => handleDropdownToggle(nav.label)}
                                className=" text-lg w-full text-left hover:text-gray-400 text-black  flex items-center justify-between"
                            >
                                {nav.label}
                                {nav.children && (
                                    activeDropdown === nav.label ? (
                                        <ChevronUp className="w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4" />
                                    )
                                )}
                            </button>
                            {activeDropdown === nav.label && nav.children && (
                                <div className="bg-white text-black shadow-lg rounded-lg mt-2 py-2 px-4 w-48 absolute left-0 transition-all duration-300 ease-in-out opacity-100 z-50">
                                    {nav.children.map((item, j) => (
                                        <Link key={j} to={item.link} className="block py-2"  onClick={handleMenuItemClick}>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
            </header>
       
    );
};

export default Header;
