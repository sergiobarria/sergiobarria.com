import Layout from '@/components/layout/Layout'

export default function AboutPage() {
  const customMetadata = {
    title: 'About | Sergio Barria',
    url: 'https://sergiobarria.com/about',
  }

  return (
    <Layout customMetadata={customMetadata}>
      <section className="section">
        <div className="layout">
          <h1>About me</h1>
          <article className="mt-8 prose max-w-none">
            <p>
              Hello! I'm Sergio. I'm a Civil Engineer - Web Developer from
              Panama.
            </p>
            <p>
              I first had a taste for software development a few years back in
              college. Although I liked it, I kept focus on my career so I
              couldn't keep practicing.
            </p>
            <p>
              Because of the pandemic, there was not much to do during
              quarantine, so I started looking for some new hobbies. Until the
              end of 2020 when I got curiosity again of learning about software
              development, this time focusing in web development. There is so
              much technologies to learn that I quickly fell in love with
              programming.
            </p>
            <p>
              I created this website for to main reasons. The first one is to
              showcase and share all the things I've learned during my journey,
              and who knows?, maybe help others, that like me are learning. The
              second reason, is because I always like to learn new things. So I
              wanted this project to be where I can put in practice all those
              things I'm learning, like, new technologies, best practices, etc.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}
