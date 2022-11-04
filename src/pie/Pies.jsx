import { RiInstagramLine, RiTwitterLine, RiFacebookLine } from "react-icons/ri"

export const Pies = () => {

  return (
    <footer className="bg-light container">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ fontSize: "20px" }}>Contáctame por mis redes sociales:</span>
        </div>
        <div>
          <a href="https://www.instagram.com/" style={{listStyle: "none", textDecoration: "none"}}>
            <RiInstagramLine size={40} />
          </a>
          <a href="https://www.twitter.com">
          <RiTwitterLine size={40} />
          </a>
          <a href="https://www.facebook.com">
          <RiFacebookLine size={40} />
          </a>
        </div>
      </section>
    </footer>
  )
}