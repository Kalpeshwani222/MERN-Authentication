import React, { useEffect, useState } from "react";
import axios from "axios";

const AddComment = () => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/comment/add-comment`,{
          content,
        },
        config
      );
      setContent("")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="add-comment">
        <h3>Add Comments</h3>
        <div className="container">
          <form onSubmit={onSubmit}>
            <div>
              <textarea
                rows="5"
                required
                className="form-control"
                value={content}
                placeholder="Type a comment"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group mt-3" align="right">
              <input
                type="submit"
                className="btn btn-dark"
                value="Post Comment"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddComment;
