import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ newws }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = newws;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Author */}
      <div className="flex items-center justify-between px-5 py-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body pt-4">
        <h2 className="card-title text-lg font-bold leading-snug">
          {title}
        </h2>

        <figure className="my-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full object-cover"
          />
        </figure>

        <p className="text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <Link to={`/news-details/${id}`} className="btn btn-link p-0 mt-2 text-primary">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
