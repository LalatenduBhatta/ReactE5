import "./Child2.css"
// import image from "./wallpaper.jpg"

function Child2() {
    return (
        <div>
            <h1 id="abc">EXTERNAL CSS</h1>
            <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="flower" height={"200px"} width={"500px"} />
            {/* <img src={image} alt="" /> */}
            <img src="/wallpaper.jpg" alt="" />
        </div>
    )
}

export default Child2