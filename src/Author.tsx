import { AuthorInfo } from "./types";

interface Props {
  authors: AuthorInfo[];
}

const Author = ({ authors }: Props) => (
  <div className="py-1">
    {authors.map((author, index) => (
      <span className="relative p-4" key={index}>
        <a
          className="text-2xl font-normal text-gray no-underline hover-text-#03396C"
        >
          {author.name}
        </a>
      </span>
    ))}
  </div>
);

export default Author;
