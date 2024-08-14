import ReactMarkdown from 'react-markdown';
import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import Image from 'next/image';
import { Prism as SyntaxHihlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

function PostContent(props){
    const{ post } = props;
    const imagePath =`/images/posts/${post.slug}/${post.image}`;

    const customRenderers ={ //how to render Next Image From Markdown

        /* img(image) {
            return (
                <Image src={`/images/posts/${post.slug}/${image.src}`} 
                alt={image.alt} 
                width={600} 
                height={300}
                />
            );
        }, */
        p(paragraph){
            const{ node } = paragraph;
            if(node.children[0].tagName === 'img'){
                const image = node.children[0];
                return(
                    <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.properties.src}`} 
                        alt={image.properties.alt} 
                        width={600} 
                        height={300}
                    />
                    </div>
                );
            }
            return <p>{ paragraph.children}</p>;
        },
        code(code){
            const{ className, children } = code;
            const language = className.split('-')[1]; //className is somthing like language-js => we need the "js" part here
            return (
                <SyntaxHihlighter 
                    style={atomDark}
                    language={language} 
                    children={children}
                />
            );
        },
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    );
}
export default PostContent;