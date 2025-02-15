
import cat from "../assets/cat.png"
export function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <img src={cat} alt="" className="cat" />
        </div>
    )
}

export default Home;