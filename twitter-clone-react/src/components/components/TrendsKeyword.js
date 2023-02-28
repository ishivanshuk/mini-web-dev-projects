import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trending in India",
      keyword: "Keyword1",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trending in India",
      keyword: "Keyword2",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trending in India",
      keyword: "Keyword3",
      totalKeywords: "2560k",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends around the world</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;
