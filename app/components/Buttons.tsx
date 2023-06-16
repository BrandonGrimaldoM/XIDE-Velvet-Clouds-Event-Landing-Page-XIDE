import Link from "next/link";

interface MyButton {
  text: string;
  link: string;
  color: boolean;
}

export default function ButtonPage(props: MyButton) {
  return (
    <>
      {props.color ? (
        <Link href={props.link}>
          <button className="bg-[#00FF85] w-full rounded-md p-3 my-1 lg:w-auto lg:px-9">
            <p className="uppercase text-black font-bold text-sm">{props.text}</p>
          </button>
        </Link>
      ) : (
        <Link href={props.link}>
          <button className="bg-white w-full rounded-md p-3 my-1 lg:w-auto lg:px-9">
            <p className="uppercase text-black font-bold text-sm">{props.text}</p>
          </button>
        </Link>
      )}
    </>
  );
}
