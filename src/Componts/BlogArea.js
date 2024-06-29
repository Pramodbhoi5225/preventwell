

import React from 'react';

const BlogSection = () => {
  const sectionStyle = {
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const singleNewsStyle = {
    backgroundColor: '#fff',
    marginBottom: '30px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const newsHeadStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  };

  const newsImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const newsBodyStyle = {
    padding: '20px',
  };

  const dateStyle = {
    color: '#888',
    fontSize: '14px',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  };

  return (
    <section style={sectionStyle} id="blog">
      <div style={containerStyle}>
        <div className="row">
          <div className="col-lg-12">
            <div style={sectionTitleStyle}>
              <h2>Health Insurance Camp</h2>
              {/* <img src="img/section-img.png" alt="#" /> */}
              <p>
                Health Insurance Camp is a collaborative initiative aimed at
                increasing awareness and accessibility to health insurance coverage
                within communities.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div style={singleNewsStyle}>
              <div style={newsHeadStyle}>
                <img src="images/pune.jpeg" alt="#" style={newsImageStyle} />
              </div>
              <div style={newsBodyStyle}>
                <div>
                  <div style={dateStyle}>22 Aug, 2023</div>
                  <h2 style={titleStyle}>Mumbai</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div style={singleNewsStyle}>
              <div style={newsHeadStyle}>
                <img src="images/daund.jpeg" alt="#" style={newsImageStyle} />
              </div>
              <div style={newsBodyStyle}>
                <div>
                  <div style={dateStyle}>15 Oct, 2024</div>
                  <h2 style={titleStyle}>Daund - Pune</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div style={singleNewsStyle}>
              <div style={newsHeadStyle}>
                <img src="images/mumbai.jpeg" alt="#" style={newsImageStyle} />
              </div>
              <div style={newsBodyStyle}>
                <div>
                  <div style={dateStyle}>05 Jan, 2024</div>
                  <h2 style={titleStyle}>Karve Nagar</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

