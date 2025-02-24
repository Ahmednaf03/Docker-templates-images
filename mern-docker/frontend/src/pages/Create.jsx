import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

 const [form, setForm] = useState({
  title: "",
  link: "",
  description: "",
  });

  const handleChange = (e) => {
    
    setForm((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/sample`, form)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setForm({
      title: "",
      link: "",
      description: "",
    });

    navigate("/");
  };

  return (
    <main className="container">
      <div className="form_area">
      <h1 className="title">Create data</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form_group">
            <label htmlFor="title" className="sub_title">
              Title
            </label>
            <input
              type="text"
              className="form_style"
              id="title"
              placeholder="Enter an title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="link" className="sub_title">
              Some redirect Link
            </label>
            <input
              type="url"
              className="form_style"
              id="link"
              placeholder="Enter an redirect"
              value={form.link}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="description" className="sub_title">
              description
            </label>
            <input
              type="text"
              className="form_style"
              id="description"
              placeholder="Enter the description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Create;
