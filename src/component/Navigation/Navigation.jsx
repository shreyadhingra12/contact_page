import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
        <img src="/images/s_logo.png" alt="logo" />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </nav> 
  )
}

export default Navigation
