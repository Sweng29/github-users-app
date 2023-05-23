import React from "react";

const User = ({ avatar_url, login, type, html_url, repos_url, url }) => {
  return (
    <div id="container">
      <div className="card">
        <img src={avatar_url} alt={login} />
        <div className="card__details">
          <h4 className="name">{login}</h4>
          <span className="tag">
            <a href={url}>Git Profile</a>
          </span>
          <span className="tag">
            <a href={html_url}>Git Html Profile Link</a>
          </span>
          <span className="tag">
            <a href={repos_url}>Git Repo Link</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
