import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import BlogPreviewCol from "../Layout/BlogPreviewCol";
import ListPosts from "../Layout/titlesPostsCol";
import PreviewBlogBar from "../Layout/PreviewBlogBar";

export default function Blog() {
  return (
    <main className="container-fluid p-0 mx-0">
      <h3 className="text-center">{"LEGGI I NOSTRI ARTICOLI"}</h3>
      <div className="row justify-content-center m-0">
        <ListPosts />
        <PreviewBlogBar />
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <h3>{"Sfoglia le anteprime"}</h3>
                <BlogPreviewCol />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
