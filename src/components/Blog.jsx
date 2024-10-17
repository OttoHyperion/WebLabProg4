import blogData from "../mockData/blogData";


export const BlogHeader = ({ header }) => {
    <h2 className="blog_header">{header}</h2>; 
};

export const LargeBlog = ({blog1}) => {
    const {image: {alt, src}, data, text} = blog1
    return (
        <div className="block_1">
            <img src={src} alt={alt} className="block_1_image"  />
            <p className="data_1">{data}</p>
            <p className="text_1">{text}</p>
            <a href="/blog" className="link_its_future">Читать полную статью</a>
        </div>
    );
};

export const LittleBlog = ({item}) => {
    const { image: {alt, src}, data, text} = item
    return (
        <div className="block_3">
            <img src={src} alt={alt} />
            <p className="data_2">{data}</p>
            <p className="text_2">{text}</p>
            <a href="/blog" className="link_its_future">Читать полную статью</a>
        </div>
    );
};

export const LittleBlogs = ({blog2}) => {
    return blog2.map((item, index) => (
        <LittleBlog key={index} item={item} />
      ));
};

const Blog = () => {
    const { header, blog1, blog2 } = blogData;
    return (
        <>
            <BlogHeader header={header} />
            <div className="text_and_img">
                <LargeBlog blog1={blog1} />
                <div className="block_2">
                    <LittleBlogs blog2={blog2} />
                </div>
            </div>
        </>
    );
};

export default Blog;


