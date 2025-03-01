import Head from "next/head"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import style from "../styles/About.module.scss"
import {CSSTransition} from 'react-transition-group'
import { posts } from "../components/consts/aboutPosts"

export default function About({ }) {
    return(
        <>
            <Head>
                <title>Стройдвери | О компании - почему нам доверяют</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Купить качественные, надежные, изготовленные строго по ГОСТу строительные двери для вашего объекта стоит именно у нас!" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <PostsWrapper />
        </>
    )
}

const PostsWrapper = ({ }) => {
    return(
        <div className={style.advantages}>
            <h1>Почему стоит выбрать нашу компанию</h1>
            {posts.lenght !== 0 ? (
                posts.map((post) => (
                    <LazyPost key={post.id}>
                        <Post data={post} />
                    </LazyPost>
                ))
            ): (
                <div> Ошибка, попробуйте позже</div>
            )}
        </div>
    )
}


export const LazyPost = ({ children }) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const boxRef = useRef(null);
    const options = {
        rootMargin: '0px',
        threshold: 0.6,
    }

    useEffect(() => {
        const post = boxRef.current;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target)
                }
            })
        }, options);

        observer.observe(post);

        return () => observer.unobserve(post);
    }, [])

    return(
        <div ref={boxRef} className={style.postBox}>
            {!isIntersecting ? <Placeholder /> : children}
        </div>
    )
}

const Post = ({ data }) => {
    const postRef = useRef(null);
    const [start, setStart] = useState(false);
    
    const postAnimationDotsR = {
        enter: style.postEnterR,
        enterActive: style.postEnterRActive,
    };

    const postAnimationDotsL = {
        enter: style.postEnterL,
        enterActive: style.postEnterLActive,
    };

    useEffect(() => {
        setStart(true);
    }, [])
    
    return(
        <CSSTransition 
            in={start}
            nodeRef={postRef}
            classNames={(data.id % 2) == 0 ? postAnimationDotsL : postAnimationDotsR}
            timeout={1600}
            mountOnEnter
        > 
            <div 
                ref={postRef} 
                key={data.id} 
                className={(data.id % 2) == 0 ?
                    style.post : `${style.post} ${style.left}`}>
                {data.id != '1' ? (<div className={style.image}>
                    <Image
                        src={data.image}
                        alt={data.head}
                        width={512}
                        height={512}
                        style={{
                            'width': 'auto',
                            'height': '100%',
                        }}
                    />
                </div>) : null}
                <div className={style.data}>
                    <div className={style.name}>
                        <h2>{data.head}</h2>
                    </div>
                    <div className={style.description}>
                        <p>{data.desc}</p>
                    </div>
                </div>
            </div>
        </CSSTransition> 
    )
}

const Placeholder = ({}) => {
    return( 
        <div className={style.placeHolder}>
        </div>
    )
};