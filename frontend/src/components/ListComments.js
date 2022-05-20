import React from "react";

const ListComments = () => {
  return (
    <>
      <section className="comment-list mt-4">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-10 col-lg-12">
              <ul className="comments-box" style={{
                  listStyleType:"none",
                  paddingLeft:"0",
                }}>
                <li className="card border-light mb-2">
                  <div className="card-body">
                    <h6 style={{fontWeight:"700"}}>Kalpesh Wani</h6>
                    <p style={{
                        fontSize:"15px"
                    }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop
                    </p>
                    <div className="">
                        <small>11.00am</small>
                    </div>
                  </div>
                </li>

                 <li className="card border-light mb-2">
                  <div className="card-body">
                    <h6 style={{fontWeight:"700"}}>Kalpesh Wani</h6>
                    <p style={{
                        fontSize:"15px"
                    }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop
                    </p>
                    <div className="">
                        <small>11.00am</small>
                    </div>
                  </div>
                </li>



                 <li className="card border-light mb-2">
                  <div className="card-body">
                    <h6 style={{fontWeight:"700"}}>Kalpesh Wani</h6>
                    <p style={{
                        fontSize:"15px"
                    }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop
                    </p>
                    <div className="">
                        <small>11.00am</small>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListComments;
