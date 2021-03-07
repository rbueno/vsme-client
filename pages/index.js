import Image from 'next/image'
import CustomHead from '../components/DinamicHead'
import myLoader from '../utils/myLoader';

export default function Home({ data }) {

  return (
    <div>
        <CustomHead
        title="VSME - Verified by Subject-Matter Experts"
        description="Conteúdo verificado por especialistas no assunto"
        canonicalURL="https://vsme.app"
        ogURL="https://vsme.app"
        ogTitle="VSME - Verified by Subject-Matter Experts"
        ogDescription="Conteúdo verificado por especialistas no assunto"
        ogImage=""
      />
      <main>
       {
         data.map((post) => (
           <div key={post._id}>
             <div style={{ width: '250px'}}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  alt={post.title}
                  loader={myLoader}
                  src={post.mainImageURL}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p>{post.sme.length} {post.sme.length > 1 ? 'SME-Stamps' : 'SME-Stamp'}</p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
             </div>
           </div>
         ))
       }
      </main>

      <footer>
        VSME{'  '}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvedor > Contribuir Github
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const result = await fetch(`https://smecollection.herokuapp.com/v1/post/all`);
  const data = await result.json();
  return {
    props: {
      data,
    }
  }
}
