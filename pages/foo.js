import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import randomstring from 'randomstring'

function Foo({ msg }){
    return (

        <Layout foo>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>Hello from foo.js</div>
            <div>your random string is: {msg}</div>
        </Layout>
    )
}

export async function getServerSideProps(context){
    return {
        props: {
            msg: randomstring.generate()
        }
    }
}

export default Foo