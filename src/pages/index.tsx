import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { Card } from '../components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" style={{ width: '200px' }} />
      <p>Passe o nome do usuário membro do grupo do Facebook no Github:</p>
      <p>usando a seguinte URL: /members/<strong>usuario</strong></p>
      <p>Alguns Usuários:</p>
      <ul>
        <li>aadsm</li>
        <li>aaronabramov</li>
        <li>acdlite</li>
        <li>adamgross42</li>
      </ul>
    </div>
  )
}
