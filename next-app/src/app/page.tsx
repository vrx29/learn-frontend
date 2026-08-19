import Link from "next/link";

type LinkType = {
  id: number;
  name: string;
  link: string;
};
export default function Home() {
  const links: LinkType[] = [
    { id: 1, name: "Date Picker", link: "date-picker" },
    { id: 2, name: "Changelog", link: "changelog" },
  ];
  return (
    <main>
      <h1>Components Design</h1>
      <ol>
        {links.map((i: LinkType) => (
          <li key={i.id}>
            <Link href={i.link}>{i.name}</Link>{" "}
          </li>
        ))}
      </ol>
    </main>
  );
}
