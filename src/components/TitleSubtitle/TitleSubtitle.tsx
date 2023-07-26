interface TitleSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({ title, subtitle }) => {
  const splitTitle = title.split(" ");
  const firstPart = splitTitle[0];
  const secondPart = splitTitle.slice(1).join(" "); // In case there are more words in the title

  return (
    <div className="container max-w-5xl mx-auto px-4 h-24 text-center mt-20">
      <h1 className="text-4xl font-bold uppercase space-x-2">
        <span className="text-white">{firstPart}</span>
        <span className="text-blue-500">{secondPart}</span>
      </h1>
      <h2 className="horizontal-line text-sm uppercase font-bold text-gray-400 mt-5">
        {subtitle}
      </h2>
    </div>
  );
};

export default TitleSubtitle;
