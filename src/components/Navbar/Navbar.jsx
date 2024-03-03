import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg" alt="" />
      <input type="text" placeholder="Search for your favourite groups in ATG" />
      <h4>Create Account.&nbsp;&nbsp; <span>It&apos;s free</span><img className="rounded-circle" alt="Profile" src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"/> </h4>
    </nav>
  )
}

export default Navbar
