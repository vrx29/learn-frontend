import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-6 flex justify-between align-center border">
      <div>
        <Image
          src="/next.svg"
          width={60}
          height={60}
          alt="logo"
          style={{ width: "40%", height: "auto" }}
          loading="eager"
        />
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/user">Users</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
