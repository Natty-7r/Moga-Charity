import Link from "next/link";
type PropI = {
  color: string;
};

const Title = (props: PropI) => {
  const { color } = props;
  return (
    <Link
      href="/"
      className={`navbar_title font-roboto font-bold capitalize text-2xl md:text-3xl xl:text-4xl font-black tracking-wide ${color} `}
    >
      Moga charity
    </Link>
  );
};

export default Title;
