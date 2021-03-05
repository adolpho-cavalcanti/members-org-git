import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import styles from '../../styles/components/Card.module.css';

export default function Member({ user }) {

    const { isFallback } = useRouter();

    if(isFallback) {
        return <p>Carregando...</p>
    }

    return (
        <div className={styles.card}>
            <img src={user.avatar_url} alt="Avatar" style={{ width: '100%' }} />
            <div className={styles.container}>
                <h4>{user.name}</h4>
                <p>{user.bio}</p>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://api.github.com/orgs/facebook/members');
    const data = await response.json();

    const paths = data.map(member => {
        return {
            params: { login: member.login }
        }
    });

    return{
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { login } = context.params;

    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();

    return{
        props: {
            user: data,
        }
    }
}